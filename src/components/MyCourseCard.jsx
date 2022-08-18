import React from 'react'
import Modal from './Modal'
import "./MyCourseCard.css"

function MyCourseCard({ myCourse }) {
    const newTitle = myCourse.title.toUpperCase()
    return (
        <div className='main-section__courses-item'>
            <div className='main-section__courses-item-img'>
                <img src="https://startupvadisi.com/wp-content/uploads/2020/05/onlineedu-960x540.jpg" alt="" />
            </div>
            <div className='main-section__courses-item-info'>
                <div className='main-section__courses-item-info-title'>
                    <h3 style={{ height: "4.8rem", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5px" }}>{newTitle}</h3>
                </div>
                <div className='main-section__courses-item-info-description'>
                </div>
            </div>
            <Modal title={newTitle} content={myCourse.description} />
        </div>
    )
}

export default MyCourseCard