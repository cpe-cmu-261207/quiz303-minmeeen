const Replies = () => {
    return (
    <div>
        <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src="/profileImages/puppy.jpg"></img>
            <div className="bg-gray-200 rounded-lg p-2">
                <p className="font-semibold">หมาน้อย</p>
                <p>จริงค้าบบบบบบบบ</p>
            </div>
        </div>
        <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src="/profileImages/popcat.png"></img>
            <div className="bg-gray-200 rounded-lg p-2">
                <p className="font-semibold">แมวตัวหนึ่ง</p>
                <p>ลิซ่าาาาาาา</p>
                <div className='flex items-center'>
                    <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                    <p className='text-gray-500'>2 คน</p>
                </div>
            </div>
        </div>

    </div>
    )



}

export default Replies