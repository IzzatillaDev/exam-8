import Image from "next/image"
import Success from "../../assets/success.svg"
import "./style.scss"

const comment = () => {
    return (
        <section className="comment">
            <div className="container">
                <div className="banner">
                    <div className="texts">
                        <div>
                            <h2 className="banner_title">Mahsulot yoqmadi - pulni qaytarib beramiz</h2>
                            <p className="banner_text">Kamchilik bormi yoki etkazib berishda mahsulot yoqmadimi?</p>
                        </div>

                        <div>
                            <Image
                                src={Success}
                                width={240}
                                height={240}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default comment