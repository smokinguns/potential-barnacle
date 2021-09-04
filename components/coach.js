import Card from 'react-bootstrap/Card'


const Coach = ({coach}) => {
    return (<Card id={`coach-id-${coach.id}`}>
    <Card.Img variant="top" className={'coaches-img'} src={`/images/${coach.photo}`} />
    <Card.Body>
      <Card.Title>{coach.name}</Card.Title>
      <h6>
      {
        coach.certs.map((cert, index) => {
            return (<span key={index}>{cert}</span>)
        })
      }
      </h6>
      <Card.Text>
      {
            coach.bio.map((bio, index) => {
                return <p key={index} >{bio}</p>
            })
        }
      </Card.Text>
    </Card.Body>
  </Card>);
}

export { Coach };




/*return (<>
    <div>{coach.name}</div>
    <div>{
        coach.certs.map((cert, index) => {
            return (<span key={index}>{cert}</span>)
        })
    }
    </div>
    <div>
        {
            coach.bio.map((bio, index) => {
                return <p key={index} >{bio}</p>
            })
        }
    </div>
</>);*/