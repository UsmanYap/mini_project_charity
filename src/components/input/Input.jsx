import React from 'react';

const Input = (props) => {

    const func = props.onChange;

    return(
        <div className="col-lg-12 col-12 m-0 mb-2 personal-info">
            <input type={`${props.type}`} name={`${props.name}`} id={`${props.name}`}
                className="form-control" placeholder={`${props.name}`} onChange={func} />
        </div>
    )
    
};

export default Input;