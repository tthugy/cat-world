import styles from '../styles/index.module.css'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import useStore from './store.js'

export default function Test() {
  const scene = new THREE.Scene();

  const selected = useStore((state) => state.selectAnimal);

  return (
    <div>
      <p className={styles.hi}>This is test page!</p>
      <p className={styles.hi}>You selected... {selected === "dog" ? "🐶" : "🐱" }</p>
      <Link href="/">
            <p className={styles.hi}>Go Home</p>
      </Link>
    </div>
  )
}
