import React, { useState } from 'react';
import { Router } from "@reach/router";
import Posts from './Posts';
import Post from './Post';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AppNav from './AppNav';
import { auth } from '../../firebase';

export default function App(props) {

    const [user, setUser] = useState(false);

    auth.onAuthStateChanged(function (user) {
        if(user){
            console.log('User is signed in!', user);
            setUser(user)
        } else {
            console.log('No user is signed in.')
        }
    });

    const onSignOut = () => {
        console.log('Signing Out!');
        auth.signOut()
            .then(function() {
                console.log('User signed out');
                setUser(false)
            }).catch(function(err) {
                console.log(err)
            })
    };

    return(
        <div className='app_container'>
            <AppNav user={user} onSignOut={onSignOut} />
            <Router>
                <SignUp path='sign_up' />
                <SignIn path='sign_in'  default />
                <Posts path='blogs/:uid/posts' user={user} />
                <Post path="/blog/:uid/post/:id" user={user} />
                <CreatePost path="create_post" user={user} />
                <UpdatePost path="update_post/:id" user={user} />
            </Router>
        </div>
    )
}