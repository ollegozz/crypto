import React, { useState } from 'react'
import { Select, Space, Typography, Flex, Divider, Form, Input, Checkbox, Button, InputNumber } from 'antd';
import { useCrypto } from '../context/crypto-context';

const AddAssetForm = () => {
    const { crypto } = useCrypto()

    const [coin, setCoin] = useState(null)

    if (!coin) {
        return (
            <Select
                style={{ width: '100%' }}
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

    function onFinish(values) {
        console.log('finish', values);
    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 4, }}
            wrapperCol={{ span: 10, }}
            style={{ maxWidth: 600, }}
            initialValues={{}}
            onFinish={onFinish}
        >
            <Flex align='center'>
                <img src={coin.icon} alt={coin.name} style={{ width: 40, marginRight: 10 }} />
                <Typography.Title lavel={2} style={{ margin: 0 }}>
                    {coin.name}
                </Typography.Title>
            </Flex>
            <Divider />


            <Form.Item
                label="Amount"
                name="Amount"
                rules={[
                    {
                        required: true,
                        type: 'number', 
                        min: 0,
                        message: 'Please input amount!',
                    },
                ]}
            >
                <InputNumber style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item label="Price" name="price" >
                <InputNumber disabled style={{width: '100%'}}/>
            </Form.Item>
            
                {/* &amp; спецсимвол & */}
            <Form.Item label="Date &amp; Time" name="date" >
                <InputNumber disabled style={{width: '100%'}}/>
            </Form.Item>

            <Form.Item label="Total" name="total" >
                <InputNumber disabled style={{width: '100%'}}/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add asset
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AddAssetForm