import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/user'

import './authorization.scss'

const Authorization = () => {
    const dispatch = useDispatch()

    const onFinish = (values) => {
        console.log(values)
        dispatch(login(values.username, values.password))
    }

    return (
        <div className="Auth">
            <h1>Авторизация</h1>
            <div className="auth__description">
                <h2>Войдите, чтобы пользоваться облачным хранилищем</h2>
            </div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Пожалуйста, введите ваше имя' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имя" autoComplete="true" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста, введите пароль' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Пароль"
                        autoComplete="true"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Запомнить</Checkbox>
                    </Form.Item>

                    <Link to="/forgot-password" className="login-form-forgot">
                        Забыли пароль?
                    </Link>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Войти
                    </Button>
                    <span> или <Link to="/register">зарегистрируйтесь</Link></span>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Authorization