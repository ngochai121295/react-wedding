import React, { useState } from 'react'
import Container from '../components/Container'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import firebase from '../libs/firebase'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './payment.css'

import img_button_back from '../assets/img_button_back.svg'
import img_fly_ball from '../assets/img_fly_ball.png'
import payment_vcb from '../assets/payment_vcb.png'
import payment_vcb_tuan from '../assets/vpbank.jpg'
import logo_momo from '../assets/logo_momo.svg'
import logo_vcb from '../assets/logo_vcb.webp'
import logo_vp from '../assets/logo_vp.png'
import chevron_forward from '../assets/chevron-forward-outline.svg'
import checkmark_circle_outline from '../assets/checkmark-circle-outline.svg'
import copy_outline from '../assets/copy-outline.svg'
import img_thank_you from '../assets/img_thank_you.png'

function Payment() {
    const navigation = useNavigate()
    const routeParams = useParams()
    const db = getFirestore(firebase)

    const [copied, setCopied] = useState<boolean>(false)
    const [wish, setWish] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const _onClickButtonBack = () => {
        navigation(-1)
    }

    const _onClickMoMoPayment = () => {
        window.open(
            routeParams.type
                ? 'https://me.momo.vn/ReI4uZIkuNslC3iRuaul'
                : 'https://me.momo.vn/ReI4uZIkuNslC3iRuaul'
        )
    }

    const _onClickCopyVCB = () => {
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 3000)
        const numberPayment = routeParams.type
            ? '109695858'
            : '04006238801'
        if (navigator.clipboard) {
            navigator.clipboard.writeText(numberPayment)
        } else {
            alert(numberPayment)
        }
    }

    const _onClickSentWish = async () => {
        // Add a new message to the "messages" node
        if (!wish) {
            toast.warning('Bạn hãy nhập lời chúc trước khi gửi nhé!', {
                position: toast.POSITION.TOP_CENTER,
            })
            return
        }
        setLoading(true)
        await addDoc(collection(db, 'wish'), {
            message: wish,
            guest_name: routeParams.name,
        })
        setLoading(false)
        toast.success('Cảm ơn bạn đã gửi lời chúc tới chúng mình!', {
            position: toast.POSITION.TOP_CENTER,
        })
        setWish('')
    }

    const handleWishChange = (event: any) => {
        // 👇️ access textarea value
        setWish(event.target.value)
    }

    return (
        <div className="App">
            <Container
                style={{
                    background: `linear-gradient(#FFFFFF, rgba(247, 239, 236, 1))`,
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

                <div
                    style={{
                        backgroundImage: `url(${routeParams.type ? payment_vcb_tuan : payment_vcb})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        width: '180px',
                        height: '500px',
                        marginTop: '80px',
                        alignSelf: 'center',
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        marginLeft: '25px',
                        marginRight: '25px',
                        marginBottom: '4px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 4,
                        borderWidth: '0.5px',
                        borderStyle: 'solid',
                        borderColor: '#dedede',
                        padding: '8px',
                        backgroundColor: '#fff',
                    }}
                    onClick={_onClickCopyVCB}
                >
                    <img
                        src={routeParams.type ? logo_vp :logo_vcb}
                        style={{ width: '40px', height: '40px' }}
                    />
                    <span
                        style={{
                            display: 'flex',
                            flex: 1,
                            marginLeft: '8px',
                            fontSize: '14px',
                        }}
                    >
                        Copy số tài khoản 
                    </span>
                    <img
                        src={copied ? checkmark_circle_outline : copy_outline}
                        style={{
                            width: '24px',
                            height: '24px',
                            fill: copied ? 'green' : undefined,
                        }}
                    />
                </div>
                {/* MoMo payment */}
                <div
                    style={{
                        display: 'flex',
                        marginLeft: '25px',
                        marginRight: '25px',
                        marginBottom: '12px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 4,
                        borderWidth: '0.5px',
                        borderStyle: 'solid',
                        borderColor: '#dedede',
                        padding: '8px',
                        backgroundColor: '#fff',
                    }}
                    onClick={_onClickMoMoPayment}
                >
                    <img
                        src={logo_momo}
                        style={{ width: '40px', height: '40px' }}
                    />
                    <span
                        style={{
                            display: 'flex',
                            flex: 1,
                            marginLeft: '8px',
                            fontSize: '14px',
                        }}
                    >
                        Chuyển khoản bằng MoMo
                    </span>
                    <img
                        src={chevron_forward}
                        style={{ width: '24px', height: '24px' }}
                    />
                </div>

                <span
                    style={{
                        fontStyle: 'italic',
                        marginLeft: '25px',
                        marginRight: '25px',
                        fontSize: '12px',
                    }}
                >
                    Hãy gửi lời chúc tới chúng mình
                </span>
                <textarea
                    style={{
                        marginLeft: '25px',
                        marginRight: '25px',
                        borderColor: '#dedede',
                        borderRadius: '4px',
                        height: '130px',
                    }}
                    onChange={handleWishChange}
                ></textarea>

                <Button
                    style={{
                        margin: '8px',
                        backgroundColor: '#B9948D',
                        borderWidth: 0,
                        width: '200px',
                        alignSelf: 'center',
                        fontSize: '14px',
                    }}
                    disabled={loading}
                    onClick={!loading ? _onClickSentWish : () => null}
                >
                    {loading ? '...' : 'Gửi lời chúc!'}
                </Button>
                <div
                    style={{
                        backgroundImage: `url(${img_thank_you})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        width: '100vw',
                        height: '185px',
                        marginLeft: '16px',
                        marginRight: '16px',
                        backgroundPosition: 'center',
                    }}
                />
            </Container>
            <ToastContainer autoClose={3000} />
        </div>
    )
}

export default Payment
