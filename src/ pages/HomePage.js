import {
  Card, Container, Row, Col,
} from 'react-bootstrap';

function HomePage() {
  return (
    <div>

      <Container fluid="md">
        <Row>
          <Col xs={5}>
            <Row className="pt-5 pb-5 mb-2  mt-5">
              <h1 className="display-1">Hi. I&apos;m Ismael.</h1>
            </Row>
            <Row>
              <p className="lead ">I have experience with a wide range of programming languages and tools including Java, Python, JavaScript, HTML, React, Bootstrap, Flutter, Android development, and many more.</p>
            </Row>
          </Col>
          <Col xs={2} />
        </Row>

        <Card className="p-5 ml-2 mr-2 mt-5">
          <p>Throughout my career, I have worked on a number of exciting projects that </p>
          <p> have allowed me to hone my skills and showcase my creativity. One of my most </p>
          <p>notable projects is VINScanner, an Android app for scanning VINs to get vehicle</p>
          <p>information and recall history. This app has been downloaded by thousands of users </p>
          <p>and has received positive reviews for its ease of use and accuracy.</p>
          <p>Throughout my career, I have worked on a number of exciting projects that </p>
          <p> have allowed me to hone my skills and showcase my creativity. One of my most </p>
          <p>notable projects is VINScanner, an Android app for scanning VINs to get vehicle</p>
          <p>information and recall history. This app has been downloaded by thousands of users </p>
          <p>and has received positive reviews for its ease of use and accuracy.</p>
          <p>Throughout my career, I have worked on a number of exciting projects that </p>
          <p> have allowed me to hone my skills and showcase my creativity. One of my most </p>
          <p>notable projects is VINScanner, an Android app for scanning VINs to get vehicle</p>
          <p>information and recall history. This app has been downloaded by thousands of users </p>
          <p>and has received positive reviews for its ease of use and accuracy.</p>
          <p>Throughout my career, I have worked on a number of exciting projects that </p>
          <p> have allowed me to hone my skills and showcase my creativity. One of my most </p>
          <p>notable projects is VINScanner, an Android app for scanning VINs to get vehicle</p>
          <p>information and recall history. This app has been downloaded by thousands of users </p>
          <p>and has received positive reviews for its ease of use and accuracy.</p>
        </Card>
      </Container>
    </div>

  );
}

export default HomePage;
