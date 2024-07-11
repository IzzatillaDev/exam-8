import { useEffect, useState } from 'react';
import Image from 'next/image';
import Group from "../../assets/Group 48097411.png"
import useCommentStore from '../../../store/comment';
import "./style.css"
import { useParams } from 'next/navigation';
import { UserOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
import { ProFormTextArea } from '@ant-design/pro-components';
import Cookies from 'js-cookie';
import Notification from '../../../utils/utils';






const switcher = () => {
    
  const { getData, data, postCommets }:any = useCommentStore();

  async function handleSubmit(value: any) {
    value.product_id = Number(Cookies.get("product_id"));
    const response = await postCommets(value);
    if (response.status == 201) {
        Notification({title: "Comment shared successfully", type: "default"})
    }
  }

    // const { getData, data } = useCommentStore()
    const [activeTab, setActiveTab] = useState('tab2');
    const { id } = useParams()
    useEffect(() => {
        getData(id)
    }, [])

    console.log(data)


    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
    };

    return (

        <div>
            <div className="tabs">
                <button onClick={() => handleTabClick('tab1')} className={activeTab === 'tab1' ? 'active' : 'property1'}>
                    Telfon xususiyatlari
                </button>
                <button onClick={() => handleTabClick('tab2')} className={activeTab === 'tab2' ? 'moment' : ''}>
                    Mijozlarni fikri
                </button>

            </div>
            <div className="content">
                {activeTab === 'tab1' && <div>
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
                    </div>

                </div>}
                {activeTab === 'tab2' && <div>
                    {
                        data?.map((item: any) => (
                            <div>
                                <div className="mt-[40px]">
                                    <Form onFinish={(value) => handleSubmit(value)}>
                                        <ProFormTextArea
                                            placeholder={'Comentariya qoldiring'}
                                            name={'comment'}
                                        />
                                        <Button htmlType="submit" className="single_btn" style={{ width: '120px', display: 'flex' }}>Yuborish</Button>
                                    </Form>
                                </div>

                                <div className='all_products2'>
                                    <div className='flex items-center gap-[22px]'>
                                        <div>
                                            <UserOutlined />
                                        </div>
                                        <div className='flex items-center gap-[6px]'>
                                            <h2 className='font-bold text-black text-2xl'>{item.user_id.first_name}</h2>
                                            <h2 className='font-bold text-black text-2xl'>{item.user_id.last_name}</h2>
                                        </div>
                                        <p className='font-bold text-black text-2xl'>{item.createdAt}</p>
                                    </div>
                                    <h2 className='font-semibold pl-[37px]'>Izohlar: {item.comment.slice(0, 30)}</h2>
                                </div>
                            </div>
                        ))
                    }

                </div>}
            </div>
            <style jsx>{`
            .tabs {
              display: flex;
              gap: 10px;
              margin-bottom: 20px;
            }
            .tabs button {
              padding: 10px 20px;
              border: none;
              cursor: pointer;
              background-color: #f0f0f0;
            }
            .tabs button.active {
                color: var(--Asosiy-White, #FFF);
                font-family: Outfit;
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: 26px;
                border-radius: 6px;
                background: var(--Brend-rang-tuslari-Orangert80, #FF6F14);
                padding: 14px 32px;
            }
            .tabs button.moment {
                color: var(--Asosiy-Black, #331400);
                font-family: Outfit;
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: 26px;
                border-radius: 6px;
                background: var(--Asosiy-White, #FFF);
                padding: 14px 32px;
            }
            .content {
              border: 1px solid #eaeaea;
              padding: 20px;
            }
            .property {
                color: var(--Asosiy-White, #FFF);
                font-family: Outfit;
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: 26px;
                border-radius: 6px;
                background: var(--Brend-rang-tuslari-Orangert80, #FF6F14);
                padding: 14px 32px;
            }
            .property2 {
                color: var(--Asosiy-White, #FFF);
                font-family: Outfit;
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: 26px;
                border-radius: 6px;
                background-color: gray;
                padding: 14px 32px;
            }
          `}</style>
        </div>
    );
}

export default switcher