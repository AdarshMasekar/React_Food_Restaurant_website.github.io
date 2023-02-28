import React from 'react'
import "./choose-us.css"
import pastaImg from "../../assets/images/pasta.png"
import { Container,Col, Row } from 'reactstrap'

const ChooseUS = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6' className='p-3'>
                    <img src={pastaImg} alt="" className="w-100"/>
                </Col>
            
                <Col lg='6'>
                    <div className="choose__content">
                        <h4>Who we are?</h4>
                        <h2>Take a look at the benifits we offer you</h2>
                        <p>Lorem ipsum dolor sit a
                            met consectetur, adipisicing eli
                            t. Magnam, rerum esse. Unde.</p>
                    </div>

                    <div className="features mt-4">
                        <div className="feature d-flex align-items-center gap-5">
                            <div className="single__feature">
                                <span className='feature__icon-one'><i class="ri-truck-line"></i></span>
                                <h6>Free Home Delivery</h6>
                                <p>Lorem ipsum dolor sit amet </p>
                            </div>

                            <div className="single__feature">
                                <span className='feature__icon-two'><i class="ri-money-dollar-circle-line"></i></span>
                                <h6>Return & Refund</h6>
                                <p>Lorem ipsum dolor sit amet </p>
                            </div>
                        
                 
                            <div className="single__feature">
                                <span className='feature__icon-three'><i class="ri-secure-payment-line"></i></span>
                                <h6>Secure Payment</h6>
                                <p>Lorem ipsum dolor sit amet </p>
                            </div>
                      
                        
                            <div className="single__feature">
                                <span className='feature__icon-four'><i class="ri-24-hours-line"></i></span>
                                <h6>24/7 Hours Support</h6>
                                <p>Lorem ipsum dolor sit amet </p>
                            </div>
                    
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ChooseUS
