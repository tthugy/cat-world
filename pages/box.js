import React from 'react';
import * as THREE from 'three';

class Viewer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const width = window.innerWidth - 1;
    const height = window.innerHeight - 1;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, width / height, 9, 990);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    this.element.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x4D354E });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 10;

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.cube = cube;
    this.animate();
  }

  animate = () => {
    this.renderer.render(this.scene, this.camera);
    this.cube.rotation.x += 0.08;
    this.cube.rotation.y += 0.08;
    requestAnimationFrame(this.animate);
  }

  render() {
    return (
      <div ref={el => this.element = el} style={{ width: '80%', height: '80%', border: '1px solid #e234f0' }} />
    );
  }
}

export default Viewer;