import { comments, CommentType } from '../data/comments'
import React, { useState } from "react";
import { render } from '@testing-library/react';
import Ment from './Ment';
// import Comment from './components/Comment';

type CommentProps = {
    username: string,
    userImagePath: string,
    commentText: string,
    likeNum: number,
    replies: CommentProps
}
const Comments = () => {
    // const state = comments.useState();
    // const render = () => {
    //     for (let i = 0; i < 2; i++)
    //         let comm = comments[i]

    // }

    const [ment, setMent] = useState<CommentType[]>([]);

    return (
        // normal comment
        <div className="commentsList">
            {/* {ment.map(x => <Comment username={x.username}></Comment> )} */}
            
            {/* {ment.map(x => <Ment username={x.username} userImagePath={x.userImagePath} commentText={x.commentText} likeNum={x.likeNum} replies={x}/>)} */}

        <Ment/>
        </div>


    )
}

export default Comments