import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import './registration.scss'


const Registration = () => {
    const [form] = Form.useForm()

    const onFinish = (values) => {
        console.log('Received values of form: ', values)
    }

    return (
        <div className="Register">
            <h1>Registration</h1>
            <h2>Please, register to use the cloud storage</h2>
            <Form
                form={form}
                name="register"
                className="ant-form-vertical"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve()
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'))
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="nickname"
                    label="Nickname"
                    tooltip="What do you want others to call you?"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your nickname!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                    <span> Or <Link to="/login">log in</Link></span>
                </Form.Item>
                
            </Form>
        </div>
    )
}

export default Registration