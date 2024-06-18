import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center px-2 shadow-sm'>
      <img
          className="w-16 h-16 p-2 rounded-full"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt="user-icon"
        />
        <span className='font-bold px-2'>{name}: </span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage
