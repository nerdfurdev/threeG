import * as THREE from 'three';

export class Terrain extends THREE.Mesh {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;

    this.createGeometry();
    this.material = new THREE.MeshStandardMaterial({ color: 0x50a000 });

    this.rotation.x = -Math.PI / 2;
  }

  createGeometry() {
    this.geometry?.dispose();
    this.geometry = new THREE.PlaneGeometry(this.width, this.height);
    this.position.set(this.width / 2, 0, this.height / 2);
  }
}
