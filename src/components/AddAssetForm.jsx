import React, { useState } from 'react'
import { Select, Space, Typography, Flex, Divider, Form, Button, InputNumber, DatePicker, Result } from 'antd';
import { useCrypto } from '../context/crypto-context';

const AddAssetForm = ( {onClose} ) => {
    const [form] = Form.useForm()
    const { crypto } = useCrypto()
    const [coin, setCoin] = useState(null)
    const [submitted, setSubmitted] = useState(false)

    const validateMessages = {
        required: '${label} is required',
        types: {
            number: '${label} is not valid numder'
        },
        number: {
            range: '${label} must to be between ${min} and ${max}'
        }
    }

    if (submitted) {
        return (
            <Result
                status="success"
                title="New Asset added!"
                subTitle={`Added ${42} of ${coin.name} by price ${24}`}
                extra={[
                    <Button type="primary" key="console" onClick={onClose}>
                        Close
                    </Button>,
                    // <Button key="buy">Buy Again</Button>,
                ]}
            />
        )
    }

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
        setSubmitted(true)
    }

    function handleAmountChange(value) {
        const price = form.getFieldValue('price')
        form.setFieldsValue({
            total: +(value * price),
        })
    }

    function handlePriceChange(value) {
        const amount = form.getFieldValue('amount')
        form.setFieldsValue({
            total: +(amount * value).toFixed(2),
        })
    }

    return (
        <Form
            form={form}
            name="basic"
            labelCol={{ span: 4, }}
            wrapperCol={{ span: 10, }}
            style={{ maxWidth: 600, }}
            initialValues={{
                price: +coin.price.toFixed(2),
            }}
            onFinish={onFinish}
            validateMessages={validateMessages}
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
                        min: 0
                    },
                ]}
            >
                <InputNumber placeholder='Enter coin amount'
                style={{ width: '100%' }} 
                onChange={handleAmountChange}
                />
            </Form.Item>

            <Form.Item label="Price" name="price" >
                <InputNumber
                    onChange={handlePriceChange}
                style={{width: '100%'}}/>
            </Form.Item>
            
                {/* &amp; спецсимвол & */}
            <Form.Item label="Date &amp; Time" name="date" >
                <DatePicker showTime style={{ width: '100%' }}></DatePicker>
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