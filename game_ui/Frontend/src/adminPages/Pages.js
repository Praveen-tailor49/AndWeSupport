import React from 'react'
import AdminBackNav from '../adminComponent/AdminBackNav';
import { Form, Button } from 'react-bootstrap';
import RichTextEditor from 'react-rte';

const Pages = () => {
    return (
        <>
            <AdminBackNav />

            <div style={{ padding: '50px', boxShadow: '0px 0px 5px 1px #888888' }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Page Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Page Heading</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Page Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                    </Form.Group>

                    {/* <RichTextEditor  */}
                        {/* // value={value}
                        // onChange={onChange} */}
                    {/* /> */}

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Page Explain Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Pages