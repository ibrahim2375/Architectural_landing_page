/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from 'react'

//fontawsome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfLife, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
function Nav() {
    const [navState, setNavState] = useState(false);
    //toggle navbar 
    const NavToggle = () => {
        setNavState(prev => prev ? false : true);
    }
    //handle click on nav 
    const NavClick = () => {
        setNavState(prev => prev ? false : true);
    }
    return (
        <>
            <div className="nav" style={{ top: navState ? '0' : '-100%' }} onClick={NavClick}>
                <div className="logo">
                    <FontAwesomeIcon icon={faStarOfLife} />
                    <span>OYOLLO</span>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="/" className='link'>Home</a></li>
                        <li><a href='/#about' className='link'>About Us</a></li>
                        <li><a href='#services' className='link'>Services</a></li>
                        <li>Blog</li>
                    </ul>
                    <Link href='/contact' className='link'><button className='contact-btn'>Contact</button></Link>
                </div>

            </div>
            <div className="menu-icon" >
                <FontAwesomeIcon
                    icon={navState ? faClose : faBars}
                    size='2x'
                    color={navState ? 'white' : 'black'}
                    onClick={NavToggle} />
            </div>
        </>
    )
}
export default Nav