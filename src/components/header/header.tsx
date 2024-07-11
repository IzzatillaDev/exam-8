"use client"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../assets/logo.svg"
import Search from "../ui/input/input"
import User from "../../assets/user.svg"
import Carusel from "../ui/casrousel/carousel"
import Icon from "../ui/icons/icon"
import RateIcon from "../ui/rate_icon/icon"
import { useEffect, useState } from "react"
import Korzina from "../ui/korzina/icon"
import useCategoryStore from "../../../store/category"
import Dropdown from "../../components/ui/dropdown/dropdown"
import useSubCategoryStore from "../../../store/sub_categories"
import useSubCategoryIdStore from "../../../store/sub_category_id"
import {
    ArrowRightOutlined,
    // BarChartOutlined,
    CloseSquareOutlined,
    // HeartOutlined,
    PhoneOutlined,
    // SearchOutlined,
    // ShoppingCartOutlined,
    UnorderedListOutlined,
    // UserOutlined
} from "@ant-design/icons";
import "./style.scss"
import uselikestore from "../../../store/like"




const header = () => {
    const { get_sub_data, subcategories } = useSubCategoryStore()
    const {get_sub_id_data,subidcategories} = useSubCategoryIdStore()
    const [category, setcategory] = useState('')
    async function getSub(e: any) {
        setcategory(e.name)
        await get_sub_data(e.id)
    }

    const [params] = useState({
        page: 1,
        limit: 10
    })
    const [open, setOpen] = useState(false)
    const { getData, data } = useCategoryStore()
    const {count} = uselikestore()

    useEffect(() => {
        getData(params)
    }, [getData, params])

    console.log(data)


    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header_btm">
                        <ul className="links">
                            <li>
                                <Link className="link" href="/about">
                                    Biz haqimizda
                                </Link>
                            </li>

                            <li>
                                <Link className="link" href="#">
                                    Yetkazib berish
                                </Link>
                            </li>

                            <li>
                                <Link className="link" href="#">
                                    Shartnoma shartlari
                                </Link>
                            </li>

                            <li>
                                <Link className="link" href="#">
                                    Bizning kafolatlar
                                </Link>
                            </li>
                        </ul>

                        <div className="select_number">
                            <select className="num" name="+998 71 300 30 30" id="+998 71 300 30 30">
                                <option value="+998 71 300 30 30">+998 71 300 30 30</option>
                            </select>

                            <div className="languages">
                                <button className="rus">Rus</button>
                                <button className="rus">O’zb</button>
                                <button className="rus">Eng</button>
                            </div>
                        </div>
                    </div>
                    <div className="header_type">
                        <div className="header_bottom">
                            <div className="logo">
                                <Link href="/">
                                    <Image
                                        src={Logo}
                                        width={140}
                                        height={40}
                                        alt="Picture of the author"
                                    />
                                </Link>
                            </div>

                            <div className="search_inp">
                                <div>
                                    <button onClick={() => setOpen(!open)} className="category_btn">
                                        {
                                            open ?
                                                <CloseSquareOutlined className="icon_close" />
                                                :
                                                <UnorderedListOutlined className="icon_open" />

                                        }
                                        {
                                            open ?
                                                "Bekor qilish"
                                                :
                                                "Kategoriya"
                                        }

                                    </button>
                                </div>
                                <div className="search">
                                    <Search />
                                </div>

                                <div className={`w-[90.9%] flex gap-[80px] absolute bg-[#fff] left-3 z-[99999] py-[30px] px-[20px] ${open ? ' ml-[55px] top-[197px] duration-1000 opacity-1' : " ml-[55px] top-[-1200px] duration-1000 opacity-0"} drawer`}>
                                    <div>
                                        {
                                            data?.map((el, i) => {
                                                return (
                                                    // <Link href="/category">
                                                        <div onClick={() => getSub(el.id)} key={i} className=' hover:bg-[#FF6F14] hover:text-white mt-[10px] flex items-center justify-between w-[440px] h-[50px] py-[35px] px-[59px] bg-[#F0F0F0] rounded-xl cursor-pointer card '>
                                                            <PhoneOutlined className='w-[60px] h-[60px] text-[20px]' />
                                                            <p>{el.name}</p>
                                                            <ArrowRightOutlined />
                                                        </div>
                                                    // </Link>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="mt-[7px] border-l-[1px] pl-[60px]">
                                        <p className="text-[27px] font-bold mb-[20px]">Tovarlar</p>
                                        {
                                            subidcategories?.map((e, i) => {
                                                return (
                                                    <div key={i}>
                                                        <p className="font-semibold text-[16px] mb-4 cursor-pointer">{e.name}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="all_notif_btns" >
                                <button className="button" >
                                    <Link href="/like" >
                                        <Icon />
                                    </Link>
                                    {/* <Image
                                        src={Like}
                                        width={16}
                                        height={16}
                                        alt="Picture of the author"
                                    /> */}
                                </button>

                                <button className="button">
                                    <Link href="/rating">
                                        <RateIcon />
                                    </Link>
                                </button>

                                <button className="button">
                                    <Link href="/card">
                                        <Korzina />
                                    </Link>
                                </button>

                                <div>
                                    <Dropdown />
                                </div>

                                {/* <button className="user_btn">
                                    <Link href="/login">
                                        <Image
                                            src={User}
                                            width={16}
                                            height={16}
                                            alt="Picture of the author"
                                        />
                                    </Link>
                                </button> */}
                            </div>
                        </div>


                    </div>
                </div>
            </header>
        </>
    )
}

export default header