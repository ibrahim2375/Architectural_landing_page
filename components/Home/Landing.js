/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
import React from 'react'
import { motion } from "framer-motion"
//image
import Image from 'next/image'
import Link from 'next/link'
function Landing() {
    const titleVariants = {
        hidden: {
            x: '-100vw'
        },
        visiable: {
            x: 0,
            transition: {
                type: 'spring',
                delay: 0.4
            }
        },
    }
    const btnVariants = {
        hidden: {
            opacity: 0
        },
        visiable: {
            x: [0, -20, 20, -20, 20, 0],
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 2.6

            }
        }
    }
    return (
        <div className="landing container">
            <div className="landing_left">
                <motion.h1
                    variants={titleVariants}
                    initial="hidden"
                    animate="visiable"
                >Architecture With different People In Mind</motion.h1>
                <p>Also known as an architectural studio, the architect studio
                    is the space set aside for architects to
                    create designs for all types of structures and the surrounding landscape.
                    The typical architecture firm will provide each architect
                    in their employ with some type of studio space.
                </p>
                <div className="main-btns">
                    <Link href="/contact"><button className='btn-start'>Get Started</button></Link>
                    <Link href="#about"><motion.button
                        variants={btnVariants}
                        initial="hidden"
                        animate="visiable"
                        whileHover="hover"
                        className='btn-view'>View Projects</motion.button></Link>
                </div>
            </div>
            <div className="landing_right">
                <div className="content">
                    <Image
                        className='img'
                        src={'/assets/landing.jpg'}
                        alt="Picture of the author"
                        layout="fill"
                    />
                    <div className="box">
                        <img
                            src={'/assets/landing-box.jpg'}
                            alt="Picture of the author"
                            className="box_img"
                        />
                        <h4>Art Of Architech</h4>
                        <p>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Landing