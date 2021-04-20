import React from 'react';
import Posts from './Posts';
import Post from './Post';
import { Router } from "@reach/router";


function App(props) {
    return(
        <div className='app_conainer'>
            <Router>
                <Posts path='/' />
                <Post path="post/:id" />
            </Router>
        </div>
    )
}

export default App