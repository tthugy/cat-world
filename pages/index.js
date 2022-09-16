import styles from '../styles/index.module.css'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import WebGL from 'three/addons/capabilities/WebGL.js';

export default function Home() {
  if ( WebGL.isWebGL2Available() === false ) {

    document.body.appendChild( WebGL.getWebGL2ErrorMessage() );

  }

  return (
    <></>
  )
}
