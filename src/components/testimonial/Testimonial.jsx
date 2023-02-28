import React from 'react'
import Slider from 'react-slick'
import {Container,Row,Col} from "reactstrap"
import testimonialImg from "../../assets/images/review1.png"
import "./testimonial.css"

const Testimonial = () => {

    const settings = {
        infinite :true,
        spee:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
    }
  return (
    <section>

        <Container>
            <Row >
                <Col lg='8' className='m-auto'>

                    <div className="slider--wrapper d-flex align-items-center gap-5 ">
                        <div className="slider--content w-50">
                        <h2> What our customers are saying</h2>
                            <Slider {...settings}>
                                <div className="sigle--testimonial">
                                        <p className="review--content">
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates ullam in veritatis suscipit itaque harum repellendus distinctio, esse voluptatibus."
                                        </p>
                                        <h6 className='name'>Jhon Doe</h6>
                                        <p>Web Developer</p>
                                </div>
                                <div className="sigle--testimonial">
                                        <p className="review--content">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates ullam in veritatis suscipit itaque harum repellendus distinctio, esse voluptatibus.

                                        </p>
                                        <h6 className='name'>Jhon Doe</h6>
                                        <p>Web Developer</p>
                                    </div>
                                    <div className="sigle--testimonial">
                                        <p className="review--content">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates ullam in veritatis suscipit itaque harum repellendus distinctio, esse voluptatibus.

                                        </p>
                                        <h6 className='name'>Jhon Doe</h6>
                                        <p>Web Developer</p>
                                    </div>
                                    
                            </Slider>
                        </div>

                        <div className="slider--img w-50">
                           <img src={testimonialImg} alt=""  className='w-100'/>
                        </div>
                    </div>
                   
                </Col>
                
            </Row>
        </Container>

    </section>
  )
}

export default Testimonial
