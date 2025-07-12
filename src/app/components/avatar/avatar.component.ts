import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
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
  private controls!: OrbitControls;
  private fbxLoader = new FBXLoader();
  private model: THREE.Object3D | null = null;
  private headBone: THREE.Object3D | null = null;

  // Novos ossos dos braços
  private leftArmBone: THREE.Object3D | null = null;
  private rightArmBone: THREE.Object3D | null = null;

  private clock = new THREE.Clock();
  private mouse = new THREE.Vector2();

  ngAfterViewInit(): void {
    this.initScene();
    this.loadModel();
    this.animate();
  }

  private initScene(): void {
    const canvas = this.canvasRef.nativeElement;
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.scene = new THREE.Scene();
    this.scene.background = null; // fundo transparente

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(0, 1.5, 1);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Define cor transparente para o fundo do renderer
    this.renderer.setClearColor(0x000000, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 2, 4);
    this.scene.add(directionalLight);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.enableZoom = false;
    this.controls.enablePan = false;

    window.addEventListener('resize', this.onWindowResize);
    window.addEventListener('mousemove', this.onMouseMove);
  }

  private loadModel(): void {
    this.fbxLoader.load(
      'assets/images/meu-avatar.fbx',
      (fbx) => {
        console.log('Modelo FBX carregado:', fbx);
        fbx.traverse((obj) => {
          console.log(obj.name);
        });

        fbx.scale.set(1.8, 1.8, 1.8);
        fbx.position.set(0, -1.5, 0);

        this.model = fbx;
        this.scene.add(fbx);

        // Ossos que queremos manipular
        this.headBone = fbx.getObjectByName('Head') || null;
        this.leftArmBone = fbx.getObjectByName('LeftArm') || null;
        this.rightArmBone = fbx.getObjectByName('RightArm') || null;

        if (!this.headBone) {
          console.warn('Cabeça ("Head") não encontrada no modelo!');
        }
        if (!this.leftArmBone) {
          console.warn('Braço esquerdo ("LeftArm") não encontrado no modelo!');
        }
        if (!this.rightArmBone) {
          console.warn('Braço direito ("RightArm") não encontrado no modelo!');
        }

        const box = new THREE.Box3().setFromObject(fbx);
        const center = new THREE.Vector3();
        box.getCenter(center);

        const targetY = 1.5;
        this.camera.lookAt(0, targetY, 0);
        this.controls.target.set(0, targetY, 0);
      },
      undefined,
      (error) => {
        console.error('Erro ao carregar o FBX:', error);
      }
    );
  }

  private onWindowResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

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

    this.controls.update();

    // Rotacionar a cabeça com base na posição do mouse
    if (this.headBone) {
      const maxRotationX = THREE.MathUtils.degToRad(15);
      const maxRotationY = THREE.MathUtils.degToRad(30);

      this.headBone.rotation.y = this.mouse.x * maxRotationY;
      this.headBone.rotation.x = -this.mouse.y * maxRotationX;
    }

    // Abaixar os braços para ficarem retos para baixo
    if (this.leftArmBone) {
      this.leftArmBone.rotation.x = THREE.MathUtils.degToRad(90);
    }
    if (this.rightArmBone) {
      this.rightArmBone.rotation.x = THREE.MathUtils.degToRad(90);
    }

    this.renderer.render(this.scene, this.camera);
  };
}
