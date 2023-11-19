import React from 'react'
import { Search, Jar, Record, Record2, Frist, Record3 } from "../assets";
import './style.css'


function Service() {
    const serviceItem = [
        {
            "id": 0,
            "image": Search,
            "heading": "Search doctor",
            "paregraph":  "Choose your doctor from thousands of specialist, general, and trusted hospitals"
        },

        {
            "id": 1,
            "image": Jar,
            "heading": "Online pharmacy",
            "paregraph": "Buy  your medicines with our mobile application with a simple delivery system"
        },

        {
            "id": 2,
            "image": Record,
            "heading": "Consultation",
            "paregraph": "Free consultation with our trusted doctors and get the best recomendations"
        },

        {
            "id": 3,
            "image": Record2,
            "heading": "Details info",
            "paregraph": "Free consultation with our trusted doctors and get the best recomendations"
        },

        {
            "id": 4,
            "image": Frist,
            "heading": "Emergency care",
            "paregraph": "You can get 24/7 urgent care for yourself or your children and your lovely family"
        },

        {
            "id": 5,
            "image": Record3,
            "heading": "Tracking",
            "paregraph": "Track and save your medical history and health data "
        },

    ]

    const getItem = serviceItem.map((item) => 
    <div className="col-sm-12 col-md-12 col-lg-4">
        <div key={item.id} className='card-main'>
            <div className='card-head'>
                <img src={item.image} alt="" className='mb-4'  />
            </div>
            <div className='carditem-body'>
                <h4>{item.heading}</h4>
                <p>{item.paregraph}</p>
            </div>

        </div>
    </div>
    )

  return (
    <React.Fragment>
      {getItem}
    </React.Fragment>
  )
}

export default Service
