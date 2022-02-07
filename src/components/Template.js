import React from 'react'


const Template = ({job,name,text,info,id}) => {
    return (
        <article className='template'>
            <div className='form-template'>
                <p>{`${id} Form Template`}</p>
            </div>
        <div className='template-container'>
            <h3>{name}</h3>
            <p>{text}</p>
            <p>{info}</p>
        </div>
        <div className='template-footer'>
            <a onClick={(e)=>this.setState({job})}>
                Use Template
            </a>
        </div>
        </article>
    )
}

export default Template