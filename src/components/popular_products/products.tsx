"use client"
import React from 'react'
import Swiper from "@/components/swiper/page"
import "./style.css"
import useProductsStore from '../../../store/products'
import { useEffect } from 'react'

const products = () => {
    const {getData,data} = useProductsStore()
    useEffect(() => {
        getData()
        
    },[])
    
    return (
        <>
            <div className='container'>
                <div className="product_header">
                    <h2 className="products_title">Ommabob mahsulotlar</h2>
                </div>
                <Swiper data={data} />
            </div>
        </>
    )
}

export default products