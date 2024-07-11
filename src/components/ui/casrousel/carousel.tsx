import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import CarouselImage from "../../../assets/photo_2024-07-02_10-15-45.jpg"

import './style.css';
import { CustomPrevArrow, CustomNextArrow } from "./custom-arrow"

const contentStyle: React.CSSProperties = {
    margin: 0,
    color: '#fff',
    textAlign: 'center',
    background: 'white',
};

const App: React.FC = () => (
    <div className='container2'>
        <Carousel
            prevArrow={<CustomPrevArrow />}
            nextArrow={<CustomNextArrow />}
            arrows
            infinite={true}
        >


            <div>
                <Image
                    src={CarouselImage}
                    width={1410}
                    height={400}
                    alt="Picture of the author"
                />
            </div>

            <div>
                <Image
                    src={CarouselImage}
                    width={1410}
                    height={400}
                    // width={1410}
                    // width={16}
                    // height={16}
                    alt="Picture of the author"
                />
            </div>

            <div>
                <Image
                    src={CarouselImage}
                    width={1410}
                    height={400}
                    alt="Picture of the author"
                />
            </div>
            {/* <div className='w-[1360px] h-[400px]'>
                <h3 style={contentStyle}>
                    <div className='flex items-center ml-[80px] gap-[40px]'>
                        <div className=''>
                            <h2 className='carousel_title'><span className='text'>Olma</span> olish uchun pul yig’ishga hojat qo’q    <button className='carusel_btn'>12 oyda to’lang</button></h2>
                            <p className='carousel_text'>Boshlang’ich to’lovsiz pasport evaziga halol muddatli to’lovga xarid qilin</p>
                        </div>

                        <div>
                            <Image
                                className=""
                                src={CaruselImage}
                                width={498}
                                height={577}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </h3>
            </div>

            <div className='w-[1360px] h-[400px]'>
                <h3 style={contentStyle}>
                    <div className='flex items-center ml-[80px] gap-[40px]'>
                        <div className=''>
                            <h2 className='carousel_title'><span className='text'>Olma</span> olish uchun pul yig’ishga hojat qo’q    <button className='carusel_btn'>12 oyda to’lang</button></h2>
                            <p className='carousel_text'>Boshlang’ich to’lovsiz pasport evaziga halol muddatli to’lovga xarid qilin</p>
                        </div>

                        <div>
                            <Image
                                className=""
                                src={CaruselImage}
                                width={498}
                                height={577}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </h3>
            </div>

            <div className='w-[1360px] h-[400px]'>
                <h3 style={contentStyle}>
                    <div className='flex items-center ml-[80px] gap-[40px]'>
                        <div className=''>
                            <h2 className='carousel_title'><span className='text'>Olma</span> olish uchun pul yig’ishga hojat qo’q    <button className='carusel_btn'>12 oyda to’lang</button></h2>
                            <p className='carousel_text'>Boshlang’ich to’lovsiz pasport evaziga halol muddatli to’lovga xarid qilin</p>
                        </div>

                        <div>
                            <Image
                                className=""
                                src={CaruselImage}
                                width={498}
                                height={577}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </h3>
            </div> */}
            {/* <div>
                <h3 style={contentStyle}>
                    <div className='flex items-center ml-[50px]'>
                        <div className='mb-[70px]'>
                            <h2 className='carousel_title text-black'>Бутсы Nike Phantom GT2 Elite FG</h2>
                            <button className='carousel_btn text-black'>Подробности</button>
                        </div>
                        <div>
                            <Image
                                className=""
                                src={CarouselImage}
                                width={438}
                                height={438}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <div className='flex items-center ml-[50px]'>
                        <div className='mb-[70px]'>
                            <h2 className='carousel_title text-black'>Бутсы Nike Phantom GT2 Elite FG</h2>
                            <button className='carousel_btn text-black'>Подробности</button>
                        </div>
                        <div>
                            <Image
                                className=""
                                src={CarouselImage}
                                width={438}
                                height={438}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <div className='flex items-center ml-[50px]'>
                        <div className='mb-[70px]'>
                            <h2 className='carousel_title text-black'>Бутсы Nike Phantom GT2 Elite FG</h2>
                            <button className='carousel_btn text-black'>Подробности</button>
                        </div>
                        <div>
                            <Image
                                className=""
                                src={CarouselImage}
                                width={438}
                                height={438}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </h3>
            </div> */}
        </Carousel>
    </div>
);

export default App;
