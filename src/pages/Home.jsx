import React,{useState} from 'react';
import { Hero, Line, Injection, Advice, Arrowd, Man, wLine } from "../assets";
import Service from './Service';
import Doctor from './Doctor';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import { motion} from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import './style.css'

const Home = () => {
  const {ref, inView} = useInView({threshold:0.5});
  const animation = useAnimation();
  const {ref:ref2, inView:inView2} = useInView({threshold:0.5});
  const animation2 = useAnimation();
  const {ref:ref3, inView:inView3} = useInView({threshold:0.5});
  const animation3 = useAnimation();

  useEffect(()=>{
    if (inView){
      animation.start({
        scale:1,
        transition:{
          type:'spring.=',
          duration:2,
          bounce:0.3
        }
      })
    }

    else{
      animation.start({
        scale:0.8,
        transition:{
          duration: 2,
        }
      })
    }
  },[inView, animation]);

  useEffect(()=>{
    if (inView2){
      animation2.start({
        scale:1,
        transition:{
          type:'spring.=',
          duration:2,
          bounce:0.3
        }
      })
    }

    else{
      animation2.start({
        scale:0.8,
        transition:{
          duration: 2,
        }
      })
    }
  },[inView2, animation2]);

  useEffect(()=>{
    if (inView3){
      animation3.start({
        scale:1,
        transition:{
          type:'spring',
          duration:2,
          bounce:0.3
        }
      })
    }

    else{
      animation3.start({
        scale:0.8,
        transition:{
          duration: 2,
        }
      })
    }
  },[inView3, animation3]);
    
  return (
    <React.Fragment>
      <div className='row'>
      <div className="col-sm-12 col-md-12 col-lg-1"></div>
      <div className="col-sm-12 col-md-12 col-lg-10 first-page">
        <div className='row'>
          <div className="col-sm-12 col-md-12 col-lg-6 first-sec">
            <h1>Virtual healthcare <br/> for you</h1>

            <p>Trafalgar provides progressive, and affordable <br /> 
                healthcare, accessible on mobile and online <br />
                for everyone
            </p>
            <button className='fist-btn'>Consult today</button>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">
            <motion.div
            ref={ref}
            animate={animation}
            initial={{scale:0.8}}
            >
            <img src={Hero} alt="" className='w-100' />

            </motion.div>
          </div>

        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-1"></div>

      </div>


      <section>
        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10 second-sec">
            <div className='text-center second-page'>
              <h1>Our services</h1>
              <img src= {Line} alt="" />
              <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your 
                undergo treatment <br /> with our highly qualified doctors you can consult with us which type of service
                is suitable for your health
              </p>
            </div>

            <div className="row">
              <Service/>
            </div>
            <div className='text-center learn'>
            <button>Learn more</button>

            </div>

        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>

        </div>
      </section>


      <section>
        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10 third-sec">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              

              <motion.div
            ref={ref2}
            animate={animation2}
            initial={{scale:0.8}}
            >
            <img src={Injection} alt="" className='w-100' />

            </motion.div>

            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>

            <div className="col-sm-12 col-md-12 col-lg-5 mt-5 leading-health">
              <h2>Leading healthcare providers</h2>
              <img src= {Line} alt="" />
              <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
                  in the solutions we 
              </p>
              <div className='learn'>
                
              <button>Learn more</button>
              </div>

            </div>


          </div>

        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>

        </div>
      </section>


      <section>
        <div className='row'>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10 forth-sec">
          <div className="row flex-column-reverse flex-lg-row ">
            <div className="col-sm-12 col-md-12 col-lg-5 download-app">
              <h2>Download our <br /> mobile apps</h2>
              <img src= {Line} alt="" />
              <p>Our dedicated patient engagement app and 
                  web portal allow you to access information instantaneously (no tedeous form, long calls, 
                  or administrative hassle) and securely
              </p>

              <div className='dowm-btn'>
                <button>
                  Download
                  <img src= {Arrowd} alt="" className='d-btn' />
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-6 download-image">
            <motion.div
            ref={ref3}
            animate={animation3}
            initial={{scale:0.8}}
            >
            <img src={Advice} alt="" className='w-100' />

            </motion.div>

            </div>


          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </section>

      <section>
        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10 fifth-sec">
            <div className='text-center fifth-page'>
              <h1>What our customer are saying</h1>
              <img src= {wLine} alt="" />
            </div>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              infiniteLoop
              interval={3000}
              showArrows={false}
              showStatus={false}>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 d-flex cus-comment">
                  <div>
                    <img src= {Man} alt="" className='' />
                  </div>

                  <div className=''>
                    <h4>Edward Newgate</h4>
                    <p>Founder Circle</p>
                  </div>

                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 cus-comment2">
                  <p>“Our dedicated patient engagement app and <br />
                      web portal allow you to access information <br /> instantaneously (no tedeous form, long calls, <br /> 
                      or administrative hassle) and securely”
                  </p>
                </div>   
              </div>
              <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 d-flex cus-comment">
                  <div>
                    <img src= {Man} alt="" className='' />
                  </div>

                  <div className=''>
                    <h4>Edward Newgate</h4>
                    <p>Founder Circle</p>
                  </div>

                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 cus-comment2">
                  <p>“Our dedicated patient engagement app and <br />
                      web portal allow you to access information <br /> instantaneously (no tedeous form, long calls, <br /> 
                      or administrative hassle) and securely”
                  </p>
                </div>
              </div>
              <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 d-flex cus-comment">
                  <div>
                    <img src= {Man} alt="" className='' />
                  </div>

                  <div className=''>
                    <h4>Edward Newgate</h4>
                    <p>Founder Circle</p>
                  </div>

                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 cus-comment2">
                  <p>“Our dedicated patient engagement app and <br />
                      web portal allow you to access information <br /> instantaneously (no tedeous form, long calls, <br /> 
                      or administrative hassle) and securely”
                  </p>
                </div>
              </div>
              <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 d-flex cus-comment">
                  <div>
                    <img src= {Man} alt="" className='' />
                  </div>

                  <div className=''>
                    <h4>Edward Newgate</h4>
                    <p>Founder Circle</p>
                  </div>

                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 cus-comment2">
                  <p>“Our dedicated patient engagement app and <br />
                      web portal allow you to access information <br /> instantaneously (no tedeous form, long calls, <br /> 
                      or administrative hassle) and securely”
                  </p>
                </div>
              </div>
            </Carousel>
            

        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>

        </div>
      </section>

      
      <section>
        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10 second-sec">
            <div className='text-center second-page'>
              <h1 className='mb-3'>Check out our latest article</h1>
              <img src= {Line} alt="" className='mb-5' />  
            </div>

            <div className="row">
              <Doctor/>
            </div>
            <div className='text-center learn'>
            <button>View all</button>

            </div>

        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>

        </div>
      </section>
      

    </React.Fragment>
  )
}

export default Home
