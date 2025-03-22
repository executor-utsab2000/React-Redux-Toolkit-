import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData as categoryFetchApi } from '../apiFunctions/categoryApi'
import { fetchData as projectFetchApi } from '../apiFunctions/projectApi'



const DisplayData = () => {

    const dispatch = useDispatch()

    const categoryData = useSelector(state => state.category.data)
    const projectData = useSelector(state => state.project.data)



    useEffect(() => {
        categoryFetchApi(dispatch)
        projectFetchApi(dispatch)
    }, [dispatch])


    return (
        <>
            <h1>Display Data</h1>
            {/* {
                categoryData.map((elm) => {
                    return (
                        <>
                            <h3>{elm?.fields?.categoryName.stringValue}</h3>
                        </>
                    )
                })
            }

            <hr />
            <hr />
            <hr />


            {
                projectData.map((elm, index) => {
                    return (
                        <>
                            <h4>{elm?.fields?.projectName.stringValue} ---- {index}</h4>
                        </>
                    )
                })
            } */}


            {
                categoryData.map((category) => {
                    return (
                        <>
                            <h2>{category?.fields?.categoryName.stringValue}</h2>
                            {
                                projectData.filter(project => project?.fields?.categoryId.stringValue == category?.fields?.categoryId.stringValue).map((elm) => {
                                    return (
                                        <>
                                            <h5>{elm.fields.projectName.stringValue}</h5>
                                        </>
                                    )
                                })
                            }
                        </>
                    )
                })
            }



        </>
    )
}

export default DisplayData