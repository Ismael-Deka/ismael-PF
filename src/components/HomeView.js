import {
  Container, Row, Col,
} from 'react-bootstrap';

function HomeView() {
  return (
    <div>

      <Container
        fluid="md"
        style={{
          paddingTop: '5%',
          paddingBottom: '10%',
        }}
      >

        <Row style={{
          border: '1px', borderStyle: 'solid', paddingTop: '10rem', paddingBottom: '15%', borderRadius: '20px',
        }}
        >
          <Col style={{ paddingLeft: '3vw' }}>
            <Row xs={2} className="pt-2 pb-2 mb-2  mt-5">
              <h1 className="display-2">Hi, I&apos;m Ismael Deka.</h1>
            </Row>
            <Row xs={2}>
              <p className="lead">I have experience with a wide range of programming languages and tools including Java, Python, JavaScript, HTML, React, Bootstrap, Flutter, Android development, and many more.</p>
            </Row>
          </Col>

        </Row>

      </Container>
    </div>

  );
}

export default HomeView;
