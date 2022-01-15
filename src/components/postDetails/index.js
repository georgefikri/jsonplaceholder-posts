import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SinglePostDetails({ singlePost }) {
  let navigate = useNavigate();

  const navigatetoListing = () =>
    navigate("../jsonplaceholder-posts/", { replace: false });

  return (
    <div>
      <Button variant="primary" onClick={() => navigatetoListing()}>
        go back
      </Button>
      <Form>
        <Form.Group className="mb-3" controlId="title.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={singlePost?.title}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="body.ControlTextarea1">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" rows={6} value={singlePost?.body} />
        </Form.Group>
      </Form>
    </div>
  );
}

export default SinglePostDetails;
