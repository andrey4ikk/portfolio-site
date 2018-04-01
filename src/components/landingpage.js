import React , { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import photoLandingPage from '../../src/img/photo.jpg';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                <Cell col={12}>
                    <img 
                        src={photoLandingPage}
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Front End Developer</h1>
                        <hr />
                        <p>HTML/CSS/SASS/LESS | Bootstrap | Javascript | React | Redux</p>

                        <div className="social-links">
                            
                            <a href="https://www.linkedin.com/in/andrey4ikk/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>

                            <a href="https://github.com/andrey4ikk" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>

                            <a href="https://www.facebook.com/andreyjkeee" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square"  aria-hidden="true" />
                            </a>
                            

                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;