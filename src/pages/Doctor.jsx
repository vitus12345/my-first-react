import React from 'react'
import {Checkup, Exeperiment, Spa, RitArrow} from "../assets"
import './style.css'

function Doctor() {
    const CheckApp =[
        {
            "id":0,
            "image": Checkup,
            "heading": "Disease detection, check up in the laboratory",
            "paragraph": "In this case, the role of the health laboratory is very important to do a disease detection...",
            "btText": "Read more",
            "arrow": RitArrow
        },

        {
            "id":1,
            "image": Exeperiment,
            "heading": "Herbal medicines that are safe for consumption",
            "paragraph": "Herbal medicine is very widely used at this time because of its very good for your health...",
            "btText": "Read more",
            "arrow": RitArrow
        },

        {
            "id":2,
            "image":Spa ,
            "heading": "Natural care for healthy facial skin",
            "paragraph": "A healthy lifestyle should start from now and also for your skin health.There are some...",
            "btText": "Read more",
            "arrow": RitArrow
        },
    ]

    const getItem = CheckApp.map((item) =>
        <div className="col-sm-12 col-md-12 col-lg-4">
            <div key={item.id} className='card-sec'>
            <div className='doc-card-image'>
                <img src= {item.image} alt="" />
            </div>
            <div className='doc-card-body'>
                <h6>{item.heading}</h6>
                <p className='para'> {item.paragraph}</p>
            
                <button className='doc-card-btn d-flex'>
                    <p>{item.btText}</p>
                    <img src= {item.arrow} alt="" />
                </button>
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

export default Doctor
