


import Link from "next/link"
import { Input } from 'antd';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import { Radio } from 'antd';


import "./style.css"
const page = () => {
    // type LabelRender = SelectProps['labelRender'];

    const options = [
        { label: 'Tashket viloyati', value: 'Tashket viloyati' },
        { label: 'Samarkand', value: 'Samarkand' },
        { label: 'Surkhandaryo', value: 'Surkhandaryo' },
        { label: 'Jizzah', value: 'Jizzah' },
    ];
    const options_sub_region = [
        { label: "Bo'ka tumani", value: "Bo'ka tumani" },
        { label: 'Samarkand', value: 'Samarkand' },
        { label: 'Surkhandaryo', value: 'Surkhandaryo' },
        { label: 'Jizzah', value: 'Jizzah' },
    ];

    return (
        <>
            <div className="container">
                        <div className="flex items-center gap-[6px] mt-[12px]">
                            <Link href="/">
                                <div>
                                    <button className="abouts">Bosh sahifa</button>
                                </div>
                            </Link>

                            <div>
                                <button className="smartphones">Smartfonlar</button>
                            </div>

                            <Link href="/legitimation">
                                <div>
                                    <button className="legitimations">Xaridni rasmiylashtirish</button>
                                </div>
                            </Link>
                        </div>
                <div className="flex gap-[36px] pt-[18px] pb-[60px]">
                    <div className="first_input_card">

                        <div className="flex items-center gap-[12px]">
                            <div className="phone_inp">
                                <h2 className="phone">Telfon raqam</h2>
                                <Input name="phone" className="phone_inputs" type="tel" placeholder="998" />
                            </div>

                            <div className="name_inp">
                                <h2 className="name">Ism/Familya</h2>
                                <Input name="input" className="name_inputs" type="input" placeholder="" />
                            </div>
                        </div>

                        <div className="mt-[36px]">
                            <div>
                                <Radio> Do’kondan olib ketish .</Radio>
                            </div>
                            <div className="mt-[16px]">
                                <Radio> Xaridingizni uyingizga yetkazib berish </Radio>
                            </div>
                        </div>

                        <div className="flex items-center gap-[12px] mt-[36px]">
                            <div>
                                <h2 className="region">Viloyat</h2>
                                <Select defaultValue="Tashkent" className="select" options={options} />
                            </div>
                            <div>
                                <h2 className="sub_region">Tuman</h2>
                                <Select defaultValue="Tashkent" className="select" options={options_sub_region} />
                            </div>
                        </div>

                        <div className="flex items-center gap-[300px]">
                            <div className="location">
                                <h2 className="location_title">Aniq manzilni ; Mahalla/Ko’cha/Uy</h2>
                                <Input name="location_input" className="location_inputs" type="input" placeholder="Tinchlik mahallasi Yoshlik-1 ko’chasi 12-uy" />
                            </div>

                            <div className="time mt-5">
                                <h2 className="time_title">Yetkazib berish vaqti</h2>
                                <Input name="time_input" className="time_inputs" type="input" placeholder="01/24" />
                            </div>
                        </div>


                        <div className="mt-[36px]">
                            <div>
                                <Radio>Naqtd yetkazgandan so’ng to’lash</Radio>
                            </div>
                            <div>
                                <Radio>Karta orqali ( Humo/Uzcard/Visa/)</Radio>
                            </div>
                            <div>
                                <Radio>Muddatli to’lov (4/6/12/24 oyga)</Radio>
                            </div>
                        </div>
                    </div>

                    <div className="second_input_card">
                        <h2 className="input_sub_title">Sizni haridlaringiz</h2>
                        <div className="flex items-center gap-[13px] mt-[17px]">
                            <h2 className="product_sub_title">Mahsulotlar;</h2>
                            <span className="prodcut_number">6 ta</span>
                        </div>

                        <div className="flex items-center gap-[8px] mt-[16px]">
                            <h2 className="total">Jami summa;</h2>
                            <span className="all_total">56 778 678 so‘m</span>
                        </div>

                        <div>
                            <button className="total_access">
                                Xaridni rasmiylashtirish
                            </button>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default page