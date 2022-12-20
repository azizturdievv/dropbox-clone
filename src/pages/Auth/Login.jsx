import React, { useRef } from 'react'
import { useAuth } from '~/hooks/AuthContext';
import AuthContainer from '~/container/AuthContainer';
import { Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {

    const emailRef = useRef();
    const pwdRef = useRef();
    const history = useHistory();

    const { login } = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(emailRef.current.value, pwdRef.current.value)
            await history.push('/')
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <AuthContainer>            
            <div className='text-center border p-4 rounded' style={{width: "474px", margin: "0 auto", backgroundColor: "info"}}>
                <h3 className='font-black mb-5'>Login </h3>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{marginRight: "310px"}} >Email address</Form.Label>
                        <Form.Control style={{width: "400px"}} type="email" ref={emailRef} placeholder="Enter email" autoComplete='off' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{marginRight: "340px"}}>Password</Form.Label>
                        <Form.Control style={{width: "400px"}} type="password" ref={pwdRef} placeholder="Password" autoComplete='off' required />
                    </Form.Group>
                    <Button className='mb-3' variant="primary" type="submit">
                        Login
                    </Button>
                    <Form.Text className="text-muted d-block">
                        Need an account? <Link to="/sign-up" className='fst-italic text-decoration-underline'>SignUp</Link>
                    </Form.Text>
                </Form>
            </div> 
        </AuthContainer>
    )
}
