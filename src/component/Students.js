import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cardInfo = [
    {
        image: require("../img/s1.png"),
        name: "Mike",
        gpa: 3.8
    },
    {
       image: require("../img/s2.png"),
       name: "Manal",
       gpa: 3.6
    },
    {
        image: require("../img/s3.png"),
        name: "Moe",
        gpa: 3.2
    },
    {
        image: require("../img/s4.png"),
        name: "Mary",
        gpa: 2.6
    }
];

function Students() {
    return (
            <Row xs={1} md={2} className="g-4">
              {cardInfo.map((student) => (
                <Col>
                  <Card>
                    <Card.Body>
                        <Card.Img variant="top" src={student.image} />
                      <Card.Title>{student.name}</Card.Title>
                      <Card.Text>{student.gpa.toString()}</Card.Text>
                      <Button variant="primary">Grade</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
    )
}

export default Students;