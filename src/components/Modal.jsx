import React, { useEffect } from 'react'
import "./Modal.css"
function Modal({ title, content }) {
    const [isOpen, setIsOpen] = React.useState(false)
    const handleOpen = () => {
        setIsOpen(true)
    }
    useEffect(() => {
        if (isOpen) {
            document.getElementById("content").innerHTML = content
        } else {
            return
        }
    }, [isOpen])
    return (
        <div>
            <button onClick={handleOpen} className="btn">Get More Details</button>
            {isOpen && (
                <div className="modal" id='modal'>
                    <div className="modal-wrapper">
                        <div className="modal-header">
                            <h2>More details</h2>
                            <button onClick={() => setIsOpen(false)}>X</button>
                        </div>
                        <div className="modal-body">
                            <img src='https://startupvadisi.com/wp-content/uploads/2020/05/onlineedu-960x540.jpg' alt={title} style={{ maxWidth: "90% !important", marginRight: "1.5rem" }} />
                            <div>
                                <h3>{title}</h3>
                                <button className='modal__btn'>Buy Now</button>
                            </div>
                        </div>
                        <p id="content" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal