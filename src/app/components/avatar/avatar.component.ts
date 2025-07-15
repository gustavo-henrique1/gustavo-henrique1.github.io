import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ThemeService } from 'src/app/services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent
  implements AfterViewInit, OnChanges, OnInit, OnDestroy
{
  @Input() visible: boolean = true;

  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private gltfLoader = new GLTFLoader();

  private model: THREE.Object3D | null = null;
  private headBone: THREE.Object3D | null = null;
  private leftArmBone: THREE.Object3D | null = null;
  private rightArmBone: THREE.Object3D | null = null;

  private lightModel: THREE.Object3D | null = null;
  private darkModel: THREE.Object3D | null = null;

  private clock = new THREE.Clock();
  private mouse = new THREE.Vector2();
  private blinkTimer = 0;
  private blinkDuration = 0.5;
  private blinkCooldown = 0.1 + Math.random() * 0.1;
  private shouldRender = true;

  private isDarkMode = false;
  private themeSub!: Subscription;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeSub = this.themeService.darkMode$.subscribe((isDark) => {
      const changed = this.isDarkMode !== isDark;
      this.isDarkMode = isDark;
      if (changed) this.swapModel();
    });
  }

  ngAfterViewInit(): void {
    this.initScene();
    this.preloadModels();
    this.animate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible']) {
      this.shouldRender = this.visible;
    }
  }

  ngOnDestroy(): void {
    this.themeSub?.unsubscribe();
    window.removeEventListener('resize', this.onWindowResize);
    window.removeEventListener('mousemove', this.onMouseMove);
  }

  private initScene(): void {
    const canvas = this.canvasRef.nativeElement;
    const width = 320;
    const height = 400;

    this.scene = new THREE.Scene();
    this.scene.background = null;

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(0, 1.3, 1.3);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0x000000, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 2, 4);
    this.scene.add(directionalLight);

    window.addEventListener('resize', this.onWindowResize);
    window.addEventListener('mousemove', this.onMouseMove);
  }

  private preloadModels(): void {
    this.gltfLoader.load('assets/images/avatar.glb', (gltf) => {
      this.lightModel = gltf.scene;
      if (!this.isDarkMode) this.swapModel();
    });

    this.gltfLoader.load('assets/images/avatar-dark.glb', (gltf) => {
      this.darkModel = gltf.scene;
      if (this.isDarkMode) this.swapModel();
    });
  }

  private swapModel(): void {
    const sourceModel = this.isDarkMode ? this.darkModel : this.lightModel;
    if (!sourceModel) return;

    // Remove o modelo anterior da cena
    if (this.model) {
      this.scene.remove(this.model);
    }

    // Adiciona o novo modelo diretamente (sem clone!)
    this.model = sourceModel;
    this.scene.add(this.model);

    // Posiciona e ajusta escala do modelo
    this.model.scale.set(1.8, 1.8, 1.8);
    this.model.position.set(0, -1.5, 0);
    this.model.rotation.set(0, 0, 0);

    // Atualiza os bones com base no novo modelo
    this.headBone = this.model.getObjectByName('Head') || null;
    this.leftArmBone = this.model.getObjectByName('LeftArm') || null;
    this.rightArmBone = this.model.getObjectByName('RightArm') || null;

    // Reposiciona câmera
    this.camera.lookAt(0, 1.5, 0);
  }

  private onWindowResize = () => {
    const width = 320;
    const height = 400;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  private onMouseMove = (event: MouseEvent) => {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  private animate = () => {
    requestAnimationFrame(this.animate);

    if (!this.shouldRender) return;

    if (this.headBone) {
      const maxRotationX = THREE.MathUtils.degToRad(15);
      const maxRotationY = THREE.MathUtils.degToRad(30);
      this.headBone.rotation.y = this.mouse.x * maxRotationY;
      this.headBone.rotation.x = -this.mouse.y * maxRotationX;
    }

    if (this.leftArmBone) {
      this.leftArmBone.rotation.x = THREE.MathUtils.degToRad(75);
    }
    if (this.rightArmBone) {
      this.rightArmBone.rotation.x = THREE.MathUtils.degToRad(75);
    }

    const delta = this.clock.getDelta();
    this.blinkTimer += delta;

    if (this.model) {
      this.model.traverse((child) => {
        if (
          (child as THREE.Mesh).morphTargetInfluences &&
          (child as THREE.Mesh).morphTargetDictionary
        ) {
          const mesh = child as THREE.Mesh;
          const dict = mesh.morphTargetDictionary!;
          const influences = mesh.morphTargetInfluences!;

          const blinkL = dict['eyeBlinkLeft'];
          const blinkR = dict['eyeBlinkRight'];

          if (blinkL !== undefined && blinkR !== undefined) {
            if (this.blinkTimer >= this.blinkCooldown) {
              const blinkProgress =
                1 -
                Math.abs(
                  this.blinkTimer - this.blinkCooldown - this.blinkDuration / 2
                ) /
                  (this.blinkDuration / 2);
              const blinkStrength = THREE.MathUtils.clamp(blinkProgress, 0, 1);

              influences[blinkL] = blinkStrength;
              influences[blinkR] = blinkStrength;

              if (this.blinkTimer >= this.blinkCooldown + this.blinkDuration) {
                this.blinkTimer = 0;
                this.blinkCooldown = 3 + Math.random() * 3;
              }
            } else {
              influences[blinkL] = 0;
              influences[blinkR] = 0;
            }
          }
        }
      });
    }

    this.renderer.render(this.scene, this.camera);
  };
}
