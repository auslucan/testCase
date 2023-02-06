import { Fragment } from "react";
import { Table, Button } from "semantic-ui-react";
import "../index.css";

export default function CoursesTable(props) {
  return (
    <Fragment>
      <h1 style={{ marginLeft: "30px" }}>Courses List</h1>
      <Table
        celled
        style={{
          marginLeft: "30px",
          marginTop: "30px",
          width: "1100px",
          border: "1px solid black",
        }}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Cours Name</Table.HeaderCell>
            <Table.HeaderCell>Start Date</Table.HeaderCell>
            <Table.HeaderCell>End Date</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.courses.filter(t=>t.course !==null).map((course) => (
            <Table.Row key={course.id}>
              <Table.Cell>{course.name}</Table.Cell>
              <Table.Cell>{course.startDate}</Table.Cell>
              <Table.Cell>{course.endDate}</Table.Cell>
              <Table.Cell>{course.status===false?"Yayınlanmadı":"Yayında"}</Table.Cell>
              <Table.Cell>
              <Button positive onClick={() => props.addDetailForm(course)}>
                  {" "}
                  Add CourseDetail
                </Button>
                <Button positive onClick={() => props.editForm(course)}>
                  Edit
                </Button>

                <Button negative onClick={() => props.deleteCourse(course.id)}>
                  {" "}
                  Delete
                </Button>
                  <Button positive onClick={() => props.courseDetailTable(course.id)}>
                  {" "}
                   Course Details
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

    </Fragment>
    
  );
}
