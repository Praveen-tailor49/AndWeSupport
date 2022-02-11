import React from 'react'
import { Table } from 'react-bootstrap';
import { AiFillTrophy } from 'react-icons/ai';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';

const TableWin = () => {
    return (
        <>
            <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                <div>
                    < AiFillTrophy />
                </div>
                <div>
                    <h6>Partiy Record</h6>
                </div>
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Period</th>
                            <th>Price</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>85555</td>
                            <td><span style={{background:'red', borderRadius:'30px 30px', color:'red'}}><RiCheckboxBlankCircleLine/></span></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td><span style={{background:'green', borderRadius:'30px 30px', color:'green'}}><RiCheckboxBlankCircleLine/></span></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default TableWin