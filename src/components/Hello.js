import React, { createElement } from "react";

const Hello =  () => {
    // return (
    //     <div >
    //         <h1>Hello World!</h1>
    //     </div>
    // )

    return React.createElement('div', {
        id:"main",
        className: 'container'
    } ,React.createElement( 'h1' ,{
        className: 'title'
    },'Hello World'))
}
export default Hello