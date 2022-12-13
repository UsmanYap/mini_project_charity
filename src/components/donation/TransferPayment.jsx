import React from 'react'

const TransferPayment = (props) => {
    return (
        <div className="col-lg-12 col-12 form-check-group">
            <div className="input-group">
                <span className="input-group-text" id="basic-addon1">Transfer to</span>

                <input type="text" className="form-control" placeholder={`${props.number} (${props.method})`}
                    aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
        </div>
    )
    
}

export default TransferPayment;