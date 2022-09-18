import React from 'react'

//components
import Nav from './Nav'
import Footer from './Footer'
function Layout({ children }) {
    return (
        <div className='layout'>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}
export default Layout