import React, { useState } from 'react'
import { Select, Space, } from 'antd';
import { useCrypto } from '../context/crypto-context';

const AddAssetForm = () => {
    const {crypto} = useCrypto()

    const [coin, setCoin] = useState(null)

    if (!coin) {
        return (
            <Select
                onSelect={(v) => setCoin(crypto.find(c => c.id === v))}
                placeholder='Select coin'
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
        )
    }

    return (
        <form>FORM ASSET</form>
    )
}

export default AddAssetForm