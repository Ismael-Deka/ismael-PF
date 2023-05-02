import {
  Card, Col, Container, Row,
} from 'react-bootstrap';
import ProjectEntry from './ProjectEntry';

function ProjectView() {
  return (
    <Container className="pb-5">
      <Card className="pt-5 pb-5">
        <Row>
          <Col />
          <Col><h1 className="d-flex justify-content-center display-5 pb-5">Projects</h1></Col>
          <Col />
        </Row>
        <ProjectEntry />
      </Card>
    </Container>
  );
}

export default ProjectView;
