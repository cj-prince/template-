import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates'
const AppContext = React.createContext()


const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm]= useState('')
    const [template, setTemplate]= useState([])

    const fetchTemplate = useCallback (async () =>{
        try {
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json()
        
        if (data){
            const newTemplate = data.map((item)=>{
                const {category,created,description,name, link} = item
                return{id:category,name:name,info:created,text:description,job:link}
            })
            setTemplate(newTemplate)
        }else{
            setTemplate([])
        }
        } catch (error) {
        }
    },[searchTerm])
    useEffect(()=>{
        fetchTemplate()
    },[searchTerm,fetchTemplate])

    return <AppContext.Provider 
            value={{
            setSearchTerm,template,setTemplate}}>
            {children}
        </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }