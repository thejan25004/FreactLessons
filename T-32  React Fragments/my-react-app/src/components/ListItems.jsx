
// how to use fragments  01 Kramaya

// import {Fragment} from "react";
//
// const ListItems = ({items}) => {
//
//     return (
//         <Fragment>
//             {items.map((item,index) => (<li key={index}>{item}</li>))}
//         </Fragment>
//     )
// }
//
// export default ListItems;


// how to use fragments  03 Kramaya

const ListItems = ({items}) => {

    return (
        <>
            {items.map((item,index) => (<li key={index}>{item}</li>))}
        </>
    )
}

export default ListItems;


// how to use fragments  02 Kramaya

// import React from "react";
//
// const ListItems = ({items}) => {
//
//     return (
//         <React.Fragment>
//             {items.map((item,index) => (<li key={index}>{item}</li>))}
//         </React.Fragment>
//     )
// }
//
// export default ListItems;