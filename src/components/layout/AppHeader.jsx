import React, { useEffect } from 'react'
import { Layout, Select, Space, Button, Modal } from 'antd';
import { useCrypto } from '../../context/crypto-context';
import { useState } from 'react';

const headerStyle = {
    width: '100%',
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    // background: 'white'
};

// const handleChange = (value) => {
//     console.log(`selected ${value}`);
// };

// const options = [
//     {
//         label: 'China',
//         value: 'china',
//         emoji: '🇨🇳',
//         desc: 'China (中国)',
//     },
//     {
//         label: 'USA',
//         value: 'usa',
//         emoji: '🇺🇸',
//         desc: 'USA (美国)',
//     },
//     {
//         label: 'Japan',
//         value: 'japan',
//         emoji: '🇯🇵',
//         desc: 'Japan (日本)',
//     },
//     {
//         label: 'Korea',
//         value: 'korea',
//         emoji: '🇰🇷',
//         desc: 'Korea (韩国)',
//     },
// ];

const AppHeader = () => {
    const { crypto } = useCrypto()
    const [select, setSelect] = useState(false)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        const keypress = e => {
            if (e.key === '/') {
                setSelect((prev) => !prev)
            }
        }
        document.addEventListener('keypress', keypress)
        return () => document.removeEventListener('keypress', keypress)
    },[])

    function handleSelect(value) {
        console.log(value);
        setModal(true)
    }

    return (
        <Layout.Header style={headerStyle}>
            <Select
                style={{
                    width: '250px',
                }}
                open={select}
                onSelect={handleSelect}
                onClick={() => setSelect((prev) => !prev)}
                value= 'Press / to open'
                defaultValue={['china']}
                // onChange={handleChange}
                // optionLabelProp="label"
                options={crypto.map(coin => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon
                }))}
                optionRender={(option) => (
                    <Space>
                        {/* ant design оборачивает в option.data*/}
                        <img style={{width: 20}} src={option.data.icon} alt={option.data.label}/> {option.data.label}
                    </Space>
                )}
            />
                <Button type="primary">Add asset</Button>

            <Modal title="Basic Modal" 
                open={modal}
                onCancel={() => setModal(false)}
                footer={null}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
                
        </Layout.Header>
    )
}

export default AppHeader