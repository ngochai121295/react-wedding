import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './card-detail.css'

import img_button_back from '../assets/img_button_back.svg'
import img_card_detail_1 from '../assets/img_card_detail_1.png'
import img_card_detail_2 from '../assets/img_card_detail_2.png'

import img_fly_ball from '../assets/img_fly_ball.png'

function CardDetail() {
    const navigation = useNavigate()
    const routeParams = useParams()

    const _onClickButtonBack = () => {
        navigation(-1)
    }

    return (
        <div className="App">
            <div
                style={{
                    width: '100vw',
                    maxWidth: '420px',
                    background: `linear-gradient(#FFFFFF, rgba(247, 239, 236, 1))`,
                    position: 'relative',
                    height:'680px',
                }}
            >
                {/* Button back */}
                <div
                    style={{
                        backgroundImage: `url(${img_button_back})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPositionX: 'center',
                        width: '130px',
                        height: '110px',
                        zIndex: 2,
                    }}
                    onClick={_onClickButtonBack}
                ></div>

                <div style={{ height: "100vh" }}>
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
                            zIndex: 1,
                        }}
                    />

                    <div
                        style={{
                            backgroundImage: `url(${img_card_detail_1})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPositionX: 'center',
                            width: '100%',
                            height: '280px',
                            zIndex: 2,
                            display: 'none',
                        }}
                    />
                    {/*<div style={{ marginTop: '8px' }}>*/}
                    {/*    <p*/}
                    {/*        style={{*/}
                    {/*            textAlign: 'center',*/}
                    {/*            fontFamily: 'Macondo-Regular',*/}
                    {/*            fontSize: '16px',*/}
                    {/*            marginBottom: '0px',*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        TRÂN TRỌNG KÍNH MỜI*/}
                    {/*    </p>*/}
                    {/*    <p*/}
                    {/*        style={{*/}
                    {/*            fontFamily: 'Macondo-Regular',*/}
                    {/*            fontSize: '24px',*/}
                    {/*            color: '#9A6459',*/}
                    {/*            textAlign: 'center',*/}
                    {/*            marginBottom: '8px',*/}
                    {/*            textDecoration: 'underline',*/}
                    {/*            textDecorationStyle: 'dotted',*/}
                    {/*            textUnderlineOffset: '8px',*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        {routeParams.name}*/}
                    {/*    </p>*/}
                    {/*</div>*/}

                    <div
                        style={{
                            backgroundImage: `url(${img_card_detail_2})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPositionX: 'center',
                            width: '100%',
                            height: '550px',
                            zIndex: 2,
                        }}
                    />
                    {/* <img
                    src={img_card_detail_2}
                    style={{
                        width: '100%',
                        marginRight: '8px',
                        height: '350px',
                    }}
                /> */}
                </div>
            </div>
        </div>
    )
}

export default CardDetail
