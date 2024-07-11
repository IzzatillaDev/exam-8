"use client"
import React, { useEffect, useState } from 'react'
import Swiper from "@/components/swiper/page"
// import useLikeStore from '../../../store/like'
import useProductsStore from '../../../store/products'
import "./style.css"
// import axios from 'axios'

const products = () => {

    const {getData,data} = useProductsStore()
    useEffect(() => {
        getData()
        
    },[])
    // console.log(data,"kkmkkk");
    // const [datas,setDatas] = useState([])
    // const {getData} = useLikeStore()
    // const [likes,setLikes] = useState([])

    // useEffect(() => {
    //     (async () => {
    //         const {data} = await axios.get("https://ecomapi.ilyosbekdev.uz/likes")
    //         setDatas(data.products ? data.products : [])
    //     })
    // },[])

    // const getLikes = async () => {
    //     const response = await getData()
    //     setLikes(response.data.products.map((item: any) => item.product_id))

    // }

    // useEffect(() => {
    //     getLikes()
    // },[])

    // console.log(data)
    return (
        
        <>
            <div className='container'>
                <div className='flex items-center justify-between'>
                <div className="product_header">
                    <h1 className="products_title">Aksiyadagi mahsulotlar</h1>
                </div>
                {/* <div>
                    <button className='all_btn'>Hammasi</button>
                </div> */}
                </div>
                <Swiper data={data} />
            </div>
        </>
    )
}

export default products

// "use client"
// import React, { useEffect, useState } from 'react';
// import Swiper from "@/components/swiper/page";
// import useProductsStore from '../../../store/products';
// import "./style.css";

// const Products = () => {
//     const { getData, data } = useProductsStore();
//     const [likedProducts, setLikedProducts] = useState([]);

//     useEffect(() => {
//         getData();
//     }, []);

//     const handleLike = (productId:never) => {
//         if (likedProducts.includes(productId)) {
//             setLikedProducts(likedProducts.filter(id => id !== productId));
//         } else {
//             setLikedProducts([...likedProducts, productId]);
//         }
//     };

//     return (
//         <>
//             <div className='container'>
//                 <div className='flex items-center justify-between'>
//                     <div className="product_header">
//                         <h1 className="products_title">Aksiyadagi mahsulotlar</h1>
//                     </div>
//                 </div>
//                 <Swiper data={data.map(product => ({
//                     ...product,
//                     liked: likedProducts.includes(product.id)
//                 }))} onLike={handleLike} />
//             </div>
//         </>
//     );
// };

// export default Products;
