import React from "react";
import PropTypes from "prop-types";

class PropTypeCheck extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
              
            </div>
        )
    }
}

PropTypeCheck.propTypes = {
    testing: PropTypes.object,
  };


export default PropTypeCheck;