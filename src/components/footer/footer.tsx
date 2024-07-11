import Image from "next/image"
import Logo from "../../assets/logo.svg"
import Instagram from "../../assets/instagram.svg"
import Telegram from "../../assets/telegram.svg"
import FaceBook from "../../assets/facebook.svg"
import Twitter from "../../assets/twitter.svg"
import "./style.scss"
import Link from "next/link"



const footer = () => {
    return (
        <>
            <footer className="">
                <div className="container">
                    <div className="footer">
                        <div>
                            <Image
                                src={Logo}
                                width={240}
                                height={68}
                                alt="Picture of the author"
                            />

                            <h2 className="networks">Bizni ijtimoiyi tarmoqlar</h2>

                            <div className="all_socials">
                                <div className="instagram">
                                    <Image
                                        src={Instagram}
                                        width={20}
                                        height={20}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div className="instagram">
                                    <Image
                                        src={Telegram}
                                        width={20}
                                        height={20}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div className="instagram">
                                    <Image
                                        src={FaceBook}
                                        width={20}
                                        height={20}
                                        alt="Picture of the author"
                                    />
                                </div>

                                {/* <Link href="/https://x.com/"> */}
                                <div className="instagram">
                                    <Image
                                        src={Twitter}
                                        width={20}
                                        height={20}
                                        alt="Picture of the author"
                                    />
                                </div>
                                {/* </Link> */}
                            </div>
                        </div>

                        <div>
                            <h2 className="about">Tashkilot haqida</h2>
                            <p className="about_texno">Texnoark haqida</p>
                            <p className="payment">Muddatli to’lov</p>
                            <p className="help">Yordam</p>
                            <p className="penance">Tovarlarga kafolat</p>
                            <p className="cost">To‘lov usullari</p>
                        </div>


                    
                    <div className="flex items-center flex-wrap">
                        <div className="category">
                            <h2 className="about">Kategoriya</h2>
                            <p className="about_texno">Noutbook va Kompuyetrlar</p>
                            <p className="payment">Smartfonlar</p>
                            <p className="help">Kir yuvish mashinasi</p>
                            <p className="penance">Muzlatgichalar</p>
                            <p className="cost">Kondetsioner</p>
                            <p className="cost2">Pech va Gazpilita</p>
                        </div>

                        <div>
                            <h2 className="contact">Biz bilan aloqa</h2>
                            <p className="location">Manzilimiz: 100052, O‘zbekiston Respublikasi, Toshkent shahri, Bodomzor yo‘li 1-tor ko‘chasi, 72
                            </p>

                            <div>
                                <span className="tel">Telfonraqam:</span>
                                <span className="tel">+998 71 300 30 30</span>
                            </div>

                            <div>
                                <span className="gmail">Elktronpochta:</span>
                                <span className="gmail">texnoarko@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    </div>


                </div>


            </footer>
        </>
    )
}

export default footer