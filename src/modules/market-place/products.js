import React, { useEffect } from 'react'
import * as marketAction from "../../redux/actions/marketPlaceAction"
import { useDispatch, useSelector } from "react-redux"
const Products = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(marketAction.marketPlace())
    }, [])
    const marketReducer = useSelector(store => store)
    console.log(marketReducer)
    return (
        <div className='    '>products</div>
    )
}

export default Products