import React from 'react'
import { useState,useEffect } from 'react'
import { Container,Row,Col } from 'reactstrap'
import "./menu-pack.css"
import ProductCard from '../product-card/ProductCard'
import { fastFoodProducts,riceMenuProducts,pizzaProducts,dessertProducts,coffeeProducts } from '../../assets/fake-data/products'

const MenuPack = () => {

    const [filter,setFilter] = useState('RICE-MENU')
    const [products,setProducts] =useState(riceMenuProducts)

    useEffect(()=>{
        if(filter === 'RICE-MENU')
        {
        setProducts(riceMenuProducts)
        }
        if(filter === 'FAST-FOOD'){
            setProducts(fastFoodProducts)
        }
        if(filter === 'PIZZA'){
            setProducts(pizzaProducts)
        }
        if(filter === 'DESSERT'){
            setProducts(dessertProducts)
        }
        if(filter === 'COFFEE'){
            setProducts(coffeeProducts)
        }
    },[filter])
    
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className="text-center text-white mb-5">
                    <h3 className='menu--title'>Our Menu Pack</h3>
                </Col>
                <Col lg='12' className="text-center mb-4">
                    <button className={`filter-btn  m-1 ${filter === 'FAST-FOOD' ? 'active--btn' : " "}`}  onClick={()=>setFilter('FAST-FOOD')} >Fast Food</button>
                    <button className={`filter-btn  m-1 ${filter === 'RICE-MENU' ? 'active--btn' : " "}`}  onClick={()=>setFilter('RICE-MENU')}>Rice Menu</button>
                    <button className={`filter-btn  m-1 ${filter === 'PIZZA' ? 'active--btn' : " "}`}  onClick={()=>setFilter('PIZZA')}>Pizza</button>
                    <button className={`filter-btn  m-1 ${filter === 'DESSERT' ? 'active--btn' : " "}`}  onClick={()=>setFilter('DESSERT')}>Dessert</button>
                    <button className={`filter-btn  m-1 ${filter === 'COFFEE' ? 'active--btn' : " "}`}  onClick={()=>setFilter('COFFEE')}>Coffee</button>
                </Col>
                {
                    products.map(item=>(
                        <Col lg='3' key={item.id} md="2" className='mb-3'>
                            <ProductCard item={item} className="mb-2"/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
   
  )
}

export default MenuPack
