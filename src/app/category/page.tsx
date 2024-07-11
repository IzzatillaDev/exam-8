import Image from "next/image"
import Product1 from "../../assets/product1.svg"
import Like from "../../assets/like.svg"
import Rate from "../../assets/rating.svg"
import "./style.css"

const page = () => {
    return (
        <>
            <div className="container">
                <div className="flex items-center gap-[48px]">
                    <div className="bg-[#E4E4E4] rounded-lg mt-[66px]">
                        <div className="bg-white p-6 rounded-lg w-[356px] py-5 px-4">
                            <h2 className="text-lg font-semibold mb-4">Фильтр</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700">Цена</label>
                                <input
                                    type="range"
                                    min="3 000 000"
                                    max="13 000 000"
                                    defaultValue="3000"
                                    className="w-full mb-2"
                                    id="priceRange"
                                />
                                <div className="flex justify-between text-gray-700">
                                    <span>3 000 000 uzs</span>
                                    <span>6 000 000 uzs</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="artikul" className="block text-gray-700">
                                    Артикул:
                                </label>
                                <input
                                    type="text"
                                    id="artikul"
                                    className="mt-1 block w-full rounded-md p-2.5 bg-[#F2F2F2] outline-none"
                                    placeholder="аф566"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="category" className="block text-gray-700">
                                    Выберите категорию:
                                </label>
                                <select
                                    id="category"
                                    className="mt-1 block w-full rounded-md p-2.5 bg-[#F2F2F2] outline-none"
                                >
                                    <option>Все</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="new" className="block text-gray-700">
                                    Новинка:
                                </label>
                                <select
                                    id="new"
                                    className="mt-1 block w-full rounded-md p-2.5 bg-[#F2F2F2] outline-none"
                                >
                                    <option>Все</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="sale" className="block text-gray-700">
                                    Акция:
                                </label>
                                <select
                                    id="sale"
                                    className="mt-1 block w-full rounded-md p-2.5 bg-[#F2F2F2] outline-none"
                                >
                                    <option>Все</option>
                                </select>
                            </div>
                        </div>
                        <button className="py-3 px-[80px]">Показать результат</button>
                    </div>

                    <div className="all_products">
                        <div className="first_product">
                            <div className="pt-[50px]">
                                <div className="first_image">
                                    <Image
                                        src={Product1}
                                        width={144}
                                        height={170}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div style={{ paddingTop: "64px" }}>
                                    <h1 className="product_title">Газ плитаси Artel Apetito GP F90G Мат-қора</h1>
                                    <h2 className="product_cost">347 000 so‘m</h2>
                                    <p className="dis_cost">1 134 890 so’mdan/12 oy</p>
                                    <div className="btn_icons">
                                        <button className="basket">Savat</button>
                                        <div className="like_icon">
                                            <Image
                                                src={Like}
                                                width={20}
                                                height={20}
                                                alt="Picture of the author"
                                            />
                                        </div>

                                        <div className="rate_icon">
                                            <Image
                                                src={Rate}
                                                width={20}
                                                height={20}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="first_product">
                            <div className="pt-[50px]">
                                <div className="first_image">
                                    <Image
                                        src={Product1}
                                        width={144}
                                        height={170}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div style={{ paddingTop: "64px" }}>
                                    <h1 className="product_title">Газ плитаси Artel Apetito GP F90G Мат-қора</h1>
                                    <h2 className="product_cost">347 000 so‘m</h2>
                                    <p className="dis_cost">1 134 890 so’mdan/12 oy</p>
                                    <div className="btn_icons">
                                        <button className="basket">Savat</button>
                                        <div className="like_icon">
                                            <Image
                                                src={Like}
                                                width={20}
                                                height={20}
                                                alt="Picture of the author"
                                            />
                                        </div>

                                        <div className="rate_icon">
                                            <Image
                                                src={Rate}
                                                width={20}
                                                height={20}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="first_product">
                            <div className="pt-[50px]">
                                <div className="first_image">
                                    <Image
                                        src={Product1}
                                        width={144}
                                        height={170}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div style={{ paddingTop: "64px" }}>
                                    <h1 className="product_title">Газ плитаси Artel Apetito GP F90G Мат-қора</h1>
                                    <h2 className="product_cost">347 000 so‘m</h2>
                                    <p className="dis_cost">1 134 890 so’mdan/12 oy</p>
                                    <div className="btn_icons">
                                        <button className="basket">Savat</button>
                                        <div className="like_icon">
                                            <Image
                                                src={Like}
                                                width={20}
                                                height={20}
                                                alt="Picture of the author"
                                            />
                                        </div>

                                        <div className="rate_icon">
                                            <Image
                                                src={Rate}
                                                width={20}
                                                height={20}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>             
                    </div>
                </div>
            </div>
        </>
    )
}

export default page