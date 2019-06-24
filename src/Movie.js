import React, { Component } from 'react';
import {Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



class Movie extends Component {
    render(){
  
    
  
      return(
  
            <Col lg="3" md="4" sm="6">
               <div style={{flex:1, marginTop:20}}>
                   <div style={{border:'1px solid #8e44ad',borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomWidth:0}}>
                        <img src="../thumb.jpg" width='100%' style={{borderTopLeftRadius:8,borderTopRightRadius:8}}/>
                        <FontAwesomeIcon size="2x"  style={{position:'absolute', top:'6%', left:'80%',color:'#e74c3c'}} icon={faHeart}/>
                        
                   </div>
                   <div style={{border:'1px solid #8e44ad', backgroundColor:'#f39c12',borderBottomLeftRadius:10,borderBottomRightRadius:10,padding:10,height:180}}>
                        <h4 style={{color:'#8e44ad'}}>Titre de Film</h4>
                        <p style={{color:'#8e44ad'}}>Resumé du Film</p>
                   </div>
               </div>
            </Col>
  
      )
    }
  }

  

  export default Movie;
  