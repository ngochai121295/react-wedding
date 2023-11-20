import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'

import './card-content.css'

import img_button_back from '../assets/img_button_back.svg'
import img_item_card_content_1 from '../assets/img_item_card_content_1.png'
import img_item_card_content_2 from '../assets/img_item_card_content_2.png'
import img_item_card_content_3 from '../assets/img_item_card_content_3.png'
import img_item_card_content_4 from '../assets/img_item_card_content_4.png'
import img_item_card_content_5 from '../assets/img_item_card_content_5.png'
import img_thank_card_content from '../assets/img_thank_card_content.png'

import img_fly_ball from '../assets/img_fly_ball.png'

import carousel_1 from '../assets/carousel_1.png'
import carousel_2 from '../assets/carousel_2.png'
import carousel_3 from '../assets/carousel_3.png'
import carousel_4 from '../assets/carousel_4.png'
import { useNavigate, useParams } from 'react-router-dom'

const items = [
    {
        id: 1,
        image: carousel_1,
        caption: 'First slide',
    },
    {
        id: 2,
        image: carousel_2,
        caption: 'Second slide',
    },
    {
        id: 3,
        image: carousel_3,
        caption: 'Third slide',
    },
    {
        id: 4,
        image: carousel_4,
        caption: 'Four slide',
    },
]

function CarouselComponent() {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex)
    }

    return (
        <div style={{ width: "100%" }}>
            <Carousel
                controls={false}
                indicators={false}
                activeIndex={index}
                onSelect={handleSelect}
                interval={3000}
            >
                {items.map((item) => (
                    <Carousel.Item key={item.id}>
                        <div
                            style={{
                                width: '100%',
                                height: '200px',
                                marginTop: '100px',
                                alignSelf: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundImage: `url(${item.image})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                            }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

function CardContent() {
    const navigation = useNavigate()
    const routeParams = useParams()

    const _onClickButtonBack = () => {
        navigation(-1)
    }

    const _onClickCardInvite = () => {
        navigation(`/card-detail/${routeParams.name}/${routeParams.type || ''}`)
    }

    const _onClickCardPayment = () => {
        navigation(`/payment/${routeParams.name}/${routeParams.type || ""}`)
    }

    const _onClickCardImage = () => {
        // https://me.momo.vn/levi95
        window.open(
            'https://drive.google.com/drive/folders/1v859kmOTqXHkRd2xfnrVhOwe01TK2LtE?usp=sharing'
        )
    }

    const _onClickMap = () => {
        window.open('https://www.google.com/maps/place/Queen+Plaza+K%E1%BB%B3+Ho%C3%A0/@10.77436,106.6708023,15z/data=!4m6!3m5!1s0x31752ed95e43c5bb:0xf49973030574f2c2!8m2!3d10.77436!4d106.6708023!16s%2Fg%2F11bz149j9y?entry=ttu')
    }

    const _onClickVideoImage = () => {
        window.open('https://www.youtube.com/watch?v=IHiaOJrXZDw')
    }

    return (
        <div className="App">
            <div
                style={{
                    height: '100%',
                    background: `linear-gradient(#FFFFFF, rgba(247, 239, 236, 1))`,
                    position: 'relative',
                }}
            >
                {/* Button back */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 2,
                    }}
                >
                    <img
                        src={img_button_back}
                        onClick={_onClickButtonBack}
                        alt=""
                    />
                </div>

                <div
                    style={{
                        backgroundImage: `url(${img_fly_ball})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        position: 'absolute',
                        top: '40px',
                        right: 0,
                        width: '70px',
                        height: '200px',
                    }}
                />

                {/* Image main top */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <CarouselComponent />
                </div>

                <div style={{ display: 'flex', flex: 1, padding: '8px' }}>
                    <img
                        src={img_item_card_content_1}
                        alt=""
                        style={{
                            flex: 1,
                            width: '42%',
                            height: 'auto',
                            marginRight: '8px',
                            cursor: 'pointer',
                        }}
                        onClick={_onClickCardInvite}
                    />
                    <img
                        src={img_item_card_content_2}
                        alt=""
                        style={{ flex: 1, width: '42%', height: 'auto' }}
                        onClick={_onClickCardImage}
                    />
                   
                </div>
                <div style={{ display: 'flex', flex: 1, padding: '8px',height:'400px' }}>
                    <img
                        src={img_item_card_content_5}
                        alt=""
                        style={{ flex: 1, width: '42%', height: 'auto' }}
                        onClick={_onClickVideoImage}
                    />
                </div>

                <div
                    style={{
                        display: 'flex',
                        flex: 1,
                        paddingLeft: '8px',
                        paddingRight: '8px',
                        alignItems: 'center',
                        overflow: 'hidden',
                        paddingBottom: '8px',
                    }}
                >
                    <img
                        src={img_item_card_content_3}
                        alt=""
                        style={{
                            flex: 1,
                            width: '42%',
                            height: 'auto',
                            marginRight: '8px',
                            cursor: 'pointer',
                        }}
                        onClick={_onClickCardPayment}
                    />
                    <img
                        src={img_item_card_content_4}
                        alt=""
                        style={{ flex: 1, width: '42%', height: 'auto' }}
                        onClick={_onClickMap}
                    />
                    {/* <img
                        src={img_thank_card_content}
                        alt=""
                        style={{
                            flex: 1,
                            width: '42%',
                            height: 'auto',
                        }}
                        onClick={_onClickMap}
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default CardContent
