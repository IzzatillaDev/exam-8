

import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import Korzina from "../../../assets/korzina.svg"
import Image from "next/image"

const App: React.FC = () => (
    <Space className='flex items-center' size="middle">
        <Badge count={5}>
            <Image
                src={Korzina}
                width={16}
                height={16}
                alt="Picture of the author"
                className='mr-[7px]'
            />
        </Badge>
    </Space>
);

export default App;
