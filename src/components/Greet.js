import React from "react";

// function Greet(){
//     return <h1>Hello World</h1>
// }

const Greet = ( props ) => {

 return (
    <div>
        <h1>Hey , {props.name}! How are your {props.testname}?</h1>
       {props.children}
    </div>
 )
}

export default Greet