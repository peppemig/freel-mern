import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {

    const [active, setActive] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    const {pathname} = useLocation()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive)

        return () => {
            window.removeEventListener("scroll", isActive)
        }
    }, [])

    const currentUser = {
        id: 1,
        username: "Mario",
        isSeller: true
    }

  return (
    <div className={active || pathname !== "/" ? "navbarActive" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className='link'>
                    <span className='text'>freel</span>
                </Link>
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Freel Business</span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser?.isSeller && <span>Become a seller</span>}
                <span>Sign in</span>
                {!currentUser && <button>Join</button>}
                {currentUser &&
                    <div className="user" onClick={() => setOpenMenu(!openMenu)}>
                        <img className='userImg' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='' />
                        <span>{currentUser.username}</span>
                        {openMenu &&
                                <div className="options">
                                {currentUser?.isSeller && (
                                        <>
                                        <Link to="/mygigs" className='link'>Gigs</Link>
                                        <Link to="/add" className='link'>Add New Gig</Link>
                                        </>
                                )}
                                <Link to="/orders" className='link'>Orders</Link>
                                <Link to="/messages" className='link'>Messages</Link>
                                <Link tO="/" className='link'>Logout</Link>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
        {(active || pathname !== "/") &&
        <>
        <hr />
        <div className="menu">
                <Link className='link' to="/">Graphics & Design</Link>
                <Link className='link' to="/">Video & Animation</Link>
                <Link className='link' to="/">Writing & Translation</Link>
                <Link className='link' to="/">AI Services</Link>
                <Link className='link' to="/">Digital Marketing</Link>
                <Link className='link' to="/">Music & Audio</Link>
                <Link className='link' to="/">Porgramming & Tech</Link>
                <Link className='link' to="/">Business</Link>
                <Link className='link' to="/">Lifestyle</Link>
        </div>
        </>
        }
    </div>
  )
}

export default Navbar