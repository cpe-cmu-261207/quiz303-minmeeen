import { comments, CommentType } from '../data/comments'
import Replies from './Replies'
type CommentProps = {
    username: string,
    userImagePath: string,
    commentText: string,
    likeNum: number,
    replies: CommentProps[]
}

// const Ment = (CommentType: any) => {
//     let state = comments.useState();

//     return (
//         <div className="flex p-2 items-start space-x-2">
//             <img className="w-10 w-10 rounded-full" src={comments.userImagePath} ></img>
//             <div className="bg-gray-200 rounded-lg p-2">
//                 <p className="font-semibold">{comments.username}</p>
//                 <p>{comments.commentText}</p>

//                 {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
//                 <div className='flex items-center'>
//                     <img className='w-4 h-4 mr-1' src='/like.svg'></img>
//                     <p className='text-gray-500'>{comments.likeNum} คน</p>
//                 </div>
//             </div>
//         </div>
//     )


// }
const Ment = () => {


    return (
        <div>
            <div className="flex p-2 items-start space-x-2">
                <img className="w-10 w-10 rounded-full" src="/profileImages/lisa.jpg"></img>
                <div className="bg-gray-200 rounded-lg p-2">
                    <p className="font-semibold">Lisa</p>
                    <p>จริงค่า</p>

                    <div className='flex items-center'>
                        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                        <p className='text-gray-500'>999 คน</p>
                    </div>
                </div>
            </div>
            <Replies />

            <div className="flex p-2 items-start space-x-2">
                <img className="w-10 w-10 rounded-full" src="/profileImages/charliebrown.jpg"></img>
                <div className="bg-gray-200 rounded-lg p-2">
                    <p className="font-semibold">Charlie Brown</p>
                    <p>บ้าไปแล้ว</p>

                    <div className='flex items-center'>
                        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                        <p className='text-gray-500'>207 คน</p>
                    </div>
                </div>
            </div>

        </div>



    )


}


export default Ment