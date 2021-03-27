import React from 'react';

class WOD extends React.Component {
    render() {

        return (<>
        <div className={"float-left schedule-item"}>{this.props.time.startTime}</div>
            
        </>);
    }
}

export { WOD };