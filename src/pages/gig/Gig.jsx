import React, { useEffect, useState } from 'react'
import "./Gig.css"
import star from "../../../public/img/star.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCheck, faClockRotateLeft, faRecycle } from '@fortawesome/free-solid-svg-icons'

const Gig = () => {

  const images = [
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ]

  const [slideNumber, setSlideNumber] = useState(0)
  const [disabledPrev, setDisabledPrev] = useState(false)
  const [disabledNext, setDisabledNext] = useState(false)
  const [buttonClassPrev, setButtonClassPrev] = useState('imgSliderButtonEnabled')
  const [buttonClassNext, setButtonClassNext] = useState('imgSliderButtonEnabled')

  useEffect(() => {
    if (slideNumber === 0) {
      setDisabledPrev(true)
      setButtonClassPrev('imgSliderButtonDisabled')
    } else {
      setDisabledPrev(false)
      setButtonClassPrev('imgSliderButtonEnabled')
    }
  })

  useEffect(() => {
    if (slideNumber === 2) {
      setDisabledNext(true)
      setButtonClassNext('imgSliderButtonDisabled')
    } else {
      setDisabledNext(false)
      setButtonClassNext('imgSliderButtonEnabled')
    }
  })

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
            <button disabled={disabledPrev} style={{backgroundColor: 'transparent', border: 'none'}}>
            <FontAwesomeIcon className={buttonClassPrev} icon={faArrowLeft} onClick={() => slideNumber === 0 ? console.log('no more images') : setSlideNumber(slideNumber - 1)}/>
            </button>
            <img className='sliderImage' src={images[slideNumber]} alt="" />
            <button disabled={disabledNext} style={{backgroundColor: 'transparent', border: 'none'}}>
            <FontAwesomeIcon className={buttonClassNext} icon={faArrowRight} onClick={() => slideNumber === 2 ? console.log('no more images') : setSlideNumber(slideNumber + 1)}/>
            </button>
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
              <button className='contactMeButton'>Contact Me</button>
            </div>
          </div>

          <div className="sellerRectangle">

            <div className="leftRect">
              <div className="rectSection">
                <h2 style={{paddingLeft:'10px' ,marginBottom: '0px', fontSize: '16px'}}>From</h2>
                <span style={{paddingLeft: '10px'}}>USA</span>
              </div>

              <div className="rectSection">
                <h2 style={{paddingLeft:'10px' ,marginBottom: '0px', fontSize: '16px'}}>Avg. response time</h2>
                <span style={{paddingLeft: '10px'}}>4 hours</span>
              </div>

              <div className="rectSection">
                <h2 style={{paddingLeft:'10px' ,marginBottom: '0px', fontSize: '16px'}}>Language</h2>
                <span style={{paddingLeft: '10px'}}>English</span>
              </div>
            </div>

            <div className="rightRect">

              <div className="rectSection">
                <h2 style={{marginBottom: '0px', fontSize: '16px'}}>Member since</h2>
                <span>Aug 2022</span>
              </div>

              <div className="rectSection">
                <h2 style={{marginBottom: '0px', fontSize: '16px'}}>Last delivery</h2>
                <span>1 day</span>
              </div>

            </div>

            <hr />

            <p style={{paddingLeft: '10px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, rerum optio! Ad eum totam beatae odio perspiciatis enim fuga! In ipsa inventore iste.</p>

          </div>
          
        </div>
        
        <div className="rightGigClass">
          <div className="titleAndPrice">
            <h1>1 AI generated image</h1>
            <span>€59.99</span>
          </div>

          <p style={{color: 'darkgray'}}>I will create a unique high quality AI generated image based on a description that you give me</p>
        
          <div className="deliveryAndRevisions">
            <span><FontAwesomeIcon icon={faClockRotateLeft}/> 2 Days Delivery</span>
            <span><FontAwesomeIcon icon={faRecycle}/> 3 Revisions</span>
          </div>

          <div className="checksList">
            <span><FontAwesomeIcon className='iconCheck' icon={faCheck}/> Prompt writing</span>
            <span><FontAwesomeIcon className='iconCheck' icon={faCheck}/> Artwork delivery</span>
            <span><FontAwesomeIcon className='iconCheck' icon={faCheck}/> Image upscaling</span>
            <span><FontAwesomeIcon className='iconCheck' icon={faCheck}/> Additional design</span>
          </div>

          <button className='continueButton'>Continue</button>
        </div>

      </div>
    </dig>
  )
}

export default Gig