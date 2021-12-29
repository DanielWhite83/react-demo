import { Container, Button, Card, Row, Col } from 'react-bootstrap'

// styling for the hobby card
// most of this is pure bootstrap
// styles required for animating cards are kept in the cardInfo inhereted from HobbyCards.js as props
const HobbyCard = (props) => {
    return (
        <Container style={{...props.cardInfo.style}}>
            <Card className="container-sm rounded-3 px-0 mt-3" 
                style={{maxWidth: "500px",
                    backgroundColor: "rgba(0, 51, 102, 0.3)"}}>
                <Card.Img 
                    src={props.cardInfo.imgUrl}
                    className="img-responsive mx-0"
                    />
                <Card.Body className="mt-2">
                    <Card.Title className="fw-bold">
                        {props.cardInfo.title}
                    </Card.Title>
                    <Card.Text dangerouslySetInnerHTML={{__html: props.cardInfo.body}} />
                    <Row>
                        <Col>
                            <Button variant="danger" onClick={props.clickPrev}>Previous</Button>
                        </Col>
                        <Col>
                            <Button variant="success" onClick={props.clickNext}>Next</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>            
        </Container>
    )
}

export default HobbyCard
