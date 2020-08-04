import React from "react";
import ErrorBoundaryChild from "./errorBoundaryChild";
import ErrorComponent from "./ErrorComponent";

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h1>Error Boundary</h1>
                <ErrorBoundaryChild tech="Reactjs" />
                <ErrorBoundaryChild tech="Angular" />
                <ErrorComponent>
                    <ErrorBoundaryChild tech="typescript" />
                </ErrorComponent>
                <ErrorComponent>
                    <ErrorBoundaryChild tech="Nodejs" />
                </ErrorComponent>
            </div>
        )
    }
}

export default ErrorBoundary;