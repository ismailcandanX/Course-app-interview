import "./CourseCard.css"
import Modal from "./Modal"

function CourseCard({ course }) {
    const newTitle = course.slug.replace(/-/g, " ").toUpperCase()
    return (
        <div className='main-section__courses-item' >
            <div className='main-section__courses-item-img'>
                <img src="https://startupvadisi.com/wp-content/uploads/2020/05/onlineedu-960x540.jpg" alt="" />
            </div>
            <div className='main-section__courses-item-info'>
                <div className='main-section__courses-item-info-title'>
                    <h3 style={{ height: "4.8rem", display: "flex", justifyContent: "center", alignItems: "center" }}>{newTitle}</h3>
                </div>
            </div>
            <Modal title={newTitle} course={course} content={course.content.rendered} />
        </div>
    )
}

export default CourseCard