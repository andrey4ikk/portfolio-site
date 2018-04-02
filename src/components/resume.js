import React , { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import photoLandingPage from '../../src/img/photo.jpg';


class Resume extends Component {
    render() {
        return(
         <div>
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img
                    src={photoLandingPage}
                    alt=""
                    style={{height: '250px'}}
                    />
                    </div>
                    <h2 style={{paddingTop: '1em' }}>Andrey Duka</h2>
                    <a className="button_pdf" href="img/Andrey Duka(Front end developer).pdf"  download >Download resume</a>
                    <h4 style={{color: 'grey'}}>Front end developer</h4>
                    <hr style={{borderTop: '3px solid #833fb2'}} /> 
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <hr style={{borderTop: '3px solid #833fb2'}} /> 
                    <h5>Location</h5>
                    <p>Lviv</p>
                    <h5>Phone</h5>
                    <p> +38(066)826-46-80</p>
                    <h5>Email</h5>
                    <p>andd1.duka@gmail.com</p>
                    <hr style={{borderTop: '3px solid #833fb2'}}/>
                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>

                    <Education 
                    startYear={2010}
                    endYear={2015}
                    schoolName="National University of Water Management and Nature Resources Use"
                    schoolSpecialization="Specialization: Energetics" 
                    schoolQualification="Qualification level: Specialist" 
                    /> 
                    <hr style={{borderTop: '3px solid #e22947'}} />

                     <h2>Skills</h2>
                     <Skills 
                        skill="Javascript"
                        progress={60}
                     />
                     <Skills 
                        skill="HTML/CSS"
                        progress={85}
                    />
                    <Skills
                        skill="SASS"
                        progress={75}
                    />
                    <Skills
                        skill="React"
                        progress={40}
                    />
                    <Skills
                        skill="Redux"
                        progress={30}
                    />
                </Cell>
            </Grid>
         </div>
        )
    }
}

export default Resume;