import React,{useRef} from 'react'
import "./header.css"
import navlinks from "./navlinks"

import { Container } from 'reactstrap'

const Header = () => {

    const menuRef =  useRef()
    const menuToggle = ()=> menuRef.current.classList.toggle('active__menu')
  return (
    <div>
      <header className="header">
        <Container>
            <div className="navigation">
                <div className="logo">
                     <h2 className='d-flex align-items-center gap-1'>
                     <span><i class="ri-restaurant-fill"></i></span>Plate Portal
                     </h2>
                </div>

                <div className="nav__menu"  ref={menuRef}>
                   <div className="nav__list__wrapper  d-flex align-items-center gap-5">
                        <ul className="nav__list">
                                {
                                    navlinks.map((item,index)=>{
                                        return(
                                        <li className="nav__item" key={index}>
                                            <a href={item.url} onClick={menuToggle}>
                                                {item.display}
                                            </a>
                                        </li>
                                        )
                                    })
                                }
                            </ul>

                            <div className="menu__right">
                                <div className="custom__search">
                                    <input type="text" placeholder='search item...' />
                                    <span><i class="ri-search-eye-line"></i></span>
                                </div>
                             </div> 
                   </div>
                </div>

                <div>
                    <span className="cart__icon">
                    <i class="ri-shopping-cart-fill"></i>
                    <span className='badge'>2</span>
                    </span>
                </div>
                
                <div className="mobile__menu">
                    <span>
                        <i class="ri-menu-line"  onClick={menuToggle}></i>
                        </span>
                </div>
            </div>
        </Container>
      </header>
    </div>
  )
}

export default Header
