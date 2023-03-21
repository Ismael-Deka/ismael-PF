import {
  Card, Col, Container, Row, Button,
} from 'react-bootstrap';

function ProjectView() {
  return (
    <Container className="pb-5">
      <Card className="pt-5 pb-5">
        <Row>
          <Col />
          <Col><h1 className="d-flex justify-content-center display-5 pb-5">Projects</h1></Col>
          <Col />
        </Row>
        <Container>
          <Col>
            <Row className="d-flex justify-content-center">
              <Card style={{ height: '30rem', width: '50rem' }}>
                <Card.Img variant="Top" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card&apos;s content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Row>
            <Row className="d-flex justify-content-center">
              <Card style={{ height: '18rem', width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card&apos;s content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Row>
            <Row className="d-flex justify-content-center">
              <Card style={{ height: '18rem', width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card&apos;s content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Row>
            <Row className="d-flex justify-content-center">
              <Card style={{ height: '18rem', width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card&apos;s content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Container>
      </Card>
    </Container>
  );
}

export default ProjectView;
