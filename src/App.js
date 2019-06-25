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

    this.handleClick =  this.handleClick.bind(this)
    this.handleClickOn = this.handleClickOn.bind(this);
    this.handleClickOff = this.handleClickOff.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
      viewOnlyLike:false,
      MoviesCount : 0,
      MovieNameList : [],
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }



handleClickOn(){
    // console.log("click détécté on");
    this.setState ({
      viewOnlyLike:true
    })
  };

  handleClickOff(){
    // console.log("click détécté off");
    this.setState ({
      viewOnlyLike:false
    })

  };


  handleClick(isLike,name){
    // console.log("Click deteté Like");
    console.log("STATE MOVIECOUNT ===>",this.state.MoviesCount)
    console.log("ISLIKE===>",isLike)
    console.log("NAME===>",name)

    var MovieNameListCopy = this.state.MovieNameList.concat();
    if(isLike){
      MovieNameListCopy.push(name);
    this.setState ({
      MoviesCount : this.state.MoviesCount + 1,
      MovieNameList : MovieNameListCopy
    })
    }else{
      var index = MovieNameListCopy.indexOf(name);
      MovieNameListCopy.splice(index, 1);
    this.setState ({
      MoviesCount : this.state.MoviesCount - 1,
      MovieNameList : MovieNameListCopy
    })
    }
  }


  render(){

    // var MovieNameList= [
    //                     "L'Odyssée de Pi",
    //                     "Maléfique", 
    //                     "Les Aventures de Tintin",
    //                     "L'Odyssée de Pi",
    //                     "Maléfique", 
    //                     "Les Aventures de Tintin",
    //                   ];

    // var MovieCount= MovieNameList.length;

    var MovieLast

    if (this.state.MovieNameList.length === 0){
      MovieLast = "Tu n'as aucun Film preferé"
    }else if  (this.state.MovieNameList.length <= 3){
      MovieLast = this.state.MovieNameList.join(', ')
    }else{
      MovieLast = this.state.MovieNameList.splice(-3).join(', ') + '...';
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
                   {name : "L'Odyssée de Pi",
                    desc: "Après que leur bateau est victime d'une violente tempête et coule au fond du Pacifique, un adolescent et un tigre du Bengale …",
                    img : "/pi.jpg"
                   },
                   {name : "L'Odyssée de Pi",
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
                   {name : "L'Odyssée de Pi",
                    desc: "Après que leur bateau est victime d'une violente tempête et coule au fond du Pacifique, un adolescent et un tigre du Bengale …",
                    img : "/pi.jpg"
                   },
                   {name : "L'Odyssée de Pi",
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
                   {name : "L'Odyssée de Pi",
                    desc: "Après que leur bateau est victime d'une violente tempête et coule au fond du Pacifique, un adolescent et un tigre du Bengale …",
                    img : "/pi.jpg"
                   },
                  ]

    var MovieList=[];

    for(var i = 0; i < MovieData.length; i++){
      MovieList.push(<Movie MovieName={MovieData[i].name} MovieDesc={MovieData[i].desc} MovieImg={MovieData[i].img} displayOnlyLike={this.state.viewOnlyLike} handleClickParent={this.handleClick} key={i}/>);
    }

    var link= {
      color:"#FFF", 
      marginLeft:15,
      textDecoration: 'none'
    };

    var link2= {
      color:"#FFF", 
      marginLeft:15,
      textDecoration: 'none'
    };

    if(!this.state.viewOnlyLike){
      link.color = '#8e44ad'
    }else if (this.state.viewOnlyLike){
      link2.color = '#8e44ad'  
    };


    const styles = {
      rowHeader:{
        flex:1,
        color:'white', 
        backgroundColor:'#f39c12',
        alignItems:"center", paddingLeft:15, 
        borderBottom:'1px solid #8e44ad'
      },
      iconHeader:{
        marginLeft:15
      },
      
      buttonHeader:{
        marginLeft:15,
        backgroundColor:'#8e44ad',
        borderColor:'#8e44ad'
      },
    
    };


    return (
      
      <div style={{flex:1}}>

        <Row style={styles.rowHeader}>
        <FontAwesomeIcon size="3x"  style={styles.iconHeader} icon={faFilm}/>
        <a onClick={this.handleClickOff} href="#" style={link}>Last Releases</a>
        <a onClick={this.handleClickOn} href="#" style={link2}>My Movies</a>
        <Button id="Popover1"  style={styles.buttonHeader}>{this.state.MoviesCount} {this.state.MoviesCount>1 ? 'Films' : 'Film'} </Button>
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
