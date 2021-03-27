
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import React, { useState } from 'react'


const ContactUs = (props) => {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [comments, setComments] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [output, setOutput] = useState(undefined);

    const registerUser = async event => {

        event.preventDefault()

        const res = await fetch('/api/contactus', {
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                comments: comments,
                phoneNumber: phoneNumber,
                email: email
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const result = await res.json()
        // result.user => 'Ada Lovelace'
    }

    return (
        <>
        <div className={"row"}>
        <div className={"col-md-12"}>
        <Form onSubmit={registerUser}>
            <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={lastName} placeholder="Last Name" onChange={e => setLastName(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" onChange={e => setPhoneNumber(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formComments">
                <Form.Label>Comments</Form.Label>
                <Form.Control type="text" placeholder="Comments" onChange={e => setComments(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Send
  </Button>
        </Form>
        </div>
        </div>

        <div>{output}</div>
     </>
    )
}

export { ContactUs }