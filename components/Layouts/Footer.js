import Link from 'next/link'
import React, { useState } from 'react'

function Footer() {
    const [services, setServices] = useState([
        {
            id: 0,
            service: 'ARCHTICTURE'
        },
        {
            id: 1,
            service: 'INTERIOR'
        },
        {
            id: 2,
            service: 'LIGHT'
        },
        {
            id: 3,
            service: 'WALL AMRT'
        },
        {
            id: 4,
            service: 'FURNITURE'
        }
    ])
    return (
        <footer id='services'>
            <div className="footer_content">
                <div className="footer_contact">
                    <h1>KEEP CONTACT WITH US</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque animi inventore, ea, qui fugit facilis distinctio totam aspernatur hic
                        esse officia sequi
                        tempora laborum temporibus! Odio delectus ex sint qui!
                    </p>
                    <Link href="/contact"><button className="contact_btn">Contact Now</button></Link>
                </div>
                <div className="services">
                    <h2>Select Services</h2>
                    <div className="services_btns">
                        {services.map(s => (<Link href="/contact" key={s.id}><button className="service_btn" >{s.service}</button></Link>))}
                    </div>
                </div>
            </div>
            <div className="copy_rights">
                <p>TERMS&CONDITIONS</p>
                <p>&copy; Copyright OYOLLO 2022 </p>
                <p>Privacy Policy &rarr;</p>
            </div>
        </footer>
    )
}

export default Footer