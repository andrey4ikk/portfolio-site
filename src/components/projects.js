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
                    <CardTitle style={{color: '#fff', height: '200px', background: 
                    'url(https://reactjs.org/logo-og.png) center / cover' }}>React Project #1</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button> 
                        <Button colored>Live Demo</Button> 
                    </CardActions>
                </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: '25px'}}>
                    <CardTitle style={{color: '#fff', height: '200px', background: 
                    'url(https://reactjs.org/logo-og.png) center / cover' }}>React Project #2</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button> 
                        <Button colored>Live Demo</Button> 
                    </CardActions>
                </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: '25px'}}>
                    <CardTitle style={{color: '#fff', height: '200px', background: 
                    'url(https://reactjs.org/logo-og.png) center / cover' }}>React Project #3</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                    <CardActions border>
                        <Button colored style={{margin: '20px'}}>Github</Button> 
                        <Button colored>Live Demo</Button> 
                    </CardActions>
                </Card>
            
                </div>
                
            )
        } else if( this.state.activeTab === 1) {
            return (
                <div><h1>This is Angular</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1> This is Layout</h1></div>
            )
        }
  
    }
    render() {
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
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