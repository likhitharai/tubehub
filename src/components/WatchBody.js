// import React from 'react'

// const WatchBody = ({info}) => {
//     console.log(info);
//     const {snippet, statistics} = info;
//     const {channelTitle, title,} = snippet;

//     // function ContainerComponent({ info, children }) {
//     //     const withProps = React.Children.map(children, child => React.cloneElement(child, { info }));
//     //     return <>{withProps}</>;
//     }
//   return (
//     <div>
//       <h1 className="text-2xl font-bold px-12">
//       {title}
//       </h1>
//       {/* The below div is for all the buttons in the YT page */}
//       <div className="flex">
//         <img
//           className="w-10 h-10 rounded-full ml-10 my-2"
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLwDqDwd2JfzifvfBTFT8I7iKFFevcedYg&s"
//           alt="Channel-icon"
//         />
//         <div className="px-5 ml">
//           <h2 className="font-bold">{channelTitle}</h2>
//           <h2 className="text-gray-500"> {statistics.viewCount} Subscribers</h2>
//         </div>
//         <button className="bg-gray-200 px-4 py-2 m-2 rounded-2xl">Join</button>
//         <button className="bg-black text-white px-4 py-2 m-2 rounded-2xl">
//           Subscribe
//         </button>

//         <div className="ml-36 justify-end">
//           <button className="bg-gray-200 px-4 py-2 rounded-l-3xl border-solid border-2 border-r-gray-400">
//             7.7k{" "}
//           </button>
//           <button className="bg-gray-200 px-4 py-2 border-solid rounded-r-3xl border-2">
//             dislike
//           </button>
//           <button className="bg-gray-200 px-4 py-2 m-2 rounded-2xl">
//             Share
//           </button>
//           <button className="bg-gray-200 px-4 py-2 m-2 rounded-2xl">
//             Download
//           </button>
//           <button className="bg-gray-200 px-4 py-2 m-2 rounded-full">
//             ...
//           </button>
//         </div>
//       </div>
//       {/* The below div is for the description box */}
//       <div className="bg-gray-100 w-2/3 mx-10">
//         <p className="px-10 py-8">
//           98,781 views 17 Feb 2024 Visit https://chaicode.com for all related
//           materials, community help, source code etc. Welcome to chai aur code,
//           a coding/programming dedicated channel in Hindi language. Now you can
//           learn best of programming concepts with industry standard practical
//           guide in Hindi language. All source code is available at my Github
//           account: https://github.com/hiteshchoudhary Our Open-Source Project is
//           here: https://freeapi.app Join me at whatsapp:
//           https://hitesh.ai/whatsapp for community discord:
//           https://hitesh.ai/discord
//         </p>
//       </div>
//       <div className="flex px-4 mx-4">
//         <h2 className="px-5">533 Comments</h2>
//         <h2>Sort by</h2>
//       </div>
//     </div>
//   )
// }

// export default WatchBody


// // ---------------------------------------------------------------

// // const VideoCard = ({info}) => {
// //     console.log(info);
// //     const {snippet, statistics} = info;
// //     const {channelTitle, title, thumbnails} = snippet;
// //   return (
// //     <div className='p-2 m-4 w-60 shadow-lg'>
// //     <img className= 'rounded-lg' src ={thumbnails.medium.url} alt="thumbnail"/>
// //     <ul>
// //         <li className='font-bold py-2'>{title}</li>
// //         <li className='text-gray-500'>{channelTitle}</li>
// //         <li className='text-gray-500'>{statistics.viewCount} views</li>
// //     </ul>

// //     </div>
// //   )
// // }