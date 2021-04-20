import React from 'react';
import { PageHeader } from 'antd';
import PostSnippet from './PostSnippet';
import api from '../../mock_api';
import _ from 'lodash';

export default function Posts(props) {
    console.log('Soy: ', props)

    return(
        <div className='posts_container'>
            <div className='page_heaer_container'>
                <PageHeader
                    style={{border: '1px solid rgb(235, 237, 240)'}}
                    title="Posts"
                />
            </div>

            <div className='articles_container'>
                {
                    _.map(api, (article, idx) => {
                        return(
                            <PostSnippet
                                key={idx}
                                id={idx}
                                title={article.title} 
                                content={article.content} />
                        )
                    })
                }

            </div>

        </div>
    )
}