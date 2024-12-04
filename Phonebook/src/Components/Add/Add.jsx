import React from 'react'
import '../css/Add.scss'
import { Link } from 'react-router-dom'

const Add = () => {
  return (
    <div>
        <div className="container">
            <div className="contain">
            <div className="nav">
                <div className="time">
                <h3>9:00 AM</h3>
                </div>
                <div className="charge">
                <h3>90% </h3>
                </div>
            </div>
            <h1>Phone Book</h1>
             <div className="add">
                <form action="">
                    <input type="text"  placeholder='First Name'/>
                    <input type="text"  placeholder='Last Name'/>
                    <input type="text"  placeholder='Number'/>
                   <button className='button-3'>Add to contacts</button>
                </form>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Add
