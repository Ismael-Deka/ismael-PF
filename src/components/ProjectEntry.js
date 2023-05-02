import { Row, Col} from 'react-bootstrap';
import CodePic from '../assets/png/code.png';

function ProjectEntry() {
  return (
    <div>
      <Row style={{
        borderRadius: '20px', marginRight: '5vw', marginLeft: '5vw',
      }}
      >
        <img
          src={`${CodePic}`}
          alt=""
          style={{
            width: '50%', objectFit: 'cover', borderRadius: '18px', padding: '0px',
          }}
        />
        <Col style={{ paddingLeft: '3vw' }}>
          <Row xs={1} className="p-1">
            <h1 className="display-6">
              Project Name
            </h1>
          </Row>
          <Row xs={1} className="p-1">
            <p className="lead">Technologies Used:</p>
          </Row>
          <Row xs={1} className="p-1">
            <p className="lead">Project Description</p>
          </Row>

        </Col>

      </Row>

    </div>

  );
}

export default ProjectEntry;
