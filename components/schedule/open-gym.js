import React from 'react';

class OpenGym extends React.Component {
render() {
    return (<>
    <div className={"float-left schedule-item"}>{this.props.time.startTime}- {this.props.time.endTime} Open Gym</div> 
    </>);
}
}

export {OpenGym};