import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'

const CoursesPage = (props) => {
  const { courses, createCourse } = props

  const [course, setCourse] = useState({
    title: '',
  })

  const handleChange = (event) => {
    const cloneCourse = {
      ...course,
      title: event.target.value,
    }
    setCourse(cloneCourse)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createCourse(course)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input
        type="text"
        value={course.title}
        onChange={handleChange}
      />
      <input type="submit" value="Save" />
      {courses.map((element) => (
        <div key={element.title}>
          {element.title}
        </div>
      ))}
    </form>
  )
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
  }
}

const mapDispatchToProps = {
  createCourse: courseActions.createCourse,
}

CoursesPage.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ).isRequired,
  createCourse: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoursesPage)
