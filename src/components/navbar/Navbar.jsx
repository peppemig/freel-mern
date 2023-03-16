import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {

    const [active, setActive] = useState(false)

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive)

        return () => {
            window.removeEventListener("scroll", isActive)
        }
    }, [])

  return (
    <div className={active ? "navbarActive" : "navbar"}>
        <div className="container">
            <div className="logo">
                <span className='text'>freel</span>
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Freel Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Become a seller</span>
                <span>Sign in</span>
                <button>Join</button>
            </div>
        </div>
        {active &&
        <>
        <hr />
        <div className="menu">
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
        </div>
        </>
        }
    </div>
  )
}

export default Navbar