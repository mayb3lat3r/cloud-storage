import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import './registration.scss'
import { registration } from '../../actions/user'


const Registration = () => {
    const [form] = Form.useForm()

    const onFinish = (values) => {
        console.log('Received values of form: ', values)
        registration(values.email, values.password)
    }

    return (
        <div className="Register">
            <h1>Регистрация</h1>
            <div className="auth__description">
                <h2>Пожалуйста, зарегистрируйтесь, чтобы пользоваться облачным хранилищем</h2>
            </div>
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
                            message: 'Введите корректный E-mail',
                        },
                        {
                            required: true,
                            message: 'Введите свой E-mail',
                        },
                    ]}
                >
                    <Input autoComplete="true" />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Пароль"
                    rules={[
                        {
                            required: true,
                            message: 'Введите пароль',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password autoComplete="true" />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Повторите пароль"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Повторите пароль',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve()
                                }

                                return Promise.reject(new Error('Пароли не совпадают!'))
                            },
                        }),
                    ]}
                >
                    <Input.Password autoComplete="true" />
                </Form.Item>

                {/* <Form.Item
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
                    <Input autoComplete="true" />
                </Form.Item> */}


                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Регистрация
                    </Button>
                    <span> или <Link to="/login">войдите</Link></span>
                </Form.Item>

            </Form>
        </div>
    )
}

export default Registration