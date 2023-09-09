import React from 'react';

const Section=({title,description})=>{

    return(
        <div className="nam">
            <hr/>
        <h1>{title}</h1>
        <p>{description} </p>
        </div>
    )
}
export default Section;