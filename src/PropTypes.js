import React from "react";
import PropTypeCheck from './PropTypeCheck';

class PropTypesCom extends React.Component {
render(){
    return(
        <div>
                <PropTypeCheck testing={{name:"raj"}}/>
        </div>
    )
}
}

export default PropTypesCom;