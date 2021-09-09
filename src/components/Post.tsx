import Comments from "./Comments";

const Post = () => {
    return (
        
        
        <div className="space-y-2">

          
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/cat.jpg"></img>
            <span className='font-semibold text-lg'>Sirapat Panyathong 630610768</span>
          </div>

         
          <p>Quiz ยากมากค่า ของ่าย ๆ กว่านี้ได้ไหม #261207</p>

          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-500'>100 คน</p>
          </div>
          <Comments/>

        </div>
    )
}

export default Post;