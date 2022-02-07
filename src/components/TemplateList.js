import React,{useState} from 'react'
import Templates from './Template'
import { useGlobalContext } from '../context'
import ReactPaginate from 'react-paginate';

const Template = () => {
    const {template, setTemplate} = useGlobalContext()
    const [pageNumber, setPageNumber] = useState(0);
    if (template.length < 1){
        return(
        <h2 className='section-title'>
            No result found
        </h2>
        )
    }

    const templatePerPage = 15;
    const pagesVisited = pageNumber * templatePerPage

    const displayTemplate = template
        .slice(pagesVisited, pagesVisited + templatePerPage)
        .map((item) => {
        return (
            <Templates  {...item}/>
        )
    })

    const pageCount = Math.ceil(template.length / templatePerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <section className='section'>
            <div className='template-length'>
                <h4>All Template</h4>
                <h6>{`${template.length}`}</h6>
            </div>
            <div className='template-center'>
                {displayTemplate}
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextClassName={'Next >'}
                    // pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBtn"}
                    previousLinkClassName={"previousBtn"}
                    nextLinkClassName={"nextBtn"}
                    activeClassName={"paginationActive"}
                />
            </div>
            
        </section>
    )
}

export default Template
