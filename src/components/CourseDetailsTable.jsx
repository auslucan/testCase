import { Fragment } from "react";
import { Table, Button } from "semantic-ui-react";
import "../index.css";

export default function CourseDetailsTable(props) {
  
  return (
    <Fragment>
      <h1 style={{ marginLeft: "30px" }}>Course Detail List</h1>
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
            <Table.HeaderCell>CourseName</Table.HeaderCell>
            <Table.HeaderCell>CourseDescription</Table.HeaderCell>
            <Table.HeaderCell>CourseUrlPath</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.courseDetails.map((courseDetail) => (
            <Table.Row key={courseDetail.id}>
              <Table.Cell>{courseDetail.courseName}</Table.Cell>
              <Table.Cell>{courseDetail.courseDescription}</Table.Cell>
              <Table.Cell>{courseDetail.courseUrlPath}</Table.Cell>
              <Table.Cell>
                <Button positive onClick={() => props.editForm(courseDetail)}>
                  Edit
                </Button>
                <Button negative onClick={() => props.deleteMovie(courseDetail.id)}>
                  {" "}
                  Delete
                </Button>
               
              </Table.Cell>
            </Table.Row>
          ))}
               
        </Table.Body>

      </Table>
     
    </Fragment>
  );
}
