import React from 'react'
import "./featured.css"
import man from "../../../public/img/man.png"
import search from "../../../public/img/search.png"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">

            {/* LEFT SECTION */}
            <div className="left">
                <h1>Find the perfect freelance services for your business</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src={search} alt=''/>
                        <input type="text" placeholder='ex. "building a website"' />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="right">
                <img src={man} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Featured