import React from 'react'
import "./Gig.css"
import star from "../../../public/img/star.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Gig = () => {
  return (
    <dig className="gigSinglePage">
      <div className="gigSingleContainer">

        <div className="leftGigClass">
          <span className='breadcrums'>FREEL {'>'} GRAPHICS & DESIGN</span>
          <h1 style={{marginBottom: '0px'}}>I will create ai generated art for you</h1>

          <div className="userInfo">
            <img className='userInfoImg' src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <span style={{fontWeight: '500'}}>John Doe</span>
            <img className='starImg' src={star} alt="" />
            <img className='starImg' src={star} alt="" />
            <img className='starImg'src={star} alt="" />
            <img className='starImg' src={star} alt="" />
            <img className='starImg' src={star} alt="" />
            <span>5</span>
          </div>

          <div className="imagesSlider">
            <FontAwesomeIcon style={{cursor: 'pointer'}} icon={faArrowLeft} />
            <img className='sliderImage' src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <FontAwesomeIcon style={{cursor: 'pointer'}} icon={faArrowRight} />
          </div>

          <h2 style={{marginBottom: '0px'}}>About this gig</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, deserunt quo, harum quia perferendis aliquid tempora aut commodi accusamus ex consectetur laboriosam. Tempora repellat labore quod, ducimus unde voluptatem explicabo.</p>
          
          <h2>About the seller</h2>
          <div className="aboutTheSeller">

            <div className="sellerProfilePic">
              <img className='sellerProfilePic' src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </div>

            <div className="sellerDetails">
              <div className="nameP">John Doe</div>
              <div className="stars">
                <img className='starImg' src={star} alt="" />
                <img className='starImg' src={star} alt="" />
                <img className='starImg' src={star} alt="" />
                <img className='starImg' src={star} alt="" />
                <img className='starImg' src={star} alt="" />
              </div>
              <button>Contact Me</button>
            </div>
          </div>

          <div className="sellerRectangle">

            <div className="leftRect"></div>

            <div className="rightRect"></div>

          </div>
          
        </div>
        
        <div className="rightGigClass">

        </div>

      </div>
    </dig>
  )
}

export default Gig