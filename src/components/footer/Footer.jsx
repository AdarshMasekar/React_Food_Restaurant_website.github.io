import React from 'react'
import {Container,Row,Col, ListGroup, ListGroupItem} from 'reactstrap'
import {footerLinks,footerQuickLinks} from  "./footerlinks.js"
import "./footer.css"

const Footer = () => {
  return (<section>

    <Container>
        <Row>
            <Col lg="4" md='4' sm='6'>
                <div className="logo">
                    <h2 className="d-flex align-items-center gap-1 mb-4">
                        <span>
                            <i class="ri-restaurant-2-line"></i>
                        </span>{" "}
                        Plate Portal
                    </h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, praesentium.
                    </p>
                </div>
            </Col>

            <Col lg='2' md='4' sm='6'>
                <h5 className="footer--link--title">
                    Info Links
                        </h5>
                    <ListGroup>
                        {
                            footerQuickLinks.map((item,index)=>
                            <ListGroupItem key={index} className='link--item'>
                                <a href={item.url} >{item.display}</a>
                        </ListGroupItem>
                         )
                        }
                        
                    </ListGroup>
            </Col>

            
            <Col lg='2' md='4' sm='6'>
                <h5 className="footer--link--title">
                    Quick Links
                </h5>
                    <ListGroup>
                        {
                            footerLinks.map((item,index)=>
                            <ListGroupItem key={index} className='link--item'>
                                <a href={item.url} >{item.display}</a>
                        </ListGroupItem>
                         )
                        }
                        
                    </ListGroup>
            </Col>

            <Col lg='4' md='4' sm='6'>
                <h5 className="footer--link--title">Contact</h5>
             
              <ListGroup>
                <ListGroupItem className='d-flex link--item align-items-center gap-3'>
                <i class="ri-map-pin-line"></i>Karwar, India{" "}
                </ListGroupItem>
                <ListGroupItem className='d-flex link--item align-items-center gap-3'>
                <i class="ri-mail-line"></i> adarshmasekar@gmail.com {" "}
                </ListGroupItem>
                <ListGroupItem className='d-flex link--item align-items-center gap-3'>
                <i class="ri-phone-line"></i> +91 95912 65305
                </ListGroupItem>
               </ListGroup>
            </Col>
        </Row>
    </Container>

    <div className='footer--bottom'>
        <Container>
            <Row>
                <Col lg='12'>
                    <p> copyright 2022, developed by Adarsh,All rightes are reserved</p>
                </Col>
            </Row>
        </Container>

    </div>

    </section>
  )
}

export default Footer
