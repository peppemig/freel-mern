import React from 'react'
import { Link } from 'react-router-dom'
import "./GigCard.css"
import star from "../../../public/img/star.png"
import heart from "../../../public/img/heart.png"

const GigCard = ({ item }) => {
    return (
        <Link to="/gig/123" className='link'>
        <div className="GigCard">
            <div className="imgTop">
                <img src={item.img} alt="" />
            </div>


            
            <div className="descBottom">
                <div className="user">
                    <img src={item.pp} alt="" />
                    <span className='usernameSpan'>{item.username}</span>
                </div>
                <span className='descSpan'>{item.desc}</span>
                <div className="stars">
                    <img src={star} alt="" />
                    <span>5</span>
                </div>
            </div>

            <hr style={{marginBottom: '5px', marginTop: '0px'}}/>

            <div className="priceSection">
                <div className="heart">
                    <img src={heart} alt="" />
                </div>
                <div className="startingAt">
                    <span>STARTING AT</span>
                    <span className='priceItem'>€{item.price}</span>
                </div>
            </div>
        </div>
        </Link>
    );
  };

export default GigCard