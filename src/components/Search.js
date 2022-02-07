import React, {useRef,useEffect} from 'react'
import { useGlobalContext } from '../context'
import imgSearch from '../search.svg'

const SearchForm = () => {
    const {setSearchTerm}= useGlobalContext()
    const searchValue = useRef()
    const searchTemplate = ()=>{
        setSearchTerm(searchValue.current.value)
    }
    useEffect(() => {
        searchValue.current.focus()
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section className=' search'>
        <form className='search-form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <input type="text" id='id' ref={searchValue} 
                onChange={searchTemplate} placeholder="Search Template" />
                <img src={imgSearch} alt="" />
            </div>
            
        </form>
        
        </section>
    )
}

export default SearchForm

