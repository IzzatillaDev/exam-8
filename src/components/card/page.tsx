import { DeleteOutlined, HeartOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './style.css'; // Assuming you have a CSS file for styles
import useCartsStore from '../../../store/cards';
import Cookies from 'js-cookie';
import useLikeStore from '../../../store/like';
import Notification from '../../../utils/utils';
import { ToastContainer } from 'react-toastify';

function Page({datas}:any) {
    console.log(datas)
    const [count, setCount] = useState(1);
    const {deleteCards, getCards} = useCartsStore()
    const {postlikes, getlikes} = useLikeStore()

    async function handleDelete(id:number){
        const response = await deleteCards({id})
        if(response?.status == 200){
            Notification({title: "Card deleted successfully", type: "success"})
            // await getCards({id: Number(Cookies.get('id'))})
        }else{
            // Notification({title: "Card deletion failed", type: "error"})
        }
    }

    async function handleLike(id:number){
        const response = await postlikes({product_id:id})
        if(response.status == 201){
            await getlikes({id: Number(Cookies.get('id'))})
            // Notification({title: "Like successful", type: "success"})
        } else{
            // Notification({title: "Like failed You have need login", type: "error"})
        }
    }



    return (
        <>
        {/* <ToastContainer/> */}
        <div className='product-card justify-between'>
            <img className='product-image' src={datas?.product_id?.images[0]} alt={datas.product_id} />
            <div className='product-details'>
                <p className='product-title'>{datas?.product_id?.name}</p>
                <div className='quantity-controls'>
                    <button onClick={() => setCount(count - 1)} disabled={count === 1} className='quantity-btn'>-</button>
                    <p className='quantity'>{count}</p>
                    <button onClick={() => setCount(count + 1)} className='quantity-btn'>+</button>
                </div>
            </div>
            <div className='product-actions'>
                <h4 className='product-price'>{datas?.product_id?.price * count} so‘m</h4>
                <div className='action-icons'>
                    <span onClick={() => handleDelete(datas?.id)} className='action-icon'><DeleteOutlined className='icon' /></span>
                    <span onClick={() => handleLike(datas?.product_id?.id)} className='action-icon'><HeartOutlined className='icon' /></span>
                </div>
            </div>
        </div>
        </>
    );
}

export default Page;
