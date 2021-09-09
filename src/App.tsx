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
        <div className="">
          <Post/>
        
        
        

        {/* comments section */}
        


          

        </div>

      </div>
    </div>
  );
}

export default App;
