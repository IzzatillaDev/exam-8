import Image from "next/image"
import Huawei from "../../assets/huawei.svg"
import "./style.scss"

const brands = () => {
    return (
        <>
           <section className="brands">
           <div className="container">
                <div className="all_brands">
                    <div className="first_brand">
                        <Image
                            src={Huawei}
                            width={107}
                            height={80}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="first_brand">
                        <Image
                            src={Huawei}
                            width={107}
                            height={80}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="first_brand">
                        <Image
                            src={Huawei}
                            width={107}
                            height={80}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="first_brand">
                        <Image
                            src={Huawei}
                            width={107}
                            height={80}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="first_brand">
                        <Image
                            src={Huawei}
                            width={107}
                            height={80}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>
           </section>
        </>
    )
}

export default brands