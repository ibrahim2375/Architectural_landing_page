/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"
import questions from '../../data/questions.json'
function About() {
    const pVarians = {
        hover: {
            // boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.5)',
            cursor: 'pointer',
            scale: 0.9,
            transition: {
                type: 'spring',
                stiffness: 300
            }
        }
    }
    return (
        <div className="about container" id='about'>
            <div className="about_left">
                <h1>Question About Us ?</h1>
                <ul className="questions">
                    {questions.map((q) => (
                        <li key={q.id}>
                            <motion.p
                                variants={pVarians}
                                whileHover="hover"
                            >{q.question}</motion.p>
                            <Link href={`${q.link}`}>View Answer</Link>
                        </li>
                    ))}

                </ul>
            </div>
            <div className="about_right">
                <p>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quas maiores
                    eligendi vitae dolores sit laborum illo eius non.
                </p>
                <img src={`/assets/about.jpg`}
                    alt=''
                />
            </div>
        </div>
    )
}

export default About