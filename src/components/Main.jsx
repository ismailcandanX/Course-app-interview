import axios from 'axios';
import React, { useEffect } from 'react'
import CourseCard from './CourseCard'
import uniqid from 'uniqid';
import "./Main.css"
import MyCourseCard from './MyCourseCard';

function Main() {
    const [course, setCourse] = React.useState([]);
    const [myCourse, setMyCourse] = React.useState([]);
    const [select, setSelect] = React.useState("course");
    useEffect(() => {
        courseData()
        myCourseData()
    }, [])
    const courseData = async () => {
        const res = await axios.get("https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/sfwd-courses")
        setCourse(res.data)
    }
    const myCourseData = async () => {
        const res = await axios.get("https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/my_courses")
        setMyCourse(res.data)
    }
    const handleCourse = () => {
        setSelect("course")
    }
    const handleMyCourse = () => {
        setSelect("myCourse")
    }

    return (
        <section className='app__main-section'>
            <div className='main-section__buttons'>
                <button className='main-section__buttons-btn' onClick={handleCourse}>Courses</button>
                <button className='main-section__buttons-btn' onClick={handleMyCourse}>My Courses</button>
            </div>
            <div className='main-section__courses'>
                {select === "course" ? course.map(course => <CourseCard course={course} key={uniqid()} />)
                    : myCourse.map(myCourse => <MyCourseCard myCourse={myCourse} key={uniqid()} />)}
            </div>
        </section>
    )
}

export default Main