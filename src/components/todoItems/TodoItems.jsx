import React from 'react'
import tick from '../../assets/tick.png'
import not_tick from '../../assets/not_tick.png'
import delete_icon from '../../assets/delete.png'


export const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div  onClick={()=>toggle(id)} className='flex items-center gap-2 flex-1 select-none'>
            <img src={isComplete ? tick : not_tick}alt="" className='w-7 cursor-pointer'/>
            <p className={`text-lg cursor-pointer decoration-slate-500 ${isComplete ? "line-through": ''}`}>{text}</p>
        </div>
        <div>
            <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="" className='w-5 cursor-pointer'/>
        </div>
    </div>
  )
}
