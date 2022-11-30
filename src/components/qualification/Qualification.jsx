import React, {useState} from 'react';
import './qualification.css';


const Qualification = () => {
    const[toggleState,setToggleState] =useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

  return (
   <section className="qualification section" id='qualification'>
     <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" :
                 "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" :
                 "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" :
                 "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.tech (CSE)</h3>
                            <span className="qualification__subtitle">United College of Eng & Research</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>

                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">HSC(Class XIIth)</h3>
                            <span className="qualification__subtitle">Mission Public School</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2017 - 2018
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">SSC(Class Xth)</h3>
                            <span className="qualification__subtitle">St. Thomas School</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2015 - 2016
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    {/* <div className="qualification__data">
                        <div></div>

                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <span className="qualification__subtitle">United College of Eng & Research</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - 2020
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" :
                 "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Node.js Developer</h3>
                            <span className="qualification__subtitle">Probatio Technologies</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                08/2022 - 09/2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>

                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Hotel Reservation</h3>
                            <span className="qualification__subtitle">MERN</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">First AID Heathcare</h3>
                            <span className="qualification__subtitle">MERN</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
   
                    </div>
                </div>
            </div>
        </div>

   </section>
  )
}

export default Qualification
