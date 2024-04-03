import React from 'react'
import { Layout, Select, Space, Button } from 'antd';

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

const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const options = [
    {
        label: 'China',
        value: 'china',
        emoji: '🇨🇳',
        desc: 'China (中国)',
    },
    {
        label: 'USA',
        value: 'usa',
        emoji: '🇺🇸',
        desc: 'USA (美国)',
    },
    {
        label: 'Japan',
        value: 'japan',
        emoji: '🇯🇵',
        desc: 'Japan (日本)',
    },
    {
        label: 'Korea',
        value: 'korea',
        emoji: '🇰🇷',
        desc: 'Korea (韩国)',
    },
];

const AppHeader = () => {
    return (
        <Layout.Header style={headerStyle}>
            <Select
                style={{
                    width: '250px',
                }}
                value= 'Press # to open'
                defaultValue={['china']}
                // onChange={handleChange}
                optionLabelProp="label"
                options={options}
                optionRender={(option) => (
                    <Space>
                        {/* <span role="img" aria-label={option.data.label}>
                            {option.data.emoji}
                        </span>
                        {option.data.desc} */}
                        <img/> bitcoin
                    </Space>
                )}
            />
                <Button type="primary">Add asset</Button>
                
        </Layout.Header>
    )
}

export default AppHeader