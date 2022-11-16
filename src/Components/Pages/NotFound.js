import React from 'react'

function NotFound() {
    return (
        <div style={{marginTop:'20%', marginLeft:'25%'}}>
            <h1 className="display-1 mb-3">
                <span className="text-danger">404
                </span> Page Not Found
            </h1>
            <p className="lead">Sorry, that page does not exist. Go to <a href="/">Home </a> Page to find more</p>
        </div>
    )
}

export default NotFound
