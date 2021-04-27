import React, {useState} from'react';
import { PageHeader, Input, Button } from 'antd';
import { auth } from '../../firebase';

const SignUp = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (event) => setEmail(event.target.value);
    const onPasswordChange = (event) => setPassword(event.target.value);

    const onSignUp = () => {
        console.log('SIGN UP!', email, password);
        auth.createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                console.log('Error in Sign Up', err)
            });
        
        setEmail('');
        setPassword('');
    }

    return(
        <div className="sign_up_container">
            <div className='page_heaer_container'>
                <PageHeader
                    style={{border: '1px solid rgb(235, 237, 240)'}}
                    title="Sign Up"
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
                <div style={{width: '100%'}}>
                    <div>
                        <a href="a">Already have an account, Sign In</a>
                    </div>
                    <div className="post_input_button">
                        <Button type="primary" size="large" onClick={onSignUp}>Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;