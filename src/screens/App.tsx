import React, { useEffect, useState } from 'react'
import './App.css'
import Heart from '../components/Heart'
import { useNavigate, useParams } from 'react-router-dom'

import img_chong from '../assets/img_chong.png'
import img_cout from '../assets/img_cout.png'
import img_dilay_1 from '../assets/img_dilay_1.png'
import img_nhaco_1 from '../assets/img_nhaco_1.png'
import img_couple_1 from '../assets/img_couple_1.png'
import img_heart_1 from '../assets/img_heart_1.png'

import img_vo_2 from '../assets/img_vo_2.png'
import img_nhaco_2 from '../assets/img_nhaco_2.png'
import img_dilay_2 from '../assets/img_dilay_2.png'
import img_cauca from '../assets/img_cauca.png'
import img_couple_2 from '../assets/img_couple_2.png'

import bg_2 from '../assets/bg_2.png'
import img_button_next from '../assets/img_button_next.svg'

function App() {
    const numHearts = 30
    const navigate = useNavigate()
    const routeParams = useParams()
    const [hearts, setHearts] = useState<any>([])
    const [coupleType, setCoupleType] = useState<any>(1)

    useEffect(() => {
        const heartInterval = setInterval(() => {
            if (hearts.length < numHearts) {
                setHearts([
                    ...hearts,
                    <Heart
                        key={hearts.length}
                        position={`${Math.random() * 100}%`}
                        delay={Math.random() * 5}
                        distance={window.innerHeight}
                    />,
                ])
            } else {
                clearInterval(heartInterval)
            }
        }, 50)

        return () => clearInterval(heartInterval)
    }, [hearts])

    const _onClickButtonNext = () => {
        if (coupleType === 1) {
            setCoupleType(2)
        } else {
            navigate(`/card-cover/${routeParams.name}/${routeParams.type || ""}`)
        }
    }

    return (
        <div
            className="App"
            style={{
                backgroundColor: coupleType === 1 ? '#FCEDEA' : '#FCEDEA',
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                }}
            >
                {/* Image text "Nhà Có" */}
                {coupleType === 1 ? (
                    <div
                        style={{
                            // width: '164px',
                            // height: '76px',
                            width: '100px', // 100
                            height: '50px',
                            marginLeft: '35px',
                            backgroundImage: `url(${img_nhaco_1})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            marginTop: '20px',
                        }}
                        className="moving-text-from-left"
                    />
                ) : (
                    <div
                        style={{
                            width: '100px',
                            height: '59px',
                            backgroundImage: `url(${img_nhaco_2})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            marginTop: '20px',
                            alignSelf: 'center',
                        }}
                        className="moving-text-from-left"
                    />
                )}

                {/* Image text "Cô Út" */}
                {coupleType === 1 ? (
                    <div
                        style={{
                            width: '120px', //120
                            height: '124.88px',
                            backgroundImage: `url(${img_cout})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            alignSelf: 'center',
                            marginTop: '-20px',
                        }}
                        className="moving-text-from-top"
                    />
                ) : (
                    <div
                        style={{
                            width: '180px',
                            height: '102px',
                            backgroundImage: `url(${img_cauca})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            alignSelf: 'center',
                            marginTop: '-24px',
                            zIndex: 2,
                        }}
                        className="moving-text-from-top"
                    />
                )}

                {/* Image text "Đi lấy" */}
                {coupleType === 1 ? (
                    <div
                        style={{
                            width: '90px',
                            height: '61px',
                            backgroundImage: `url(${img_dilay_1})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            alignSelf: 'flex-end',
                            marginTop: '-80px',
                            marginRight: '20px',
                        }}
                        className="moving-text-from-right"
                    />
                ) : (
                    <div
                        style={{
                            width: '90px',
                            height: '61px',
                            backgroundImage: `url(${img_dilay_2})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            marginTop: '-60px',
                            marginLeft: '35px',
                            zIndex: 2,
                        }}
                        className="moving-text-from-right"
                    />
                )}

                {/* Image text "Chồng" */}
                {coupleType === 1 ? (
                    <div
                        style={{
                            width: '260px', // 280
                            height: '130px',
                            backgroundImage: `url(${img_chong})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            marginTop: '-40px',
                            alignSelf: 'center',
                        }}
                        className="moving-text-from-bottom"
                    />
                ) : (
                    <div
                        style={{
                            width: '140px',
                            height: '145px',
                            backgroundImage: `url(${img_vo_2})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            marginTop: '-30px',
                            marginLeft: '90px',
                            alignSelf: 'center',
                            zIndex: 2,
                        }}
                        className="moving-text-from-bottom"
                    />
                )}

                {/* Image couple */}
                <div
                    style={{
                        alignSelf: 'center',
                        marginTop: '-70px',
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                    }}
                    className="scaling-image"
                >
                    {coupleType === 1 ? (
                        <div
                            style={{
                                width: '300px', // 300
                                height: '390px',
                                marginLeft: '80px',
                                backgroundImage: `url(${img_heart_1})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain',
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                zIndex: 1,
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                width: '100%', // 300
                                height: 'auto',
                                backgroundImage: `url(${bg_2})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                position: 'absolute',
                                top: -170,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                zIndex: 1,
                            }}
                        />
                    )}

                    <div
                        style={{
                            width: '380px', // 380
                            height: '410px',
                            marginTop: coupleType === 1 ? '30px' : '15px',
                            marginLeft: '8px',
                            backgroundImage: `url(${
                                coupleType === 1 ? img_couple_1 : img_couple_2
                            })`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            position: 'relative',
                            zIndex: 2,
                        }}
                    />
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        backgroundColor: '#FCEDEA',
                        marginTop: coupleType === 1 ? '-80px' : '-85px',
                        zIndex: 2,
                    }}
                >
                    <img
                        src={img_button_next}
                        onClick={_onClickButtonNext}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default App
