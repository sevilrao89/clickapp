import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Card } from "../components/Card";
import beigeDoodleImg from "../imgs/beigedoodle.jpg"
import brownDoodleImg from  "../imgs/browndoodle.jpg"
import labradorImg from  "../imgs/labrador.jpg"
import blackLabImg from  "../imgs/blacklab.jpg"
import pomImg from  "../imgs/pom.jpg"
import pomTwoImg from  "../imgs/pom2.jpg"
import huskyImg from  "../imgs/husky.jpg"
import huskyTwoImg from  "../imgs/husky2.jpg"

class Game extends Component {
  state = {
    cards: [{type: "doodle1", img: beigeDoodleImg, id:0},{type: "doodle2", img:brownDoodleImg, id:1},{type:"lab1", img:labradorImg, id:2},{type:"lab2", img:blackLabImg, id:3},{type:"pom1", img:pomImg, id:4},{type:"pom2", img:pomTwoImg, id:5},{type:"husky1", img:huskyImg, id:6},{type:"husky2", img:huskyTwoImg, id:7}],
    gameCards: [{type: "doodle1", img: beigeDoodleImg},{type: "doodle2", img:brownDoodleImg},{type:"lab1", img:labradorImg},{type:"lab2", img:blackLabImg},{type:"pom1", img:pomImg},{type:"pom2", img:pomTwoImg},{type:"husky1", img:huskyImg},{type:"husky2", img:huskyTwoImg}],
    selected: []
    

  };
componentDidMount(){
this.shuffleArray("cards")
}

shuffle =(a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
  shuffleArray = (arr) =>{
      if(arr == "cards"){
        this.setState({
          cards: this.shuffle(this.state.cards)
        })
      }
      else{
        this.setState({
          cards: this.shuffle(this.state.cards)
        })
        if(this.state.selected.length < 1){
          var temp = this.state.selected
          temp.push(arr)
          this.setState({
            selected: temp
          })
        }
        else{
          var temp = this.state.selected
          temp.push(arr)
          this.setState({
            selected: temp
          })
          if(this.state.selected[0].slice(0,-1) == this.state.selected[1].slice(0,-1) && this.state.selected[0].slice(-1)!== this.state.selected[1].slice(-1)){
            this.setState({
              selected: []
              
            })
            alert("you won!")
          }
          else{
            this.setState({
              selected: []
            })
            
            alert("you lost!")
          }
        }
      }
  };

  clickCard = (card) => {
    this.shuffleArray(card)
  }
  // loadArticles = () => {
  //   API.getArticles()
  //     .then(res => this.setState({ articles: res.data, headline: "", url: "" }))
  //     .catch(err => console.log(err));
  // };

  // loadNytArticles = (res) => {
  //   console.log(res)
  // this.setState({ nytArticles: res.apiData, keyword: ""})

  // }


 

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <h1> This is the game component! </h1>
         <div id ="gameboard">
           

        
          {this.state.cards.map(card=>
         
          <Card key={card.id} onClick={() => this.clickCard(card.type)} imgSrc={card.img}/>
          
          )}
          </div>
                  </Col>
          
         </Row> 
      </Container>
    );
  }
}

export default Game;
