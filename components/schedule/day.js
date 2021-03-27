import React from 'react';
import { OpenGym } from './open-gym';
import { WOD } from './wod';

class Day extends React.Component {
    render() {

        return (<>

            <div>
                <div className={'schedule-day'}>{this.props.day.day}</div>
                {this.props.day.times.map((time) => {
                    return (
                        time.type === "WOD" ? <WOD key={time.id} time={time}></WOD> : <OpenGym key={time.id} time={time}></OpenGym>
                    )
                })
                }
            </div>
            <div className="clearfix"></div>
        </>);
    }
}

export { Day };
