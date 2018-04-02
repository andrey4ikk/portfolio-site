import React , { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            activeTab: 0 
        };
    }

    toggleCategories() {
        
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    
                    <Card shadow={5} style={{minWidth: '450', margin: '25px'}}>
                    <CardTitle style={{color: '', height: '200px', fontSize: '100px', background: 
                    'url(http://i.piccy.info/i9/dc7c072d55f731fdd222b520faf31239/1522426331/102963/1233504/myWebsite.jpg) center / cover' }}></CardTitle>
                    <CardText >
                        Used: Javascript, ReactJs,
                        React-MDL, HTML/CSS
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <Button href="https://github.com/andrey4ikk/portfolio-site" rel="noopener noreferrer" target="_blank" colored >Github</Button> 
                        <Button href="https://andrey-duka.herokuapp.com/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button> 
                    </CardActions>
                </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: '25px'}}>
                    <CardTitle style={{color: '', height: '200px', background: 
                    'url(http://i.piccy.info/i9/b217840b1c3055cf48a8eea5f49bb91c/1522426566/86402/1233504/react_form.jpg) center / cover' }}></CardTitle>
                    <CardText>
                    Used: Javascript, ReactJs, Material UI, HTML/CSS
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <Button href="https://github.com/andrey4ikk/react-form" rel="noopener noreferrer" target="_blank" colored>Github</Button> 
                        <Button href="https://react-form-material.herokuapp.com/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button> 
                    </CardActions>
                </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: '25px'}}>
                    <CardTitle style={{ color: '', height: '200px', background: 
                    'url(https://reactjs.org/logo-og.png) center / cover' }}></CardTitle>
                    <CardText>
                    Used: Javascript, ReactJs, HTML/CSS , Openweathermap
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <Button href="https://github.com/andrey4ikk/reactjs-weather-app" rel="noopener noreferrer" target="_blank" colored>Github</Button> 
                    </CardActions>
                </Card>
            
                </div>   
                
            )
        }  else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">

                <Card shadow={5} style={{minWidth: '450', margin: '25px'}}>
                <CardTitle style={{color: '', height: '200px', background: 
                'url(http://i.piccy.info/i9/51c078f96546049bc2dd8d4caf2d168e/1522426182/58607/1233504/landing_mockup.jpg) center / cover' }}></CardTitle>
                <CardText>
                    Used: HTML/CSS/SASS, Javascript, jQuery
                </CardText>
                <CardActions borde style={{textAlign: 'center'}}>
                    <Button href="https://github.com/andrey4ikk/landing-mockup" rel="noopener noreferrer" target="_blank" colored>Github</Button> 
                    <Button href="https://andrey4ikk.github.io/landing-page/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button> 
                </CardActions>
            </Card>

                <Card shadow={5} style={{minWidth: '450', margin: '25px'}}>
                <CardTitle style={{color: '', height: '200px', background: 
                'url(http://freebiesxpress.com/wp-content/uploads/2014/02/Treehouse-Home-Page-Main.jpg) center / cover' }}></CardTitle>
                <CardText>
                   Used: HTML/CSS/LESS, Javascript, jQuery
                </CardText>
                <CardActions border style={{textAlign: 'center'}}>
                    <Button href="https://www.linkedin.com/in/andrey4ikk/" rel="noopener noreferrer" target="_blank" colored>Github</Button> 
                    <Button href="https://andrey4ikk.github.io/treehouse-mockup/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button> 
                </CardActions>
            </Card>
        
            </div>   
            
                
            )
        }
  
    }
    render() {
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React app</Tab>
                    <Tab>Layout</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>  
                </section>
            </div>
        )
    }
}

export default Projects;