import React from 'react';
import { Input } from 'antd';
import './style.css'

// const App: React.FC = () => <Input placeholder="Basic usage" />;

// export default App;


const input = () => {
  return (
    <Input className='search' placeholder="Хочу купить..." />
  )
}

export default input