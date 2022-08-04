import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const DModel = () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#E2DFE1");

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
  camera.position.set(0, 0.5, 1);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const loader = new GLTFLoader();
  loader.load(
    "./3dmode/scene.gltf",
    (gltf) => {
      scene.add(gltf.scene);
    },
    function (error) {
      console.log("Error: " + error);
    }
  );

  document.body.append(renderer.domElement);

  return <div className="3d-model"></div>;
};

export default DModel;
