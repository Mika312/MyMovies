import React, { Component } from 'react';
import {Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



class Movie extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = { 
            like: this.props.movieLiked,
        };
    }




    handleClick(){
        // console.log("click détécté");
        // console.log("STATE LIKE ===>",this.state.like);
        var isLike = !this.state.like;
        this.props.handleClickParent(!this.state.like,this.props.MovieName)
        this.setState ({
            like : !this.state.like,
        })
        if (isLike) {
            fetch('http://localHost:3000/mymovies', {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: 'title=' + this.props.MovieName + '&overview=' + this.props.MovieDesc + '&poster_path=' + this.props.MovieImg + '&id=' + this.props.idMovie 
            });
            } else {
            fetch('http://localHost:3000/mymovies/'+this.props.idMovie+'', {
            method: 'DELETE'
            });
            }
          
      }


    render(){

        var heartColor;

        if(this.state.like){
            heartColor = '#e74c3c';
        }else if(!this.state.like) {
            heartColor = '#2c3e50';
        }

        var display = {
            display : null,
          }
    
          if (!this.state.like  && this.props.displayOnlyLike) {
            display.display = 'none'
          }

        const styles = {
         card:{
                flex:1,
                marginTop:20
              },
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
               height:200
              },
           cardTitle:{
              color:'#8e44ad'
              },
           cardText:{
              color:'#8e44ad'
              }
         };
      

      return(
  
            <Col lg="3" md="4" sm="6" style={display}>
               <div style={styles.card}>
                   <div style={styles.cardImage}> 
                        <img src={'https://image.tmdb.org/t/p/w500'+this.props.MovieImg+''} width='100%' height='350px' style={styles.image}/>
                        <FontAwesomeIcon onClick={this.handleClick} size="2x"  style={styles.heart} icon={faHeart}/>
                   </div>
                   <div style={styles.cardBottom}>
                        <h5 style={styles.cardTitle}>{this.props.MovieName}</h5>
                        <p style={styles.cardText}>{this.props.MovieDesc.substr(0, 90) + ' ...'}</p>
                   </div>
               </div>
            </Col>
  
      )
    }
  }


  export default Movie;
  