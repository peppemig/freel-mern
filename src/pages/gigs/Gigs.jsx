import React, { useState } from 'react'
import "./Gigs.css"
import { gigs } from '../../data'
import GigCard from "../../components/gigCard/GigCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Gigs = () => {
  const [sort, setSort] = useState("sales")
  const [open, setOpen] = useState(false)

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  return (
    <div className="gigs">
      <div className="containerGigs">
        <div className="top">
          <span className='breadcrums'>FREEL {'>'} GRAPHICS & DESIGN</span>
          <h1 style={{marginBottom: '0px'}}>AI Artists</h1>
          <p style={{marginTop: '0px'}} className='catDesc'>Explore the boundaries of art and technology with Freel's AI artists</p>

          <div className="menu">
            <div className="menuLeft">
              <span>Budget</span>
              <input className='minInput' type="text" placeholder='min'/>
              <input className='maxInput' type="text" placeholder='max'/>
              <button className='applyButton'>Apply</button>
            </div>
            <div className="menuRight">
              <span className='sortBy'>Sort By</span>
              <span className='sortType'>{sort === "sales" ? "Best Selling" : "Newest"}</span>
              <FontAwesomeIcon style={{cursor: 'pointer'}} icon={faArrowDown} onClick={() => setOpen(!open)}/>

              {open &&
              <div className="rightMenuSort">
                <span onClick={() => reSort("createdAt")} style={{cursor: 'pointer'}}>Newest</span>
                <span onClick={() => reSort("sales")} style={{cursor: 'pointer'}}>Best Selling</span>
              </div>
              }

            </div>
          </div>
        </div>
        <div className="gigsList">
        {gigs.map(gig => 
        <GigCard item={gig}/>
        )}
        </div>
      </div>
    </div>
  )
}

export default Gigs