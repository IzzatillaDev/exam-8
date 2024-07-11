"use client"
import { useParams } from "next/navigation"
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import Driwer from "../../../assets/driwer.svg"
import Shop from "../../../assets/shop.svg"
import Time from "../../../assets/time.svg"
import Link from "next/link";
import Cookie from 'js-cookie'
import useProductDetailStore from "../../../../store/product_detail";
import { useEffect, useState } from "react";
import Switcher from "./../../../components/tabswitcher/switcher"
import Color from "../../../assets/color.svg"
import Color2 from "../../../assets/color2.svg"
import Color3 from "../../../assets/color3.svg"
import Color4 from "../../../assets/color4.svg"
import Color5 from "../../../assets/color5.svg"
// import { useRouter } from "next/router";
import "./style.css"


const images = [
    {
        original: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8UwXzj_fg6OWzAr7UaXgBCDoO-cKscNHDMW-7_2HinyYlvJ1uwVUzCrpPysuQnQ4ZOZbnftaV2DZj1foNkTjHyV7JFMg3eDOlXucEZwt2s2UOF4vTT6FgBhaW2OGCVOYG1TnqJa5WesI&usqp=CAc",
        thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8UwXzj_fg6OWzAr7UaXgBCDoO-cKscNHDMW-7_2HinyYlvJ1uwVUzCrpPysuQnQ4ZOZbnftaV2DZj1foNkTjHyV7JFMg3eDOlXucEZwt2s2UOF4vTT6FgBhaW2OGCVOYG1TnqJa5WesI&usqp=CAc",
    },
    {
        original: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8UwXzj_fg6OWzAr7UaXgBCDoO-cKscNHDMW-7_2HinyYlvJ1uwVUzCrpPysuQnQ4ZOZbnftaV2DZj1foNkTjHyV7JFMg3eDOlXucEZwt2s2UOF4vTT6FgBhaW2OGCVOYG1TnqJa5WesI&usqp=CAc",
        thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8UwXzj_fg6OWzAr7UaXgBCDoO-cKscNHDMW-7_2HinyYlvJ1uwVUzCrpPysuQnQ4ZOZbnftaV2DZj1foNkTjHyV7JFMg3eDOlXucEZwt2s2UOF4vTT6FgBhaW2OGCVOYG1TnqJa5WesI&usqp=CAc",
    },
    {
        original: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8UwXzj_fg6OWzAr7UaXgBCDoO-cKscNHDMW-7_2HinyYlvJ1uwVUzCrpPysuQnQ4ZOZbnftaV2DZj1foNkTjHyV7JFMg3eDOlXucEZwt2s2UOF4vTT6FgBhaW2OGCVOYG1TnqJa5WesI&usqp=CAc",
        thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8UwXzj_fg6OWzAr7UaXgBCDoO-cKscNHDMW-7_2HinyYlvJ1uwVUzCrpPysuQnQ4ZOZbnftaV2DZj1foNkTjHyV7JFMg3eDOlXucEZwt2s2UOF4vTT6FgBhaW2OGCVOYG1TnqJa5WesI&usqp=CAc",
    },
    {
        original: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8UwXzj_fg6OWzAr7UaXgBCDoO-cKscNHDMW-7_2HinyYlvJ1uwVUzCrpPysuQnQ4ZOZbnftaV2DZj1foNkTjHyV7JFMg3eDOlXucEZwt2s2UOF4vTT6FgBhaW2OGCVOYG1TnqJa5WesI&usqp=CAc",
        thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8UwXzj_fg6OWzAr7UaXgBCDoO-cKscNHDMW-7_2HinyYlvJ1uwVUzCrpPysuQnQ4ZOZbnftaV2DZj1foNkTjHyV7JFMg3eDOlXucEZwt2s2UOF4vTT6FgBhaW2OGCVOYG1TnqJa5WesI&usqp=CAc",
    },
    {
        original: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8UwXzj_fg6OWzAr7UaXgBCDoO-cKscNHDMW-7_2HinyYlvJ1uwVUzCrpPysuQnQ4ZOZbnftaV2DZj1foNkTjHyV7JFMg3eDOlXucEZwt2s2UOF4vTT6FgBhaW2OGCVOYG1TnqJa5WesI&usqp=CAc",
        thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8UwXzj_fg6OWzAr7UaXgBCDoO-cKscNHDMW-7_2HinyYlvJ1uwVUzCrpPysuQnQ4ZOZbnftaV2DZj1foNkTjHyV7JFMg3eDOlXucEZwt2s2UOF4vTT6FgBhaW2OGCVOYG1TnqJa5WesI&usqp=CAc",
    },
];



function page() {

    const { getData, data } = useProductDetailStore()
    const {id} = useParams()
    useEffect(() => {
        getData(id)
    }, [])

    console.log(data)
   


    // console.log(data)








    // const {id}  = useParams();
    return (
        <>
            <div className="container">
                <div className="flex items-center justify-between mt-[40px]" >
                    <div className="w-[700px] bg-white rounded-md  h-[554px] ml-12">
                        <ImageGallery
                            items={images}
                            infinite={true}
                            thumbnailPosition="left"
                            showFullscreenButton={false}
                            showPlayButton={false}
                            autoPlay={true}
                            showNav={false}
                        />
                    </div>



                    <div className="second">
                        <h2 className="title">{data?.description}</h2>
                        <div className="all_color">
                            <h2>Rang ;</h2>
                            <div className="colors">
                                <span>{data?.colors}</span>
                                {/* <span>{data?.colors.[1]}</span> */}
                                <Image
                                    src={Color}
                                    width={24}
                                    height={24}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src={Color2}
                                    width={24}
                                    height={24}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src={Color3}
                                    width={24}
                                    height={24}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src={Color4}
                                    width={24}
                                    height={24}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src={Color5}
                                    width={24}
                                    height={24}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>

                        <div className="costs">
                            <h2 className="cost">Narx;</h2>
                            <p className="dis_cost">14 699 999  so‘m</p>
                        </div>

                        <div>
                            <button className="btn">Oyiga 1 334 999 so‘mdan 12/oyga muddatli to ‘lov</button>
                        </div>

                        <div className="all_btns">
                            <Link href="/korzina">
                                <div>
                                    <button className="korzina">Savatga qo ‘shish</button>
                                </div>
                            </Link>

                            <Link href="/legitimation">
                                <div>
                                    <button className="purchase">Xarid qilish</button>
                                </div>
                            </Link>
                        </div>

                        <div className="driwer">
                            <Image
                                src={Driwer}
                                width={24}
                                height={24}
                                alt="Picture of the author"
                            />
                            <h2 className="driwer_title">Yetkazib berish O’zbekiston bo’ylab</h2>
                        </div>

                        <div className="shop">
                            <Image
                                src={Shop}
                                width={24}
                                height={24}
                                alt="Picture of the author"
                            />
                            <h2 className="shop_title">Do’kondi o’zidan olib ketishingiz mumkin</h2>
                        </div>

                        <div className="time">
                            <Image
                                src={Time}
                                width={24}
                                height={24}
                                alt="Picture of the author"
                            />
                            <h2 className="time_title">Tahminiy yetkazib berish  1 kundan 3 kungacha</h2>
                        </div>
                    </div>
                </div>

                <div className="mt-[100px] ml-[40px]">
                <Switcher />
                </div>
                {/* <div className="flex items-center gap-[16px] mt-[100px]">
                    <div>
                        <button className="property">Telfon xususiyatlari</button>
                    </div>
                    <Link href="/comment">
                    <div>
                        <button className="comment">Mijozlarni fikri</button>
                    </div>
                    </Link>
                </div>

                <div className="flex items-center gap-[20px]">
                    <div className="all_products">
                        <div className="flex items-center gap-[357px]">
                            <h2 className="brand">Brend</h2>
                            <p className="sub_brand">Vivo</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">CIM kartalar soni</h2>
                            <p className="sub_brand">2</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">O’lchamlari</h2>
                            <p className="sub_brand">75,09х155,11х8,28</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">Modeli</h2>
                            <p className="sub_brand">Redmi T12</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">Brend</h2>
                            <p className="sub_brand">Vivo</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">Akumulyator hajmi</h2>
                            <p className="sub_brand">4000 amp</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">Yadrolar soni</h2>
                            <p className="sub_brand">8</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">Tezkor xotira RAM</h2>
                            <p className="sub_brand">6 GB</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">Ichki xotira ROM</h2>
                            <p className="sub_brand">128 GB</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">Protsessori</h2>
                            <p className="sub_brand">MediaTek Helio P35 (MT6765)</p>
                        </div>
                    </div>

                    <div>
                        <Image
                            src={Group}
                            width={520}
                            height={542}
                            alt="Picture of the author"
                        />
                    </div>
                </div> */}
            </div >
        </>
    )
}

export default page