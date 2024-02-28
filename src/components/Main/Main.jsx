import React from 'react'
import './main.scss'

// import icons
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";

// import images
import img from '../../assets/img.png'

const Date = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The eptiome of romance, Bora Bora is one of tthe best travel destinations in the World. This place is know for ths luxurious stays and adventurous activities'
  },

  // {
  //   id: 2,
  //   imgSrc: img2,
  //   destTitle: 'Machu Picchu',
  //   location: 'Peru',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$600',
  //   description: 'Huayna Picchu is a mountain in peru, rising over Mach Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular'
  // },

  // {
  //   id: 3,
  //   imgSrc: img3,
  //   destTitle: 'Great Barrier Reef',
  //   location: 'Australia',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$700',
  //   description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is "lavish" and "beauty". Alays intersestingb to be in this place'
  // },

  // {
  //   id: 4,
  //   imgSrc: img4,
  //   destTitle: 'Cappadocia',
  //   location: 'Turkey',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$800',
  //   description: 'According to the Wolrd Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is know for its luxurious stays and adventurous activities'
  // },

  // {
  //   id: 5,
  //   imgSrc: img5,
  //   destTitle: 'Guanajuato',
  //   location: 'Mexico',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$1100',
  //   description: 'A city in central Mexico, Guanajuato in know for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most btight colors available. Always welcome.'
  // },

  // {
  //   id: 6,
  //   imgSrc: img6,
  //   destTitle: 'Cinque Terre',
  //   location: 'Italy',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$840',
  //   description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, your will be exhilarated with the choice you are about to get here. Happy exploring great food!'
  // },

  // {
  //   id: 7,
  //   imgSrc: img7,
  //   destTitle: 'Angkor Wat',
  //   location: 'Cambodia',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$790',
  //   description: 'Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Combodia. This place is known for its luxurius stays and adventurous activities'
  // },

  // {
  //   id: 8,
  //   imgSrc: img8,
  //   destTitle: 'Taj Mahal',
  //   location: 'India',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$900',
  //   description: 'An immense maosoleum of white marble, built-in Angra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the moument is beathtakingly beautiful. This place is know for its luxurious stays and adventurous activities'
  // },

  // {
  //   id: 9,
  //   imgSrc: img9,
  //   destTitle: 'Bali Island',
  //   location: 'Indonesia',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$500',
  //   description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is know for its volcanic mountains, history art & culture, food, temples and beautiful sandy beaches.'
  // },
]

export default function Main() {
  return (
    <section className='main container section'>
        <div className="secTitle">
          <h3 className="title">
            Most visited destionations
          </h3>
        </div>

        <div className="secContent grid">
          {
            Date.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
              return (
                <div key={id} className="singleDestination">
                   <div className="imageDiv">
                     <img src={imgSrc} alt={destTitle} />
                   </div>

                   <div className="cardInfo">
                     <h4 className="destTitle">{destTitle}</h4>
                     <span className="continent flex">
                       <HiOutlineLocationMarker className='icon'/>
                       <span className="name">{location}</span>
                     </span>
                     
                     <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>

                      <div className="price">
                          <h5>{fees}</h5>
                      </div>
                   </div>

                   <div className="desc">
                    <p>{description}</p>
                   </div>

                   <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                   </button>
                  </div> 
                </div>
              )
            })
          }
        </div>
    </section>
  )
}
