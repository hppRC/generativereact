import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const WorksList = () => (
    <Fragment>
        <ul>
            <li><Link to='/1'>work 1</Link></li>
            <li><Link to='/2'>work 2</Link></li>
        </ul>
    </Fragment>
)

export default WorksList