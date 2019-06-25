import React, { Component } from 'react';
import {Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



class Movie extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);

        this.state = { like: false };
    }


    handleClick(){
        console.log("click détécté");
        console.log("STATE LIKE ===>",this.state.like)
        this.setState ({
            like : !this.state.like        
        })
      }


    render(){

        var heartColor;

        if(this.state.like){
            heartColor = '#e74c3c';
        }else if(!this.state.like) {
            heartColor = '#2c3e50';
        }

        var card = {
            display :'',
            flex:1,
            marginTop:20
          }
    
          if (!this.state.like  && this.props.displayOnlyLike) {
           card.display = 'none'
          }

        const styles = {
          cardImage:{
               border:'1px solid #8e44ad',
               borderTopLeftRadius:10,
               borderTopRightRadius:10,
               borderBottomWidth:0
              },
           image:{
               borderTopLeftRadius:8,
               borderTopRightRadius:8
              },
           heart:{
               position:'absolute',
               top:'6%', 
               left:'80%',
               color: heartColor
              },
           cardBottom:{
               border:'1px solid #8e44ad', 
               backgroundColor:'#f39c12',
               borderBottomLeftRadius:10,
               borderBottomRightRadius:10,
               padding:10,
               height:180
              },
           cardTitle:{
              color:'#8e44ad'
              },
           cardText:{
              color:'#8e44ad'
              }
         };
      

      return(
  
            <Col lg="3" md="4" sm="6">
               <div style={card}>
                   <div style={styles.cardImage}>
                        <img src={this.props.MovieImg} width='100%' style={styles.image}/>
                        <FontAwesomeIcon onClick={this.handleClick} size="2x"  style={styles.heart} icon={faHeart}/>
                   </div>
                   <div style={styles.cardBottom}>
                        <h5 style={styles.cardTitle}>{this.props.MovieName}</h5>
                        <p style={styles.cardText}>{this.props.MovieDesc}</p>
                   </div>
               </div>
            </Col>
  
      )
    }
  }


  export default Movie;
  