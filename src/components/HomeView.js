import {
  Container, Row, Col,
} from 'react-bootstrap';
import CodePic from '../assets/png/code.png';

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
          border: '1px', borderStyle: 'solid', borderRadius: '20px',
        }}
        >
          <Col style={{ paddingLeft: '3vw', paddingTop: '25vh', paddingBottom: '25vh'}}>
            <Row xs={1} className="p-2 mb-2  mt-5">
              <h1 className="display-3">Hi, I&apos;m Ismael Deka.</h1>
            </Row>
            <Row xs={1} className="pr-2 mb-2">
              <p className="lead">I have experience with a wide range of programming languages and tools including Java, Python, JavaScript, HTML, React, Bootstrap, Flutter, Android development, and many more.</p>
            </Row>
          </Col>

          <img
            src={`${CodePic}`}
            alt=""
            style={{
              width: '50%', objectFit: 'cover', borderRadius: '18px', padding: '0px',
            }}
          />

        </Row>

      </Container>
    </div>

  );
}

export default HomeView;
