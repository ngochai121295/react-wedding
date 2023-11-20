import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './card-content.css'

import img_button_back from '../assets/img_button_back.svg'
import bg_card_cover from '../assets/bg_card_cover.png'
import img_main_card_cover from '../assets/bg_card_cover_22.jpg'
import title_center_card_cover from '../assets/title_center_card_cover.png'
import img_kiss_card_cover from '../assets/img_kiss_card_cover.png'
import img_heart_card_cover from '../assets/img_heart_card_cover.png'
import title_invite_card_cover from '../assets/title_invite_card_cover.png'

import img_button_next from '../assets/img_button_next.svg'

function CardCover() {
    const navigation = useNavigate()
    const routeParams = useParams()

    const _onClickButtonNext = () => {
        navigation(
            `/card-content/${routeParams.name}/${routeParams.type || ''}`
        )
    }

    const _onClickButtonBack = () => {
        navigation(-1)
    }

    return (
        <div className="App" style={{ position: 'relative' }}>
            <div
                style={{
                    backgroundImage: `url(${bg_card_cover})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    // overflow: 'hidden',
                    width: '600px',
                    maxWidth: "520px",
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
                        style={{
                            width: '150px',
                            height: '200px',
                            zIndex: 1,
                            marginTop: '-60px',
                            
                        }}
                    />
                </div>

                <div
                    style={{
                        width: '100%',
                        height: '100vh',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${img_main_card_cover})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 540,
                            left: 170,
                            right: 0,
                            bottom: 0,
                            zIndex: 2,
                        }}
                    >
                    <p
                        style={{
                            fontFamily: 'cursive',
                            fontSize: '24px',
                            marginTop: '8px',
                            color: 'pink',
                            textAlign: 'center',
                            textDecoration: 'underline',
                            textDecorationStyle: 'dotted',
                            textUnderlineOffset: '12px',
                        }}
                    >
                        
                        {routeParams.name}
                        </p>
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: -20,
                            zIndex: 2,
                        }}
                    >
                        <img
                            src={img_button_next}
                            onClick={_onClickButtonNext}
                            alt=""
                            style={{
                                width: '150px',
                                height: '200px',
                                zIndex: 1,
                                marginBottom: '-60px',

                            }}
                        />
                    </div>
                </div>
                <div
                    style={{
                        // backgroundImage: `url(${img_main_card_cover})`,
                        // backgroundRepeat: 'no-repeat',
                        // backgroundPositionY: '-30px',
                        // backgroundPositionX: 'center',
                        // backgroundSize: 'contain',
                        width: '100%',
                        height: 'auto',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/* <div
                        style={{
                            backgroundImage: `url(${title_center_card_cover})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: '100vw',
                            height: '100px',
                            marginTop: '27vh',
                        }}
                    /> */}


                    <div
                        style={{
                            position: 'relative',
                            marginTop: '-90px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src={img_kiss_card_cover}
                            alt=""
                            style={{
                                width: '290px',
                                height: '280px',
                                zIndex: 1,
                                marginTop: '8px',
                                display: 'none',
                            }}
                        />
                        <img
                            src={img_heart_card_cover}
                            alt=""
                            style={{
                                width: '93px',
                                height: '93px',
                                zIndex: 2,
                                position: 'absolute',
                                marginRight: '30px',
                                marginTop: '70px',
                                display: 'none',
                            }}
                        />
                    </div>

                    <img
                        src={title_invite_card_cover}
                        alt=""
                        style={{
                            width: '160px',
                            height: '40px',
                            marginTop: '330px',
                            display: 'none'
                        }}
                    />

                   
                </div>
            </div>
        </div>
    )
}

export default CardCover
