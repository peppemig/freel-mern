import React from 'react'
import "./projectCard.css"
import { Link } from 'react-router-dom'

const ProjectCard = ({item}) => {
    return (
        <Link className= "link" to="/gigs?project=design">
        <div className="projectCard">

            <div className="cat">{item.cat}</div>
            <div className="cont">
            <img className='pp' src={item.pp} alt="" />
            <span className="username">{item.username}</span>
            </div>
            <img src={item.img} alt=""/>
            
        </div>
        </Link>
      )
}

export default ProjectCard