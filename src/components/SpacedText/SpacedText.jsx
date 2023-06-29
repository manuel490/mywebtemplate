import React from "react";

const SpacedText = ({content}) => {
    return (
        <>
        {content.split('\n').map((linea,index)=>
           <React.Fragment key={index}>
           <p>{linea}</p>
           <br />
         </React.Fragment>
          )
        }
        </>
    );
}

export default SpacedText;