/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback, useRef } from 'react'

function NumbersSection() {
    const [start, setStart] = useState(true);
    const sectionRef = useRef();
    function startCount(element) {
        let goal = element.dataset.goal;
        let count = setInterval(() => {
            if (element.textContent == goal) {
                clearInterval(count);
                setStart(false);
            } else {
                element.textContent++;
            }
        }, 3000 / goal)
    }
    // //scrolling callback func to increase number 
    const onScroll = useCallback(event => {
        const top = sectionRef?.current?.offsetTop ?? 0;
        let data_content = document.querySelectorAll('.data_content .data');
        if (window.scrollY >= top - 400) {
            if (start) {
                data_content.forEach(data => startCount(data))
            }
            // setStart(true);
        }
    }, [start]);

    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll);
        () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);
    return (
        <section ref={sectionRef} >
            <div className='numbers_section container'>
                <div className="numbers_section_left">
                    <h1>WE ARE YOUR PARTNER IN BUILDING AGENCY</h1>
                    <img src={`/assets/numberSection.jpg`} alt=""
                        className="numbers_section_left_img" />
                </div>
                <div className="numbers_section_right">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <div className='data_content'>
                        <div className='data_in_detail'>
                            <div className='data' data-goal="25" >0</div>
                            <span>Years Of Exprience</span>
                        </div>
                        <div className='data_in_detail'>
                            <div className='data' data-goal="80" >0</div>
                            <span>Happy Agency</span>
                        </div>
                        <div className='data_in_detail'>
                            <div className='data' data-goal="63" >0</div>
                            <span>Aewards Wins</span>
                        </div>
                    </div>
                    <div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default NumbersSection