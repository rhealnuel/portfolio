import React from "react";
import './skills.css';
import css from '../images/csspic.png';
import html from '../images/htmlpic.png';
import react from '../images/reacpic.png';


function Skills() {
    return(
        <div className="skills">
            <div className='general'>
                <div className='div1'>
                    <img src={html} alt="html" className='htmlpic'/>
                    <h4 className="skillsh4">HTML</h4>
                    <p className="skillp"> I value simple content<br/>
                    structure, clean design<br/> 
                    patterns and thoughtful<br/>
                    interactions </p>
                </div>
                <div className='div2'>
                    <img src={css} alt="html" className='htmlpic'/>
                    <h4 className="skillsh4">CSS</h4>
                    <p className="skillp"> I value simple content<br/>
                    structure, clean design<br/> 
                    patterns and thoughtful<br/>
                    interactions </p>
                </div>
                <div className='div3'>
                    <img src={react} alt="html" className='htmlpic'/>
                    <h4 className="skillsh4">REACT</h4>
                    <p className="skillp"> I value simple content<br/>
                    structure, clean design<br/> 
                    patterns and thoughtful<br/>
                    interactions </p>
                </div>
            </div>
        </div>
    )
}
export default Skills;