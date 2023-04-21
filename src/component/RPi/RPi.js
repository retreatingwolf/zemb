import * as THREE from 'three';
import React, { Component } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

class RPi extends Component {
    componentDidMount(){
        // this.init()
        // this.animate()
    }

    init = () => {
        const scene = new THREE.Scene()
        // scene.background = new THREE.Color( 0xf0f0f0 );
        this.scene = scene
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
        this.camera = camera
        const renderer = new THREE.WebGLRenderer()
        this.renderer = renderer

        const loader = new GLTFLoader();

        loader.load( '/resources/Model/raspberry_p4b_v001.gltf', function ( gltf ) {
            scene.add(gltf.scene);
        }, undefined, function ( error ) {
            console.error(error);
        } );

        // const geometry = new THREE.BoxGeometry(1,1,1)
        // const material = new THREE.MeshPhongMaterial({color:'red'})
        // const mesh = new THREE.Mesh(geometry, material)
        // this.mesh = mesh
        // scene.add(mesh)

        camera.position.y = 300;
        camera.position.set(3,3,3)
        // camera.lookAt(this.rpi_model.position)

        // const pointLight = new THREE.PointLight(0xffffff)
        // pointLight.position.set(3,2,1)
        // scene.add(pointLight)
        // const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5)
        // scene.add(ambientLight)

        renderer.setSize(window.innerWidth, window.innerHeight - 2)
        renderer.render(scene, camera)

        // const controls = new OrbitControls(this.camera, this.renderer.domElement)
        // controls.addEventListener('change', this.handleControl)
        // this.controls = controls

        document.getElementById('stage').appendChild(renderer.domElement)
    }

    handleControl = () => {
        this.renderer.render(this.scene, this.camera)
    }

    animate = () => {
        requestAnimationFrame(this.animate)
        this.mesh.rotation.y += 0.005
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return (
            <div id="stage" style={{height: '90%'}}>

            </div>
        )
    }
}

export default RPi
