import React from 'react';

const OfferError = ({error}) => {
    return (
        <div id="danger">
            <h1 id="dangerdanger">{error.msg}</h1>
        </div>
    )
}

export default OfferError;
