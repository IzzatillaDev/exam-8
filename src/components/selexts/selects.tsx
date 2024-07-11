import Image from "next/image"
import Phone from "../../assets/phone.svg"
import Left from "../../assets/left.svg"
import SmartTv from "../../assets/smart_tv.svg"
import Freezer from "../../assets/muzlatgich.svg"
import Conditioner from "../../assets/konditsioner.svg"
import AirConditioner from "../../assets/conditioner2.svg"
import Menu from "../../assets/menu.svg"
import "./style.scss"
import Link from "next/link"


const selects = () => {
    return (
        <>
            <section className="selects">
                <div className="container">
                    <div className="flex-wrap">
                        <div className="first flex gap-[20px]">
                            <div className="first_select">
                                        <Link href="/category">
                                <button className="select_one">
                                    <div className="flex items-center gap-[126px] ml-[38px]">
                                            <div className="flex items-center gap-[26px]">
                                                <div className="image">
                                                    <Image
                                                        src={Phone}
                                                        width={24}
                                                        height={24}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                Smartfonlar
                                            </div>

                                        <div className="left_image">
                                            <Image
                                                src={Left}
                                                width={20}
                                                height={20}
                                                alt="Picture of the author"
                                                />
                                        </div>
                                    </div>
                                </button>
                                                </Link>
                            </div>

                            <div className="first_select">
                                <Link href="/category">
                                <button className="select_one">
                                    <div className="flex items-center gap-[126px] ml-[38px]">
                                        <div className="flex items-center gap-[26px]">
                                            <div className="image">
                                                <Image
                                                    src={SmartTv}
                                                    width={24}
                                                    height={24}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                            Telivizorlar
                                        </div>

                                        <div className="left_image">
                                            <Image
                                                src={Left}
                                                width={20}
                                                height={20}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    </div>
                                </button>
                                </Link>
                            </div>

                            <div className="first_select">
                                <Link href="/category">
                                <button className="select_one">
                                    <div className="flex items-center gap-[126px] ml-[38px]">
                                        <div className="flex items-center gap-[26px]">
                                            <div className="image">
                                                <Image
                                                    src={Freezer}
                                                    width={24}
                                                    height={24}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                            Muzlatgichlar
                                        </div>

                                        <div className="left_image">
                                            <Image
                                                src={Left}
                                                width={20}
                                                height={20}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    </div>
                                </button>
                                </Link>
                                
                            </div>
                        </div>

                        <div className="second flex items-center gap-[20px] pt-[20px] flex-wrap">
                            <div className="first_select">
                                <Link href="/category">
                                <button className="select_one">
                                    <div className="flex items-center gap-[126px] ml-[38px]">
                                        <div className="flex items-center gap-[26px]">
                                            <div className="image">
                                                <Image
                                                    src={Conditioner}
                                                    width={24}
                                                    height={24}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                            Konditsionerlar
                                        </div>

                                        <div className="left_image">
                                            <Image
                                                src={Left}
                                                width={20}
                                                height={20}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    </div>
                                </button>
                                </Link>
                            </div>

                            <div className="first_select">
                                <Link href="/category">
                                <button className="select_one">
                                    <div className="flex items-center gap-[126px] ml-[38px]">
                                        <div className="flex items-center gap-[26px]">
                                            <div className="image">
                                                <Image
                                                    src={AirConditioner}
                                                    width={24}
                                                    height={24}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                            Konditsionerlar
                                        </div>

                                        <div className="left_image">
                                            <Image
                                                src={Left}
                                                width={20}
                                                height={20}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    </div>
                                </button>
                                </Link>
                            </div>

                            <div className="first_select">
                                <Link href="/category">
                                <button className="select_one">
                                    <div className="flex items-center gap-[126px] ml-[38px]">
                                        <div className="flex items-center gap-[26px]">
                                            <div className="image">
                                                <Image
                                                    src={Menu}
                                                    width={24}
                                                    height={24}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                            Barcha mahsulotlar
                                        </div>

                                        <div className="left_image">
                                            <Image
                                                src={Left}
                                                width={20}
                                                height={20}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    </div>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default selects