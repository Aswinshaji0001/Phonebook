import React from 'react'
import '../css/Home.scss'
import { Link } from 'react-router-dom'
const Home = () => {
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
            <div className="contacts">
            <Link to={"/add"}><button className='button-3'>Add Contacts</button></Link>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Home;
