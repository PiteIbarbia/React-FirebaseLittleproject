import React, { useState } from 'react';
import { Router, Link, navigate } from "@reach/router"
import { Menu, Icon } from 'antd';
import Posts from './Posts';
import Post from './Post';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { auth } from '../../firebase';
import { useForm } from 'antd/lib/form/Form';

// const { SubMenu } = Menu;


export default function App(props) {

    const [user, setUser] = setState(false);

    auth.onAuthStateChanged(function (user) {
        if(user){
            console.log('User is signed in!', user);
            setUser(user)
        } else {
            console.log('No user is signed in.')
        }
        navigate('/posts')
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
            navigate('/posts')
    };

    return(
        <div className='app_container'>
            <div className='app_main_navigation'>
                <Menu mode="horizontal">
                    <Menu.Item key="posts">
                        <Icon type="read" />
                        <Link to="/posts" style={{float: 'right'}}>Posts</Link>
                    </Menu.Item>
                   { user && 
                        <Menu.Item key="create_post">
                            <Icon type="highlight" />
                            <Link to="/create_post" style={{float: 'right'}}>Create Post</Link>
                        </Menu.Item>
                    }
                    {
                        !user?<Link to="/create_post" style={{float: 'right'}}>Create Post</Link>:<a onClick={onSignOut} style={{float: 'right'}}>Sign Out</a>
                    }

                </Menu>
            </div>
            <Router>
                <SignUp path='sign_up' />
                <SignIn path='sign_in'  default />
                <Posts path='posts' user={user} />
                <Post path="post/:id" />
                <CreatePost path="create_post" />
                <UpdatePost path="update_post/:id" />
            </Router>
        </div>
    )
}