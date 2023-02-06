import { Button, Form, Segment } from "semantic-ui-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AddCourse(props) {
  
  const initialState = {
    name: "",
    startDate: "",
    endDate: "",
    status:false,
  };

  const [course, setCourse] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (!course.name) {
      toast.error("Please fill all the details !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    props.handleSumbit(course);
    setCourse(initialState);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCourse({ ...course, [name]: value });
  }

  return (
    <>
      <h1 style={{ marginLeft: "15px" }}>Add Course</h1>
      <Segment clearing style={{ marginRight: "30px", marginTop: "30px", marginLeft: "10px" }} >
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Form.Input placeholder="Name" value={course.name} name="name" onChange={handleInputChange} />
          <Form.Input placeholder="Start Date" value={course.startDate} name="startDate" onChange={handleInputChange}/>
          <Form.Input placeholder="End Date" value={course.endDate} name="endDate" onChange={handleInputChange} />
          <Button floated="right" positive type="submit" content="Submit" />
          <Button floated="right" type="button" content="Cancel" onClick={() => props.closeForm()}
          />
        </Form>
      </Segment>
    </>
  );
}
