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
      <>
      <div ref={el => this.element = el} style={{ width: '100%', height: '100%', border: '1px solid #e234f0' }} />
      <span>Italy - Barenna Lake Como</span>
      <span>Italy - Milan Centrale</span>
      <span>Italy - Florence</span>
      <span>Italy - Florence Ufizi</span>
      <span>Italy - Florence to Venice</span>
      <span>Italy - Merano Meran</span>
      <span>Italy - Seceda</span>
      <span>Italy - Venice</span>
      <span>Germany - Berlin</span>
      <span>Germany - Berlin Christmas Market</span>
      <span>Germany - Berlin Central Station</span>
      <span>Dresden</span>
      <span>Dresden - Haxen</span>
      <span>Prague</span>
      <span>Prague - Castle</span>
      <span>Prague</span>
      <span>Prague - Christmas Market</span>
      <span>Prague - Market</span>
      <span>Prague - Prague1</span>
      <span>Prague - Prague2</span>
      <span>Prague - Reduta</span>
      <span>Prague - Prague zoo</span>
      <span>Prague - Christmas</span>
      </>
    );
  }
}

export default Viewer;