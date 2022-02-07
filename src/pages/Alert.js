import React from 'react'
import group from "../Group.svg"

const Alert = () => {
    return (
        <div className='alert'>
            <img src={group} alt="" />
            <h4>Tada! Get started with a free template. 
                Can’t find what you are looking for? 
                Search from the 1000+ available templates
            </h4>
        </div>
    )
}

export default Alert
