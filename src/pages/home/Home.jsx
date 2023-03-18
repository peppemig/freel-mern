import React from 'react'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import "./Home.css"
import CatCard from '../../components/catCard/CatCard'
import { cards } from '../../data';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

  const slider = React.useRef(null);

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
            <CatCard item={card}/>)}
          </Slider>
          <div className="arrowNext">
            <button onClick={() => slider?.current?.slickNext()}><FontAwesomeIcon color="lightgray" icon={faArrowRight} className='fa-2x'/></button>
          </div>
          <div className="arrowPrev">
            <button onClick={() => slider?.current?.slickPrev()}><FontAwesomeIcon color="lightgray" icon={faArrowLeft} className='fa-2x'/></button>
          </div>
      </div>

    </div>
  )
}

export default Home