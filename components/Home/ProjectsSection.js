/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

function ProjectsSection() {
    return (
        <div className='projects container'>
            <div className="projects_left">
                <div className="project">
                    <img src={`/assets/project1.jpg`} alt="" />
                    <h3>The Modern Buildings</h3>
                    <Link href={`/`}>Details</Link>
                </div>
                <div className="project">
                    <img src={`/assets/project2.jpg`} alt="" />
                    <h3>Residential Architect</h3>
                    <Link href={`/`}>Details</Link>
                </div>
            </div>
            <div className="projects_right">
                <h1>Our Latest Project</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus modi quos incidunt velit fugiat dolor tempore expedita
                    voluptas minima atque, beatae nemo laborum, consectetur debitis,
                    recusandae amet et error natus.
                </p>
                <button className='projects_btn'>See all project</button>
            </div>
        </div>
    )
}

export default ProjectsSection