import React from "react";
import ChildCom from "./ChildCom";

class ChildToParent extends React.Component {
    constructor() {
        super();
        this.state = {
            childData: null,
        }
    }
    updateData = (e) => {
        console.log(e.target.value)
        this.setState({ childData:e.target.value })
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <ChildCom propData={this.updateData}></ChildCom>
            </div>
        )
    }
}

export default ChildToParent;