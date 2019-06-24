import React, { Component } from 'react';
import {
  Button,
  Row,
  Popover,
  PopoverHeader,
  PopoverBody,
  Container,
  Col
   } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import Movie from './Movie';


class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }


  render(){

    var MovieList=[];

    for(var i = 0; i < 20; i++){
      MovieList.push(<Movie key={i}/>);
    }

    return (
      
      <div style={{flex:1}}>

        <Row style={{flex:1, color:'white', backgroundColor:'#f39c12',alignItems:"center", paddingLeft:15, borderBottom:'1px solid #8e44ad'}}>
        <FontAwesomeIcon size="3x"  style={{marginLeft:15}} icon={faFilm}/>
        <a href="#" style={{color:"#FFF", marginLeft:15, alignContent:'center'}}>Last Releases</a>
        <a href="#" style={{color:"#FFF", marginLeft:15}}>My Movies</a>
        <Button id="Popover1" type="button" style={{marginLeft:15,backgroundColor:'#8e44ad',borderColor:'#8e44ad'}}>0 Film</Button>
        <Popover placement="right" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Film</PopoverHeader>
          <PopoverBody>Titre de Film</PopoverBody>
        </Popover>
        </Row>

        <Container>
          <Row>
            {MovieList}
          </Row>
        </Container>
        
      </div>
    ) 
  }
}


export default App;
