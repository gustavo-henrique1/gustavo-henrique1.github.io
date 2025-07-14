import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private fbxLoader = new FBXLoader();
  private model: THREE.Object3D | null = null;
  private headBone: THREE.Object3D | null = null;
  private leftArmBone: THREE.Object3D | null = null;
  private rightArmBone: THREE.Object3D | null = null;

  private clock = new THREE.Clock();
  private mouse = new THREE.Vector2();

  // >>> Variáveis para piscar naturalmente
  private blinkTimer = 0;
  private blinkDuration = 0.5; // em segundos
  private blinkCooldown = 0.5 + Math.random() * 0.5;

  ngAfterViewInit(): void {
    this.initScene();
    this.loadModel();
    this.animate();
  }

  private initScene(): void {
    const canvas = this.canvasRef.nativeElement;

    // ❗ Ajuste aqui para reduzir o tamanho do canvas e evitar sobras
    const width = 320; // Largura ideal ajustada para o avatar
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

  private loadModel(): void {
    this.fbxLoader.load(
      'assets/images/meu-avatar.fbx',
      (fbx) => {
        // console.log('Modelo FBX carregado:', fbx);
        fbx.traverse((obj) => {
          // console.log(obj.name);
        });

        fbx.scale.set(1.8, 1.8, 1.8);
        fbx.position.set(0, -1.5, 0);

        this.model = fbx;
        this.scene.add(fbx);

        this.headBone = fbx.getObjectByName('Head') || null;
        this.leftArmBone = fbx.getObjectByName('LeftArm') || null;
        this.rightArmBone = fbx.getObjectByName('RightArm') || null;

        const box = new THREE.Box3().setFromObject(fbx);
        const center = new THREE.Vector3();
        box.getCenter(center);

        const targetY = 1.5;
        this.camera.lookAt(0, targetY, 0);
      },
      undefined,
      (error) => {
        console.error('Erro ao carregar o FBX:', error);
      }
    );
  }

  private onWindowResize = () => {
    // ❗ Evite usar window.innerWidth para canvas do avatar (use tamanho fixo)
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

    // Rotação da cabeça
    if (this.headBone) {
      const maxRotationX = THREE.MathUtils.degToRad(15);
      const maxRotationY = THREE.MathUtils.degToRad(30);

      this.headBone.rotation.y = this.mouse.x * maxRotationY;
      this.headBone.rotation.x = -this.mouse.y * maxRotationX;
    }

    // Braços para baixo
    if (this.leftArmBone) {
      this.leftArmBone.rotation.x = THREE.MathUtils.degToRad(75);
    }
    if (this.rightArmBone) {
      this.rightArmBone.rotation.x = THREE.MathUtils.degToRad(75);
    }

    // >>> Piscar naturalmente
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
                this.blinkCooldown = 3 + Math.random() * 3; // novo intervalo
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
