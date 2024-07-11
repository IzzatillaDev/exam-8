import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import User from "../../../assets/user.svg"
import Image from 'next/image';
import { UnlockOutlined, UserAddOutlined } from '@ant-design/icons';
import Link from 'next/link';


const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link href="/login">
                <div className='flex items-center gap-2'>
                    <UnlockOutlined />
                    <h2>Login</h2>
                </div>
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link href="/profile">
                <div className='flex items-center gap-2'>
                    <UserAddOutlined />
                    <h2>Profile</h2>
                </div>
            </Link>
        ),
    },
    // {
    //     key: '3',
    //     label: (
    //         <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
    //             3rd menu item
    //         </a>
    //     ),
    // },
];

const App: React.FC = () => (
    <Space direction="vertical">
        <Space wrap>
            <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                <button className='user_btn'>
                    <Image
                        src={User}
                        width={16}
                        height={16}
                        alt="Picture of the author"
                    />
                </button>
            </Dropdown>
            {/* <Dropdown menu={{ items }} placement="bottom" arrow>
        <Button>bottom</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="bottomRight" arrow>
        <Button>bottomRight</Button>
      </Dropdown> */}
        </Space>
        {/* <Space wrap>
      <Dropdown menu={{ items }} placement="topLeft" arrow>
        <Button>topLeft</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="top" arrow>
        <Button>top</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="topRight" arrow>
        <Button>topRight</Button>
      </Dropdown>
    </Space> */}
    </Space>
);

export default App;