import { Grid } from "semantic-ui-react";
import AddCourse from "./AddCourse";
import CoursesTable from "./CoursesTable";
import CourseDetailsTable from "./CourseDetailsTable";
import EditCourse from "./EditCourse";
import AddCourseDetail from "./AddCourseDetail";

export default function CoursesDashboard(props) {
  return (
    <Grid>
      <Grid.Column width="10">
        {<CoursesTable courses={props.courses} editForm={props.editForm} deleteCourse={props.deleteCourse} addDetailForm={props.addDetailForm} courseDetailTable={props.courseDetailTable} />}
        {props.showCourseDetailTable && (<CourseDetailsTable courseDetails={props.courseDetails} courseTable={props.courseTable} closeDetailTable={props.closeDetailTable} />)}
      </Grid.Column>
      <Grid.Column width="3">
        {props.showAddForm && (<AddCourse closeForm={props.closeForm} handleSumbit={props.handleSumbit} courses={props.courses} />)}
        {props.showEditForm && (<EditCourse course={props.course} closeForm={props.closeForm} handleEditCourse={props.handleEditCourse} />)}
        {props.showDetailForm && (<AddCourseDetail course={props.course} closeForm={props.closeForm} handleCourseDetail={props.handleCourseDetail} />)}
      </Grid.Column>
    </Grid>
  );
}
