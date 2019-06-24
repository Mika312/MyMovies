import React, { Component } from 'react';
import {
  Button,
  Row,
  Popover,
  PopoverHeader,
  PopoverBody,
  Container,
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

    var MovieNameList= [
                        "L'Odyssée de Pi",
                        "Maléfique", 
                        "Les Aventures de Tintin",
                        "L'Odyssée de Pi",
                        "Maléfique", 
                        "Les Aventures de Tintin",
                      ];

    var MovieCount= MovieNameList.length;

    var MovieLast

    if (MovieNameList.length === 0){
      MovieLast = "Tu n'as aucun Film preferé"
    }else if  (MovieNameList.length <= 3){
      MovieLast = MovieNameList.join(', ')
      }else{
        MovieLast = MovieNameList.splice(-3).join(', ') + '...';
      }
      console.log("MOVIELAST ===>",MovieLast)

    var MovieData=[{name : "L'Odyssée de Pi",
                    desc: "Après que leur bateau est victime d'une violente tempête et coule au fond du Pacifique, un adolescent et un tigre du Bengale …",
                    img : "/pi.jpg"
                   },
                   {name : "Maléfique",
                    desc: "Poussée par la vengeance et une volonté farouche de protéger les terres qu'elle préside, Maléfique place ...",
                    img : " /malefique.jpg"
                   },
                   {name : "Les Aventures de Tintin",
                    desc: "Parce qu'il achète la maquette d'un bateau appelé la Licorne, Tintin, un jeune reporter, se retrouve entraîné dans une fantastique aventure...",
                    img : "/tintin.jpg"
                   },
                  ]

    var MovieList=[];

    for(var i = 0; i < MovieData.length; i++){
      MovieList.push(<Movie MovieName={MovieData[i].name} MovieDesc={MovieData[i].desc} MovieImg={MovieData[i].img} key={i}/>);
    }



    return (
      
      <div style={{flex:1}}>

        <Row style={{flex:1, color:'white', backgroundColor:'#f39c12',alignItems:"center", paddingLeft:15, borderBottom:'1px solid #8e44ad'}}>
        <FontAwesomeIcon size="3x"  style={{marginLeft:15}} icon={faFilm}/>
        <a href="#" style={{color:"#FFF", marginLeft:15, alignContent:'center'}}>Last Releases</a>
        <a href="#" style={{color:"#FFF", marginLeft:15}}>My Movies</a>
        <Button id="Popover1" type="button" style={{marginLeft:15,backgroundColor:'#8e44ad',borderColor:'#8e44ad'}}>{MovieCount} {MovieCount>1 ? 'Films' : 'Film'} </Button>
        <Popover placement="right" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Mes Films</PopoverHeader>
          <PopoverBody>{MovieLast}</PopoverBody>
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
