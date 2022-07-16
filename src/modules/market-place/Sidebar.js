import React, { Children } from 'react'
import { NavLink } from 'react-router-dom'
import Products from './products'

const Sidebar = ({ children }) => {
    return (
        <div className='page'>
            <div className='row'>
                <div className='col-3'>
                    <ul className='list-unstyled'>
                        <li>
                            <NavLink to="/market-place">
                                Market
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/your-cart">
                                Cart
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/your-orders">
                                Orders
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='col-9'>{children}</div>
            </div>
        </div>
    )
}

export default Sidebar