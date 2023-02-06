import axios from "axios";
import "./App.css";
import { v4 as uuid } from "uuid";
import NavBar from "./components/NavBar";
import { useEffect, useState,useRef } from "react";
import CoursesDashboard from "./components/CoursesDashboard";
import { toast, ToastContainer } from "react-toastify";
function App() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState();
  const [showAddForm, setshowAddForm] = useState(false);
  const [showEditForm, setshowEditForm] = useState(false);
  const [showCourseTable, setshowCourseTable] = useState(true);
  const [showCourseDetailTable, setshowCourseDetailTable] = useState(false);
  const [showDetailForm, setshowDetailForm] = useState(false);
  const [courseDetails, setCourseDetails] = useState([]);


  const isMounted = useRef(false);

  useEffect(() => {
      console.log('started');
      if (isMounted.current) {
          console.log('mounted');
      } else {
        axios.get("http://localhost:52706/api/courses").then((response) => {
          setCourses(response.data);
        });
          console.log('mounting');
          isMounted.current = true;
      }
  },[courses]);


  function GetCourseDetails(id) {
  

    axios.get(`http://localhost:52706/api/coursedetails/${id}`).then((response) => {
      setCourseDetails(response.data);
        });
  }



  function handleEditCourse(course) {
    axios({
      method: "put",
      url: `http://localhost:52706/api/courses/${course.id}`,
      data: {
        Id: course.id,
        Name: course.name,
        StartDate: course.startDate,
        EndDate: course.endDate,
        Status: course.status,
      },
      config: {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    })
      .then((response) => {
        console.log(response);
        toast.success("Course updated successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        console.log("the error has occured: " + error);
      });

    setCourses([...courses, course]);
  }
  function handleCourseDetail(courseDetail) {
    const data = {
      Id: uuid(),
        CourseId: courseDetail.courseId,
        CourseName: courseDetail.courseName,
        CourseDescription: courseDetail.courseDescription,
        CourseUrlPath: courseDetail.courseUrlPath,
    };
    axios({
      method: "post",
      url: `http://localhost:52706/api/coursedetails`,
      data: data,
      config: {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    })
      .then((response) => {
        console.log(response);
        toast.success("Course detail updated successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        console.log("the error has occured: " + error);
      });
      setCourseDetails([...courseDetails.filter((x) => x.courseId === courseDetail.courseId), courseDetail]);
  }
  function handleSumbit(course) {
    const data = {
      Id: uuid(),
      Name: course.name,
      StartDate: course.startDate,
      EndDate: course.endDate,
      Status: course.status,
    };
    axios({
      method: "post",
      url: "http://localhost:52706/api/courses",
      data: data,
      config: {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    })
      .then((response) => {
        console.log(response);
        toast.success("Course added successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        axios.get("http://localhost:52706/api/courses").then((response) => {
          setCourses(response.data);
        });
      })
      .catch((error) => {
        console.log("the error has occured: " + error);
      });
     

    setCourses([...courses, data]);
  }
  function courseTable() {
    setshowCourseDetailTable(false);
    setshowCourseTable(true);


  }
  function courseDetailTable(id) {

    setshowCourseDetailTable(true);
    setshowCourseTable(false);
    GetCourseDetails(id)


  }
  function addForm() {
    setshowEditForm(false);
    setshowAddForm(true);
    setshowDetailForm(false);
    setshowCourseDetailTable(false);
    setshowCourseTable(true);
  }
  function addDetailForm(course) {
    setCourse("");
    setshowEditForm(false);
    setshowAddForm(false);
    setshowDetailForm(true);
    setCourse(course);
  }
  function closeForm() {
    setshowAddForm(false);
    setshowEditForm(false);
    setshowDetailForm(false);
    setCourse("");
  }
  function closeDetailTable() {
    setshowCourseTable(false);
    setCourseDetails("");
  }
  
  

  function editForm(course) {
    setCourse("");
    setshowAddForm(false);
    setshowEditForm(true);
    setshowDetailForm(false);
    setCourse(course);
  }

  function deleteCourse(id) {
    setshowEditForm(false);
    setshowDetailForm(false);
    setCourse("");
    axios.delete(`http://localhost:52706/api/courses/${id}`).then(() => {
      toast.success("Course deleted successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    });

    setCourses([...courses.filter((x) => x.id !== id)]);
  }

  return (
    <div>
      <NavBar addForm={addForm} />
      <h1>Courses Data</h1>
      <CoursesDashboard
        courses={courses}
        showAddForm={showAddForm}
        showCourseTable={showCourseTable}
        showCourseDetailTable={showCourseDetailTable}
        showEditForm={showEditForm}
        showDetailForm={showDetailForm}
        addDetailForm={addDetailForm}
        editForm={editForm}
        course={course}
        deleteCourse={deleteCourse}
        closeForm={closeForm}
        courseTable={courseTable}
        courseDetailTable={courseDetailTable}
        handleSumbit={handleSumbit}
        handleEditCourse={handleEditCourse}
        handleCourseDetail={handleCourseDetail}
        courseDetails={courseDetails}
        getCourseDetails={GetCourseDetails}
        closeDetailTable={closeDetailTable}

      />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
