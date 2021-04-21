import React from 'react';
import { Card } from 'antd';
import { Link } from "@reach/router";


export default function PostSnippet(props) {
    return(
        <div className='post_snippet_container'>
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={props.title}
                extra={
                    <Link to={`/post/${porps.id}`}>Read Full Article</Link>
                }
            >
                <p className='article_content'>
                    {                        
                        props.content.split('\n').map((paragraph) => {
                            return <p>{paragraph}</p>;
                        })
                    }
                </p>

            </Card>
        </div>
    )
}