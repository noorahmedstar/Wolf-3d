import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { color, normalMap } from 'three/tsl';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";




const Dog = () => {
    gsap.registerPlugin(useGSAP())
    gsap.registerPlugin(ScrollTrigger)




    const model = useGLTF("/model/dog.drc.glb")

    useThree(({ camera, scenc, gl }) => {
        camera.position.z = 0.45
        camera.position.y = 0.15
        gl.toneMapping = THREE.ReinhardToneMapping
        gl.outputColorSpace = THREE.SRGBColorSpace
    })

    const { actions } = useAnimations(model.animations, model.scene)

    useEffect(() => {
        actions["Take 001"].play()
    }, [actions])



    const textures = useTexture({
        normalMap: "/dog_normals.jpg",
      
        branchMap: "/branches_diffuse.jpeg",
        branchNormalmap: "/branches_normals.jpeg"
    })

    textures.normalMap.flipY = false

    

    const wolfTextures = useTexture({
        mat1: "/matcap/mat-1.png",
        mat2: "/matcap/mat-2.png",
        mat3: "/matcap/mat-3.png",
        mat4: "/matcap/mat-4.png",
        ma15: "/matcap/mat-5.png",
        mat6: "/matcap/mat-6.png",
        mat7: "/matcap/mat-7.png",
        mat8: "/matcap/mat-8.png",
        mat9: "/matcap/mat-9.png",
        mat10: "/matcap/mat-10.png",
        mat11: "/matcap/mat-11.png",
        mat12: "/matcap/mat-12.png",
        mat13: "/matcap/mat-13.png",
        mat14: "/matcap/mat-14.png",
        mat15: "/matcap/mat-15.png",
        mat16: "/matcap/mat-16.png",
        mat17: "/matcap/mat-17.png",
        mat18: "/matcap/mat-18.png",
        mat19: "/matcap/mat-19.png",
        mat20: "/matcap/mat-20.png",
    })


    Object.values(wolfTextures).forEach(texture => {
        texture.colorSpace = THREE.SRGBColorSpace
    })

    const[color,Setcolor]= useState(wolfTextures.mat2)

    const dogMaterial = new THREE.MeshMatcapMaterial({
        normalMap: textures.normalMap,
        matcap: color
    })

    const branchMaterial = new THREE.MeshMatcapMaterial({
        normalMap: textures.branchNormalmap,
        map: textures.branchMap
    })






    model.scene.traverse((child) => {
        if (child.name.includes("DOG")) {
            child.material = dogMaterial
        } else {
            child.material = branchMaterial

        }
    })



    const dogModel = useRef(model)

    useEffect(() => {
        const title = document.querySelector("#tomm");

        if (!title) return; // safety check

        const handleClick = () => {
            console.log("hello");
        };

        title.addEventListener("mouseenter", handleClick);

        return () => {
            title.removeEventListener("mouseenter", handleClick);
        };
    }, []);

    useEffect(() => {

        document.querySelector(`.title[img-title="tomm"]`).addEventListener("mouseenter", () => {
            Setcolor(wolfTextures.mat19)
        })
        document.querySelector(`.title[img-title="tomm"]`).addEventListener("mouseleave", () => {
            Setcolor(wolfTextures.mat2)
        })
        document.querySelector(`.title[img-title="navy"]`).addEventListener("mouseenter", () => {
            Setcolor(wolfTextures.mat8)
        })
        document.querySelector(`.title[img-title="navy"]`).addEventListener("mouseleave", () => {
            Setcolor(wolfTextures.mat2)
        })
        document.querySelector(`.title[img-title="chic"]`).addEventListener("mouseenter", () => {
            Setcolor(wolfTextures.mat9)
        })
        document.querySelector(`.title[img-title="chic"]`).addEventListener("mouseleave", () => {
            Setcolor(wolfTextures.mat2)
        })
        document.querySelector(`.title[img-title="phon"]`).addEventListener("mouseenter", () => {
            Setcolor(wolfTextures.mat12)
        })
        document.querySelector(`.title[img-title="phon"]`).addEventListener("mouseleave", () => {
            Setcolor(wolfTextures.mat2)
        })
        document.querySelector(`.title[img-title="kikk"]`).addEventListener("mouseenter", () => {
            Setcolor(wolfTextures.mat10)
        })
        document.querySelector(`.title[img-title="kikk"]`).addEventListener("mouseleave", () => {
            Setcolor(wolfTextures.mat2)
        })
        document.querySelector(`.title[img-title="ken"]`).addEventListener("mouseenter", () => {
            Setcolor(wolfTextures.mat17)
        })
        document.querySelector(`.title[img-title="ken"]`).addEventListener("mouseleave", () => {
            Setcolor(wolfTextures.mat2)
        })
        document.querySelector(`.title[img-title="oper"]`).addEventListener("mouseenter", () => {
            Setcolor(wolfTextures.mat13)
        })
        document.querySelector(`.title[img-title="oper"]`).addEventListener("mouseleave", () => {
            Setcolor(wolfTextures.mat2)
        })
    })


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "section-1",
                endTrigger: "section-3",
                start: "top top",
                end: "bottom bottom ",
              
                scrub: true
            }
        })
        tl.to(dogModel.current.scene.position, {
            z: -"0.5",
            y: -"0.3"
        })
            .to(dogModel.current.scene.rotation, {
                x: -"-0.2"
            })
            .to(dogModel.current.scene.rotation, {
                y: `-=${Math.PI + 0.1}`,
                x: `+=${Math.PI / 13}`
            }, 'ami')
            .to(dogModel.current.scene.position, {
                x: `-= 0.4`,
                z: `+= 0.2`,
                y: `+= 0.3`
            }, 'ami')

    })


    return (


        <>
            <primitive object={model.scene} position={[0.16, -0.5, 0.12]} rotation={[-0.1, Math.PI / 5.5, 0]} />
            <directionalLight position={[0, 5, 5]} color={0xffffff} intensity={10} />

        </>

    )
}

export default Dog
