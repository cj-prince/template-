import React from 'react'
import Search from "../components/Search"
import Dropdown from '../components/dropDown'

const Home = () => {
    return (
        <div className="home">
            <Search />
            <Dropdown />
        </div>
    )
}


export default Home