import React, { useState } from 'react'

function Contact() {
    const [userIntersting, setUserIntersting] = useState([
        {
            id: 0,
            title: 'Greek and Roman Classical Architecture.'
        },
        {
            id: 1,
            title: 'Gothic Architecture.'
        },
        {
            id: 2,
            title: 'Baroque.'
        },
        {
            id: 3,
            title: 'Victorian Architecture.'
        },
        {
            id: 4,
            title: 'Modern Architecture.'
        }
    ])
    const [projectsCategories, setProjectsCategories] = useState([
        {
            id: 0,
            category: 'Residential Architecture'
        },
        {
            id: 1,
            category: 'Interior Design'
        },
        {
            id: 2,
            category: 'Refurbishment'
        },
        {
            id: 3,
            category: 'Cultural Architecture'
        },
        {
            id: 4,
            category: 'Commercial & Offices'
        },
        {
            id: 5,
            category: 'Hospitality Architecture'
        },
        {
            id: 6,
            category: 'Public Architecture'
        },
        {
            id: 7,
            category: 'Healthcare Architecture'
        },
        {
            id: 8,
            category: 'Educational Architecture'
        },
        {
            id: 9,
            category: 'Sports Architecture'
        },
        {
            id: 10,
            category: 'Religious Architecture'
        },
        {
            id: 11,
            category: 'Industrial & Infrastructure'
        }
    ])


    return (
        <div className="contact">
            <div className="content">
                <h3>Love to hear from you, Get in touch 🖐️</h3>
                <form>
                    <div className="group_of_input">
                        <div className="input">
                            <label>Your name</label>
                            <input type="text" placeholder='username' />
                        </div>
                        <div className="input">
                            <label>Your email</label>
                            <input type="eamil" placeholder='email' />
                        </div>
                    </div>
                    <div className="group_of_input">
                        <div className="input">
                            <label>What are you interested?</label>
                            <select>
                                {userIntersting.map(i => (<option key={i.id} value={i.title}>{i.title}</option>))}
                            </select>
                        </div>
                        <div className="input">
                            <label>Projects Category</label>
                            <select>
                                {projectsCategories.map(c => (<option key={c.id} value={c.category}>{c.category}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="group_of_input">
                        <div className="input">
                            <label>message</label>
                            <textarea placeholder='message'></textarea>
                        </div>
                    </div>
                    <div className="group_of_input">
                        <div className="input">
                            <button type="submit" className='btn-send' >Just Send </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact