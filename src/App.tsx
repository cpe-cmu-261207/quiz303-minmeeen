import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import Comments from './components/Comments';

function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">
        <Post/>
        
        
        

        {/* comments section */}
        <div className="">


          {/* replies */}
          {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
          <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src="/profileImages/puppy.jpg"></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold">หมาน้อย</p>
              <p>เม้นค้าบ</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
