import React, { useState} from 'react'
import vector from "../Vector.svg"

const data = [];

const Dropdown = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className='dropDown'>
            <h4 className="dropText">Sort By:</h4>
            <div className='dropdownBtn'>
                    <button className='dropBotton'>All</button>
                    <img src={vector} alt="" />
            </div>
            <div className='dropdownBtn'>
                    <button className='dropBotton'>Default</button>
                    <img src={vector} alt="" />
            </div>
            <div className='dropdownBtn'>
                    <button className='dropBotton'>Default</button>
                    <img src={vector} alt="" />
            </div>
        </div>
       
    )
}

export default Dropdown