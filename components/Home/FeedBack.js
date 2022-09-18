/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from 'react'
//fontawsome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as filledStar, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faStar as EmptyStar } from '@fortawesome/free-regular-svg-icons'
// import feedback from '../../data/feedback.json'
// import { faStar } from '@fortawesome/free-regular-svg-icons'
const star = [1, 2, 3, 4, 5];
function FeedBack({ feedback }) {
    const feedbackRef = useRef();
    const scroll_left = () => {
        feedbackRef.current.scrollLeft -= feedbackRef.current.getBoundingClientRect().width;
    }
    const scroll_right = () => {
        feedbackRef.current.scrollLeft += feedbackRef.current.getBoundingClientRect().width;
    }
    return (
        <div className="feedback">
            <div className="feedback_container container">
                <h1>Waht Our Customers Say About Us</h1>
                <div className="content" ref={feedbackRef}>
                    <div className="customers_feedback">
                        {feedback.map((user, i) => (
                            <div className="feedback_message" key={user.id}>
                                <span>0{i + 1}</span>
                                <h1>What do you think of our services?</h1>
                                <p>{user.msg}</p>
                                <div className="customer_data">
                                    <div className="customer_profile">
                                        <img src={user.avatar} alt="" />
                                        <h4>{user.name}</h4>
                                    </div>
                                    <div className="customer_rate">
                                        {Array.from({ length: 5 }).map((s, i) =>
                                            <FontAwesomeIcon icon={i + 1 <= user.rating ? filledStar : EmptyStar} color='yellow' key={i} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div className="arrows">
                    <FontAwesomeIcon
                        icon={faArrowAltCircleLeft}
                        color='white' size='2x' onClick={scroll_left} />
                    <FontAwesomeIcon
                        icon={faArrowAltCircleRight}
                        color='white' size='2x' onClick={scroll_right} />
                </div>
            </div>
        </div>
    )
}

export default FeedBack