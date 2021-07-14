import React from 'react';
import "./UserError.css"

const UserError = ({error}) => {
    return (
        <div id="danger">
            <h1 id="dangerdanger">{error.msg}</h1>
        </div>
    )
}

export default UserError;
