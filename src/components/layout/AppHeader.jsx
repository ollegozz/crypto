import React, { useEffect } from 'react'
import { Layout, Select, Space, Button, Modal, Drawer } from 'antd';
import { useCrypto } from '../../context/crypto-context';
import { useState } from 'react';
import CoinInfoModal from '../CoinInfoModal';
import AddAssetForm from '../AddAssetForm';

const headerStyle = {
    width: '100%',
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};


const AppHeader = () => {
    const { crypto } = useCrypto()
    const [select, setSelect] = useState(false)
    const [modal, setModal] = useState(false)
    const [coin, setCoin] = useState(null)
    const [drawer, setDrawer] = useState(false)

    useEffect(() => {
        const keypress = e => {
            if (e.key === '/') {
                setSelect((prev) => !prev)
            }
        }
        document.addEventListener('keypress', keypress)
        return () => document.removeEventListener('keypress', keypress)
    }, [])

    function handleSelect(value) {
        console.log(value);
        setCoin(crypto.find((c) => c.id === value))
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
                value='Press / to open'
                defaultValue={['china']}
                options={crypto.map(coin => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon
                }))}
                optionRender={(option) => (
                    <Space>
                        {/* ant design оборачивает в option.data*/}
                        <img style={{ width: 20 }} src={option.data.icon} alt={option.data.label} /> {option.data.label}
                    </Space>
                )}
            />
            <Button type="primary"
                onClick={() => setDrawer(true)}
            >
                Add asset
            </Button>

            <Modal
                open={modal}
                onCancel={() => setModal(false)}
                footer={null}>
                <CoinInfoModal coin={coin} />
            </Modal>

            <Drawer
                width={600}
                title="Add asset"
                onClose={() => setDrawer(false)}
                open={drawer}>
                <AddAssetForm />
            </Drawer>

        </Layout.Header>
    )
}

export default AppHeader