import React from 'react'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import "./Home.css"
import CatCard from '../../components/catCard/CatCard'
import { cards } from '../../data';
import { projects } from '../../data'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import check from "../../../public/img/check.png"
import ProjectCard from '../../components/projectCard/ProjectCard'

const Home = () => {

  const slider = React.useRef(null);

  const slider2 = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    arrows: false,
    draggable: false,
    responsive: false
  };

  return (
    <div className="home">
      <Featured/>
      <TrustedBy/> 

      {/* SLIDER */}
      <div className="slider">
          <Slider ref={slider} {...settings}>
            {cards.map(card => 
            <CatCard item={card} key={card.id}/>)}
          </Slider>
          <div className="arrowNext">
            <button onClick={() => slider?.current?.slickNext()}><FontAwesomeIcon color="lightgray" icon={faArrowRight} className='fa-2x'/></button>
          </div>
          <div className="arrowPrev">
            <button onClick={() => slider?.current?.slickPrev()}><FontAwesomeIcon color="lightgray" icon={faArrowLeft} className='fa-2x'/></button>
          </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        <div className="featuresContainer">

          <div className="leftItem">
            
              <h1>A whole world of freelance talent at your fingertips</h1>

              <div className="x">
                <img src={check} alt="" />
                The best for every budget
              </div>
              <p style={{marginBottom: '20px', marginTop: '5px'}}>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>

              <div className="x">
                <img src={check} alt="" />
                Quality work done quickly
              </div>
              <p style={{marginBottom: '20px', marginTop: '5px'}}>Find the right freelancer to begin working on your project within minutes.</p>

              <div className="x">
                <img src={check} alt="" style={{}} />
                Protected payments, every time
              </div>
              <p style={{marginBottom: '20px', marginTop: '5px'}}>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>

              <div className="x">
                <img src={check} alt="" />
                24/7 support
              </div>
              <p style={{marginBottom: '20px', marginTop: '5px'}}>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>

          </div>

          <div className="rightItem">
            <div className="iframe">
              <iframe width="694" height="390" src="https://www.youtube.com/embed/iUtnZpzkbG8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>  
            </div>
          </div>

        </div>
      </div>

      {/* FIVERR BUSINESS */}
      <div className="business">
        <div className="businessContainer">

          <div className="left">
              
              <div style={{ color: '#5DA2FD' }} className="first">
              <h1 style={{marginBottom: '0px', marginTop: '0px'}}>freel business.</h1>
              <h2 style={{marginBottom: '0px', marginTop: '0px'}}>A business solution designed for teams</h2>
              <p style={{marginBottom: '0px', marginTop: '0px'}}>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
              </div>
              

              <div className="x2">
                <img src={check} alt="" />
                Connect to freelancers with proven business experience
              </div>

              <div className="x2">
                <img src={check} alt="" />
                Get matched with the perfect talent by a customer success manager
              </div>

              <div className="x2" style={{paddingBottom: '15px'}}>
                <img src={check} alt="" />
                Manage teamwork and boost productivity with one powerful workspace
              </div>

              <button className='businessButton'>Explore Freel Business</button>

          </div>

          <div className="right">
              
              <div>
                <img style={{width: '100%'}} src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" />
              </div>
          </div>

        </div>
      </div>

      {/* SLIDER */}
      <div className="slider">
          <Slider ref={slider2} {...settings}>
            {projects.map(project => 
            <ProjectCard item={project} key={project.id}/>)}
          </Slider>
          <div className="arrowNext">
            <button onClick={() => slider2?.current?.slickNext()}><FontAwesomeIcon color="lightgray" icon={faArrowRight} className='fa-2x'/></button>
          </div>
          <div className="arrowPrev">
            <button onClick={() => slider2?.current?.slickPrev()}><FontAwesomeIcon color="lightgray" icon={faArrowLeft} className='fa-2x'/></button>
          </div>
      </div>






    </div>
  )
}

export default Home