import React from 'react'

function MyCourseCard({ myCourse }) {
    console.log(myCourse)
    const newTitle = myCourse.title.toUpperCase()
    return (
        <div className='main-section__courses-item'>
            <div className='main-section__courses-item-img'>
                <img src="https://startupvadisi.com/wp-content/uploads/2020/05/onlineedu-960x540.jpg" alt="" />
            </div>
            <div className='main-section__courses-item-info'>
                <div className='main-section__courses-item-info-title'>
                    <h3>{newTitle}</h3>
                </div>
                <div className='main-section__courses-item-info-description'>
                    <p>{myCourse.description}</p>
                </div>
            </div>
        </div>
    )
}

export default MyCourseCard