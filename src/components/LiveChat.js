import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../Utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessage = useSelector ((store)=> store.chat.messages);

    useEffect (()=>{
        const i = setInterval(()=>{
            console.log("API polling")
            dispatch(addMessage({
              name: generateRandomName(),
              messages: generateRandomMessage(10)
            }))
        },1000);

        return ()=> clearInterval(i);
    },[])

  return (
    <>
    <div className='mx-4 px-2 border border-black w-full h-[500px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
    <div>
      {chatMessage.map((c,i) =>(
        <ChatMessage key={i} name={c.name} message={c.messages} />
      ))}
      </div>
    </div>
    <div className="w-full p-2 ml-3 border border-black rounded-2xl my-2 ">
    <input className= "w-72 rounded-3xl bg-gray-100 px-2" 
    onChange={(e)=> {setLiveMessage(e.target.value)}}
    type="text" placeholder='Write your comment'/>
    <button className='px-4 mx-4 bg-green-100 rounded-lg'>Send</button>
    </div>
    </>
  )
}

export default LiveChat
