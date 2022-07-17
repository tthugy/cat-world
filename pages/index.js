import styles from '../styles/index.module.css'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import useStore from './store.js'

export default function Home() {
  const scene = new THREE.Scene();

  //const controls = new OrbitControls( camera, renderer.domElement ); // example OrbitControls Components
  return (
    <div>
      <p className={styles.hi}>Hi-cat? Are you...</p>
      <div className={styles.select}>
        <a onClick={useStore((state) => state.selectCat)}>cat🐱</a>
        <a onClick={useStore((state) => state.selectDog)}>dog🐶</a>
      </div>
      <Link href="/test">
        <p className={styles.hi}>Go Test</p>
      </Link>
    </div>
  )
}
