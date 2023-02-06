import { Button, Form, Segment } from "semantic-ui-react";
import React, { useState } from "react";

export default function EditCourse(props) {
  const [course, setCourse] = useState(props.course);
  function handleSubmit(e) {
    e.preventDefault();
    props.handleEditCourse(course);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCourse({ ...course, [name]: value });
  }

  return (
    <>
      <h1 style={{ marginLeft: "15px" }}>Edit Course</h1>
      <Segment
        clearing
        style={{ marginRight: "30px", marginTop: "30px", marginLeft: "10px" }}
      >
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Form.Input
            placeholder="Name"
            value={course.name}
            name="name"
            onChange={handleInputChange}
          />

          <Form.Input
            placeholder="Start Date"
            value={course.startDate}
            name="startDate"
            onChange={handleInputChange}
          />
          <Form.Input
            placeholder="End Date"
            value={course.endDate}
            name="endDate"
            onChange={handleInputChange}
          />
          <Form.Input
            placeholder="Status"
            value={course.status}
            name="status"
            onChange={handleInputChange}
          />
          <Button floated="right" positive type="submit" content="Submit" />
          <Button
            floated="right"
            type="button"
            content="Cancel"
            onClick={() => props.closeForm()}
          />
        </Form>
      </Segment>
    </>
  );
}
