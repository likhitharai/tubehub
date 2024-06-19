import React, { useRef, useState } from 'react'

const Check = () => {
    let x=10;
    const ref = useRef(0)
    const [y, setY] = useState(0);
  return (
    
    <div className=''>
    <div className='m-4 p-2 bg-slate-100 w-full h-96 border border-black'>
        <button className='p-2 m-2 bg-green-300 rounded-lg ' onClick={()=> {x =x+1; console.log("x= " +x)} }>Increase x:</button>
        <span className='font-bold text-xl'>let x ={x} </span>
    
    {/* //------------------------ */}
    
        <button className='p-2 m-2 bg-green-300 rounded-lg' onClick={()=> setY(y+1) }>Increase Y:</button>
        <span className='font-bold text-xl'>state Y={y} </span>
    
    {/* -------------------------------------- */}
    
        <button className='p-2 m-2 bg-green-300 rounded-lg' onClick={()=> {ref.current= ref.current+1; console.log("ref= ", ref.current)} }>Increase Ref:</button>
        <span className='font-bold text-xl'>Ref = {ref.current} </span>
    </div>
    </div>
  )
}

export default Check
