import React, { Component, Fragment } from 'react'
import NotFound from './components/pages/NotFound'
import componentsList from './componentsList'


class Works extends Component {
    render () {
        const id = this.props.match.params.id
        const component = componentsList[id]
        if (typeof component === "undefined") {
            return (
                <NotFound />
            )
        } else {
            return (
                <Fragment>
                    {component}
                </Fragment>
            )
        }
    }
}

export default Works