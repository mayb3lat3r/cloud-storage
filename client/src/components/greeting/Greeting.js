import React from 'react'
import { Carousel } from 'antd'

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    overflow: 'hidden',


}

const Greeting = () => {
    return (
        <div>
            <div className="greet__title">
                <h1>Hello!</h1>
            </div>
            <div className="greet__description">
                <h2>This is a simple cloud storage. Powered uses MERN stack</h2>
            </div>

            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>Хранение данных до 10GB</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Быстрая поддержка</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>И еще полно всяких плюсов</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Не верите? Проверьте!</h3>
                </div>
            </Carousel>
        </div>
    )
}

export default Greeting