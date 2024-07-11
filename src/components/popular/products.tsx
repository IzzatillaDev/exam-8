"use client"
import React, { useEffect } from 'react'
import Swiper from "@/components/swiper/page"
import "./style.css"
import useProductsStore from '../../../store/products'

const products = () => {
    const {getData,data} = useProductsStore()
    useEffect(() => {
        getData()
        
    },[])
    return (
        <>
            <div className='container'>
                <div className="product_header">
                    <h2 className="products_title">Populyarniy mahsulotlar</h2>
                </div>
                <Swiper data={data} />
            </div>
        </>
    )
}

export default products