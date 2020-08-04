import React from "react";

const ChildCom = (props) => {
    //Parent to child
    console.log(props)
    return (
        <div>
            <h1>Child component</h1>
            <input type="text" onChange={props.propData}></input>
            {/* Child to parent */}
        </div>
    )
}

export default ChildCom;