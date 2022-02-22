import React, { useState } from 'react'
import { BiRupee, BiRefresh } from 'react-icons/bi';
import { AiFillTrophy } from 'react-icons/ai';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import { Button, Container, Card } from 'react-bootstrap';
// import ModalWin from '../components/ModalWin';
import ModalReadRule from '../components/ModalReadRule';
import { Link } from 'react-router-dom'
import coin1 from '../image/coins-img/coin-1.png'
import coin2 from '../image/coins-img/coin-2.png'
import coin3 from '../image/coins-img/coin-3.png'
import coin4 from '../image/coins-img/coin-4.png'
import coin5 from '../image/coins-img/coin-5.png'
import coin6 from '../image/coins-img/coin-6.png'
import coin7 from '../image/coins-img/coin-7.png'
import coin8 from '../image/coins-img/coin-8.png'
import coin10 from '../image/coins-img/coin-10.png'
// import custom from '../image/coins-img/coin-custom.png'
import card1 from '../image/cards/card-1.png'
import card2 from '../image/cards/card-2.png'
import card3 from '../image/cards/card-3.png'
import ModalRupesSelect from '../components/ModalRupesSelect';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WinTwo = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [valueRupess, setValueRupess] = useState('');
    const [cardValue, setCardValue] = useState('');
    const [showModal, setShowModal] = useState(false);



    const showDiv = (val) => {

        if (val === 'A') {
            document.getElementById('A').style.boxShadow = '0px 0px 30px 2px  #2861C6';
        } else {
            document.getElementById('A').style.boxShadow = '1px 1px gray';
        }

        if (val === 'B') {
            document.getElementById('B').style.boxShadow = '0px 0px 30px 2px  #E0422D';
        } else {
            document.getElementById('B').style.boxShadow = '1px 1px gray';
        }

        if (val === 'T') {
            document.getElementById('T').style.boxShadow = '0px 0px 30px 2px  #1A7F14';
        } else {
            document.getElementById('T').style.boxShadow = '1px 1px gray';
        }

        setCardValue(val)
    }

    const showModal2 = (val) => {
        if (cardValue) {
            setModalShow2(true)
            setValueRupess(val)
            setShowModal(false)
        } else {
            toast.error('Please Select a Card First. From A/B/T', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <>
            <div style={{ backgroundColor: '#1E90FF', color: 'white' }}>
                <p style={{ padding: '30px' }}>You can only withdraw cash after your bet amount recharge the top-up amount. For example, if you recharge 200rs, you can withdraw money only after your accumulated bet amountreaches 200rs. Our withdrawal time is 10:00-22:00, other time will not provide withdrawal services. </p>
            </div>
            <div style={{ backgroundColor: '#6495ED', color: 'white', marginTop: '-16px' }}>
                <div>
                    <h6 style={{ padding: '20px' }}>Available balance: 0.00 <BiRupee /></h6>
                </div>

                <div style={{ display: 'flex', padding: '10px', justifyContent: 'center' }}>
                    <div >
                        <Link to='/recharge'><Button variant="primary">Recharge</Button></Link>
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <Button variant="light" onClick={() => setModalShow1(true)}>Read Rule</Button>
                    </div>

                    <div style={{ fontSize: '20px', marginLeft: '40px' }}>
                        <BiRefresh />
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#DCDCDC	' }}>
                <div style={{ display: 'flex', padding: '10px', justifyContent: 'center' }}>
                    <div>
                        <AiFillTrophy />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <h6>Period</h6>
                        <h4>20220210208</h4>
                    </div>

                    <div style={{ marginLeft: '55px' }}>
                        <h6>Count Down</h6>
                        <h4>02:49</h4>
                    </div>
                </div>


                <div style={{ display: "flex", justifyContent: 'center', borderRadius: "25px" }}>
                    <CardDiv style={{
                        width: '58rem', height: "15rem", backgroundColor: "green", borderRadius: "25px",
                        border: "5px solid #e4d00a", marginBottom: "5px"
                    }}><div className='main1' style={{height: "1.5rem", borderRadius: "25px 26px 0px 0px", backgroundColor: "darkgreen", display: "flex", justifyContent: "space-between" }} >
                        <div style={{display:'flex'}}>

                            <div style={{ color: "white", marginLeft: "5px", Color: "goldenrod" }}><HiOutlineCurrencyRupee />0</div>
                            {/* <div style={{ color: "white", marginRight: "8px" }}>Can bet:415710624</div> */}
                        </div></div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "gray", fontSize: "40px" }} >TIE</div>
                        <Card.Img variant="top" src="" />

                    </CardDiv>

                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <CardDiv style={{
                        width: '29rem', height: "15rem", borderRadius: "25px 25px 25px 180px", backgroundColor: "blue",
                        border: "5px solid #e4d00a", marginRight: "4px", marginBottom: "10px"
                    }}><div style={{  height: "1.5rem", borderRadius: "25px 26px 0px 0px", backgroundColor: "darkblue", display: "flex", justifyContent: "space-between" }}>
                        <div style={{display:'flex'}}>

                            <div style={{ color: "white", marginLeft: "5px" }}><HiOutlineCurrencyRupee />0</div>
                            {/* <div style={{ color: "white", marginRight: "8px" }}>Can bet:415710624</div> */}
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "gray", fontSize: "40px" }} >Andar</div>
                        <Card.Img variant="top" src="" />

                    </CardDiv>
                    <CardDiv style={{
                        width: '29rem', height: "15rem", borderRadius: "25px 25px 180px 25px",
                        backgroundColor: "red",
                        border: "5px solid #e4d00a"
                    }}><div style={{  height: "1.5rem", borderRadius: "25px 26px 0px 0px", backgroundColor: "darkred", display: "flex", justifyContent: "space-between" }}>
                        <div  style={{display:'flex'}}>

                        <div style={{ color: "white", marginLeft:'5px' }}><HiOutlineCurrencyRupee />0</div>
                        {/* <div style={{ color: "white", marginRight: "8px" }}>Can bet:415710624</div> */}
                        </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "gray", fontSize: "40px" }} >Bahar</div>
                        <Card.Img variant="top" src="" />

                    </CardDiv>
                </div>


            </div>

            <CoinDiv>
                <Container>
                    <CoinCnterDiv>
                        <div >
                            <img src={coin10} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#AAA64D' }} alt='coin10' onClick={() => showModal2('10')} />
                        </div>
                        <div >
                            <img src={coin1} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#F6B527' }} alt='coin1' onClick={() => showModal2('100')} />
                        </div>
                        <div >
                            <img src={coin2} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#ED1F57' }} alt='coin2' onClick={() => showModal2('500')} />
                        </div>
                        <div >
                            <img src={coin3} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#BB4D9D' }} alt='coin3' onClick={() => showModal2('1000')} />
                        </div>
                        <div >
                            <img src={coin4} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#7153A3' }} alt='coin4' onClick={() => showModal2('3000')} />
                        </div>
                        <div >
                            <img src={coin5} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#443292' }} alt='coin5' onClick={() => showModal2('5000')} />
                        </div>
                        <div >
                            <img src={coin6} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#10B99D' }} alt='coin6' onClick={() => showModal2('10000')} />
                        </div>
                        <div >
                            <img src={coin7} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#6CBD45' }} alt='coin7' onClick={() => showModal2('20000')} />
                        </div>
                        <div >
                            <img src={coin8} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#E16926' }} alt='coin8' onClick={() => showModal2('30000')} />
                        </div>

                        {/* <div >
                            <img src={custom} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#AAA64D' }} alt='coin8' onClick={() => setModalShow(true)} />
                        </div> */}

                    </CoinCnterDiv>
                </Container>
            </CoinDiv>

            {/* <ModalWin
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}

            <ModalReadRule
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />

            <ModalRupesSelect
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                value={valueRupess}
                cardValue={cardValue}
                showModal={showModal}
            />

            <ToastContainer />
        </>
    )
}

export default WinTwo


const CardDiv = styled(Card)`
@media screen and (max-width: 468px) {
    height: 9rem !important;
  }

`;

const CardImg = styled.img`
box-shadow: 1px 1px gray;
width: 5rem; 
border-radius: 0.5rem;

@media screen and (min-width: 768px) {
    width: 12rem; 
  }

`;

const CardStyle = styled.div`
@media screen and (max-width: 468px) {
    width: 12rem !importent; 
  }
`;

const CoinDiv = styled.div`
display: block;
`;

const CoinCnterDiv = styled.div`

display: grid; 
grid-template-columns: repeat(auto-fill, 70px); 
justify-items: center; 
grid-gap: 35px; 
padding: 1rem;
@media screen and (min-width: 968px) {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 440px) {
    grid-gap: 26px;
    margin-left:30px
  }

 @media screen and (max-width: 335px) {
    grid-gap: 20px;
  }
`;