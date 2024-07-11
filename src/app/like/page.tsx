"use client"
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import useLikeStore from '../../../store/like'
// import Products from '@/components/products/page'
import Card from "../../components/products/page"
import Cookies from 'js-cookie'

function Page() {

    const {getlikes, likes} = useLikeStore()
    const [data, setData]:any = useState([])

    async function GetLikes(){
        let arr = likes?.map((e:any) => {
            return e?.product_id
        }) 
        setData(arr)
    }
    
    useEffect(() => {
        const id = Number(Cookies.get('id'))
        getlikes({id})
        GetLikes()      
    }, [])
  return (
    <div>
        <ToastContainer/>
        <div className='container'>
            {/* <Container> */}
                <div className='flex flex-wrap mt-[50px] gap-[30px]'>
                    {data?.map((e:any, i:number) => {
                        return (
                            <Card datas={e} key={i}/>
                        )
                    })}
                </div>
            {/* </Container> */}
        </div>
    </div>
  )
}

export default Page