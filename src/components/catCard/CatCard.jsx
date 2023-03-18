import React from 'react'
import { Link } from 'react-router-dom'
import "./catcard.css"

const CatCard = ({item}) => {
  return (
    <Link to="/gigs?cat=design">
    <div className="catCard">
        <div className="desc">{item.desc}</div>
        <span className="title">{item.title}</span>
        <img src={item.img} alt=""/>
    </div>
    </Link>
  )
}

export default CatCard