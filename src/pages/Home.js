import React from 'react'
import Search from "../components/Search"
import Dropdown from '../components/dropDown'
import { useGlobalContext } from '../context'

const Home = () => {
    const {template}= useGlobalContext()
    return (
        <div className="home">
            <Search placeholder="Search Template" data={template}  />
            <Dropdown />
        </div>
    )
}


export default Home