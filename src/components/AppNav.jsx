import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from "@reach/router";

const AppNav = (props) => {
    return(
        <div className='app_main_navigation'>
                <Menu mode="horizontal">
                    <Menu.Item key="posts">
                        <Icon type="read" />
                        <Link to={`/blogs/${user.uid}/posts`} style={{float: 'right'}}>Posts</Link>
                    </Menu.Item>
                   { props.user && 
                        <Menu.Item key="create_post">
                            <Icon type="highlight" />
                            <Link to="/create_post" style={{float: 'right'}}>Create Post</Link>
                        </Menu.Item>
                    }
                    {
                        !props.user?<Link to="/create_post" style={{float: 'right'}}>Create Post</Link>:<a onClick={props.onSignOut} style={{float: 'right'}}>Sign Out</a>
                    }

                </Menu>
            </div>
    )
}

export default AppNav;