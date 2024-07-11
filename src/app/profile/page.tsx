"use client"
import React, { useState, useEffect } from 'react';
import "./style.scss"
// import Container from '@/components/container/page'
// import Ave from "@/assets/ave.svg"
import Pens from "../../assets/penwrite.svg"
import Image from 'next/image';
import { Modal } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const Profile = () => {
    const [activeButton, setActiveButton] = useState('shaxsiyMalumotlar');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({
        ismi: "Izzatilla",
        familyasi: "Yusupov",
        telefonRaqami: "+998 99 407 82 08",
        manzili: "Toshkent vil/ Bo'ka Tumani",
        aniqManzili: "Bunyodkor ko'chasi"
    });

    useEffect(() => {
        const savedActiveButton = localStorage.getItem('activeButton');
        if (savedActiveButton) {
            setActiveButton(savedActiveButton);
        }
    }, []);

    const handleButtonClick = (buttonName: any) => {
        setActiveButton(buttonName);
        localStorage.setItem('activeButton', buttonName);
    };

    const handlePensClick = () => {
        // Here you can fetch new data or update from a server/API
        // For demonstration, setting dummy data
        setModalContent({
            ismi: "John",
            familyasi: "Doe",
            telefonRaqami: "+998 99 999 99 99",
            manzili: "Toshkent",
            aniqManzili: "Biror joy"
        });
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        // <Container>
        <>
            <div className='container'>
                <div className='flex'>
                    <div className="profile-container1">
                        <div className='w-[100%] h-[100px] justify-between flex'>
                            {/* <Image
                                src={Ave}
                                alt="++"
                                className='w-[80px] h-[80px] ml-[30px] mt-[20px]'
                            /> */}
                            <div>
                                <h1 className='mt-[20px] font-bold text-[20px] mr-[40px]'>Yusupov Izzatilla Sunnatilla o'g'li</h1>
                                <p className='mt-[3px] font-medium text-[18px]'>Id8937657921</p>
                            </div>
                            <Image
                                src={Pens}
                                alt='45'
                                className='w-[25px] h-[25px] mr-[40px] mt-[25px]'
                                onClick={handlePensClick} // Open modal on click
                            />
                        </div>
                        <div className='w-[100%]'>
                            <button
                                className={`flex justify-between items-center w-[400px] h-[70px] ml-[20px] mt-[20px] px-[20px] ${activeButton === 'shaxsiyMalumotlar' ? 'bg-[#FF6F14] text-white' : 'bg-[#F0F0F0] text-[#000000]'}`}
                                onClick={() => handleButtonClick('shaxsiyMalumotlar')}
                            >
                                <h1 className='font-bold text-[22px]'>Shaxsiy malumotlar</h1>
                                <ArrowRightOutlined />
                            </button>
                            <button
                                className={`flex justify-between items-center w-[400px] h-[70px] ml-[20px] mt-[20px] px-[20px] ${activeButton === 'xaridlarTarixi' ? 'bg-[#FF6F14] text-white' : 'bg-[#F0F0F0] text-[#000000]'}`}
                                onClick={() => handleButtonClick('xaridlarTarixi')}
                            >
                                <h1 className='font-bold text-[22px]'>Xaridlar Tarixi</h1>
                                <ArrowRightOutlined />
                            </button>
                            <button
                                className={`flex justify-between items-center w-[400px] h-[70px] ml-[20px] mt-[20px] px-[20px] ${activeButton === 'yoqtirilganNarsalar' ? 'bg-[#FF6F14] text-white' : 'bg-[#F0F0F0] text-[#000000]'}`}
                                onClick={() => handleButtonClick('yoqtirilganNarsalar')}
                            >

                                <h1 className='font-bold text-[22px]'>Yoqtirilgan narsalar</h1>
                                <ArrowRightOutlined />
                            </button>
                            <button
                                className={`flex justify-between items-center w-[400px] h-[70px] ml-[20px] mt-[20px] px-[20px] ${activeButton === 'tolovTuri' ? 'bg-[#FF6F14] text-white' : 'bg-[#F0F0F0] text-[#000000]'}`}
                                onClick={() => handleButtonClick('tolovTuri')}
                            >
                                <h1 className='font-bold text-[22px]'>To'lov turi</h1>
                                <ArrowRightOutlined />
                            </button>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="profile-container">
                        <h1 className='font-bold text-[30px] mt-[20px] mr-[130px]'>Shaxsiy Malumotlar</h1>
                        <div className='flex justify-between'>
                            <p className='mr-[1px] mt-[20px] text-[20px] text-[gray]'>Ismi:</p>
                            <p className='font-bold mt-[20px] mr-[120px] text-[20px]'>Izzatilla</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='mr-[1px] mt-[20px] text-[20px] text-[gray]'>Familyasi:</p>
                            <p className='font-bold mt-[20px] mr-[125px] text-[20px]'>Yusupov</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='mr-[1px] mt-[20px] text-[20px] text-[gray]'>Telefon raqami:</p>
                            <p className='font-bold mt-[20px] mr-[10px] text-[20px]'>+998 99 407 82 08</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='mr-[1px] mt-[20px] text-[20px] text-[gray]'>Manzili:</p>
                            <p className='font-bold mt-[20px] mr-[20px] text-[20px]'>Toshkent vil/ Bo'ka Tumani</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='mr-[1px] mt-[20px] text-[20px] text-[gray]'>Aniq m:</p>
                            <p className='font-bold mt-[20px] mr-[1px] text-[20px]'>Bunyodkor ko'chasi</p>
                        </div>
                    </div>
                </div>
                <Modal
                    title="Pens Modal"
                    visible={isModalVisible}
                    onCancel={closeModal}
                    footer={null}
                >
                    <div className="flex justify-between">
                        <p className="text-[20px] text-[gray]">Ismi:</p>
                        <p className="font-bold text-[20px]">{modalContent.ismi}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[20px] text-[gray]">Familyasi:</p>
                        <p className="font-bold text-[20px]">{modalContent.familyasi}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[20px] text-[gray]">Telefon raqami:</p>
                        <p className="font-bold text-[20px]">{modalContent.telefonRaqami}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[20px] text-[gray]">Manzili:</p>
                        <p className="font-bold text-[20px]">{modalContent.manzili}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[20px] text-[gray]">Aniq manzili:</p>
                    </div>
                </Modal>
            </div>
        </>
        // </Container> 
    );
};

export default Profile;
