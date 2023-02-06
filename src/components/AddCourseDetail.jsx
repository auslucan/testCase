import { Button, Form, Segment } from "semantic-ui-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AddCourseDetail(props) {
  const initialState = {
    courseName: "",
    courseDescription: "",
    courseUrlPath: "",
  };

  const [courseDetail, setCourseDetail] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
   
    if (!courseDetail.courseName) {
      toast.error("Please fill all the details !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    courseDetail.courseId=props.course.id;
    props.handleCourseDetail(courseDetail);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCourseDetail({ ...courseDetail, [name]: value });
  }

  return (
    <>
      <h1 style={{ marginLeft: "15px" }}>Add Course Detail</h1>
      <Segment clearing style={{ marginRight: "30px", marginTop: "30px", marginLeft: "10px" }} >
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Form.Input placeholder="courseName" value={courseDetail.courseName} name="courseName" onChange={handleInputChange} />
          <Form.Input placeholder="courseDescription" value={courseDetail.courseDescription} name="courseDescription" onChange={handleInputChange}/>
          <Form.Input placeholder="courseUrlPath" value={courseDetail.courseUrlPath} name="courseUrlPath" onChange={handleInputChange} />
          <Button floated="right" positive type="submit" content="Submit" />
          <Button floated="right" type="button" content="Cancel" onClick={() => props.closeForm()}
          />
        </Form>
      </Segment>
    </>
  );
}
