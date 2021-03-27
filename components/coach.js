import Card from 'react-bootstrap/Card'


const Coach = ({coach}) => {
    return (<Card>
    <Card.Img variant="top" src="https://www.stevensegallery.com/800/400" />
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