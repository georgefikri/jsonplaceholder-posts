import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SinglePostDetails({ singlePost }) {
  let navigate = useNavigate();

  const navigatetoListing = () =>
    navigate("../jsonplaceholder-posts/", { replace: false });

  return (
    <div className="postDetails">
      <Button
        variant="primary"
        className="backButton"
        onClick={() => navigatetoListing()}
      >
        go back
      </Button>
      <h1>Post Details</h1>
      <Form>
        <Form.Group className="mb-3" controlId="title.ControlInput1">
          <Row>
            <Form.Group className="mb-3" controlId="title.ControlInput1">
              <Col xs={4} className="label">
                Title
              </Col>
              <Col xs={6} className="fieldControl">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={singlePost?.title}
                />
              </Col>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="body.ControlTextarea1">
              <Col xs={4} className="label">
                Body
              </Col>
              <Col xs={6} className="fieldControl">
                <Form.Control as="textarea" rows={6} value={singlePost?.body} />
              </Col>
            </Form.Group>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SinglePostDetails;
