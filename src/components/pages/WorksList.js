import React from 'react'
import { Link } from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
import worksListSketch from '../sketches/worksListSketch'
import WorksListTheme from 'components/themes/WorksListTheme'

const WorksList = () => (
    <WorksListTheme>
        <div>
            <div>
                <ul>
                    <li><Link to='/works/1' >work 1</Link></li>
                    <li><Link to='/works/2' >work 2</Link></li>
                </ul>
            </div>
            <P5Wrapper sketch={worksListSketch} />
        </div>
    </WorksListTheme>
)

export default WorksList