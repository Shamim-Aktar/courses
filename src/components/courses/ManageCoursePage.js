import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import {loadCourses} from "../../redux/actions/courseActions";
import {loadAuthors} from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import CourseForm from "./CourseForm";

function ManageCoursePage({ courses, authors, loadAuthors, loadCourses, ...props }) {

    const [course, setCourse]=useState({...props.course})
    const [errors, setErrors]=useState({})
 useEffect(()=>{
    if (courses.length === 0) {
        loadCourses().catch(error => {
          alert("Loading courses failed" + error);
        });
      }
  
      if (authors.length === 0) {
        loadAuthors().catch(error => {
          alert("Loading authors failed" + error);
        });
      }
 },[])
   
    return (
      <CourseForm course={course} errors={errors} authors={authors}/>
    );
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses:PropTypes.func.isRequired,
  loadAuthors:PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    courses:state.courses,   
    authors: state.authors
  };
}

const mapDispatchToProps= {
      loadCourses: loadCourses,
      loadAuthors: loadAuthors
  };


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
