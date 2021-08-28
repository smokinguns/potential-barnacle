import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import {Day} from '../schedule/day';
import Card from 'react-bootstrap/Card';


class Schedule extends React.Component {
    render() {
        return (<>

<Accordion>
{
                        this.props.schedule.map((day, index) => {
                            return <Card key={day.day}>
                            <Card.Header>
                              <Accordion.Toggle as={Button} variant="link" eventKey={index.toString()}>
                                {day.day}
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={index.toString()}>
                              <Card.Body><Day  day={day}></Day></Card.Body>
                            </Accordion.Collapse>
                          </Card>
                            
                            
                        })
                    }

  
</Accordion>
</>);
}
}

export { Schedule }