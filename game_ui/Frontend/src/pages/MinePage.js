import React from 'react'
import { Navbar } from 'react-bootstrap';
import { BiRupee } from 'react-icons/bi';
import MineDropdown from '../components/MineDropdown';
import Footer from '../components/Footer';


const MinePage = () => {
    return (
        <>
            <div>
                <Navbar bg="primary" variant="dark">
                    <div>
                        <Navbar.Brand style={{ marginLeft: '30px' }}>Mine</Navbar.Brand>
                    </div>

                    {/* <div style={{ display: 'flex', justifyContent: 'flex-end', color: 'white' }} >
                        <div>
                            <BsFiles />
                        </div>
                        <div>
                            <FiMenu />
                        </div>
                    </div> */}
                </Navbar>
            </div>

            <div style={{ backgroundColor: '#DCDCDC	' }}>
                <div style={{ padding: '30px' }}>
                    <div>
                        <h6>ID: 102240</h6>
                    </div>
                    <div>
                        <h6>Mobile: +919856231485</h6>
                    </div>
                    <div>
                        <h6>Nick Name: MemberB2K32FCH</h6>
                    </div>
                    <div>
                        <h6>Available balance: <BiRupee /> 0.00</h6>
                    </div>
                </div>
            </div>
            
            <MineDropdown/>

            <Footer/>
           
        </>
    )
}

export default MinePage