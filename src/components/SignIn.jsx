import React, { useState} from'react';
import { PageHeader, Input, Button } from 'antd';
import { auth } from '../../firebase';

const SignIn = (props) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (event) => setEmail(event.target.value);
    const onPasswordChange = (event) => setPassword(event.target.value);

    const onSignIn = () => {
        console.log('SIGN IN!', email, password);
            auth.signInWithEmailAndPassword(email, password)
            .then(function(result) {
                console.log('User signed in!')
            }).catch(function(error) {
               console.log('There was an error signing in', error)
            });
        
        setEmail('');
        setPassword('');
    }   

    return(
        <div className="sign_up_container">
            <div className='page_heaer_container'>
                <PageHeader
                    style={{border: '1px solid rgb(235, 237, 240)'}}
                    title="Sign In"
                />
            </div>
            <div className="sign_up_container_inputs" style={{marginTop: '20px'}}>
                <div className="post_input_title">
                    <h2>Email</h2>
                </div>

                <div className="post_input">
                    <Input placeholder="Email" onChange={onEmailChange}/>
                </div>
                <div className="post_input_title">
                    <h2>Password</h2>
                </div>

                <div className="post_input">
                    <Input.Password placeholder="Password" onChange={onPasswordChange}/>
                </div>
                <div style={{with: '100%'}}>
                    <div>
                        <a href="a">Don't have an account, Sign Up</a>
                    </div>
                    <div className="post_input_button">
                        <Button type="primary" size="large" onClick={onSignIn}>Sign In</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;