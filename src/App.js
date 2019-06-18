import React, { Component } from 'react';
import './App.css';
import images from "./images.json";
import ImageCard from "./components/imageCard";
import Scores from "./components/Scores";

class App extends Component {

  state = {
    images,
    score: 0,
    topScore: 0,
    correct:false
  };


  clickImage = id => {


    this.state.images.forEach(item => {
      if (item.id === id && item.clicked === false) {
        item.clicked = true;
        
        this.setState({ images, correct:true }, () => this.countScore())
        // console.log(images);
        // this.countScore();
      }
      else if (item.id === id && item.clicked === true) {

        this.countTopScore();
      }
    });

  };



  countScore = () => {
    this.setState({ score: this.state.score + 1 }, () => this.shuffle());


  }

  countTopScore = () => {



    this.state.images.forEach(item => {

      item.clicked = false;

    });


    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score,
        images, score: 0,  correct:false
      });
    }
    else {
      this.setState({
        images,
        score: 0,
        correct:false
      });
    }


  }


  shuffle = () => {
    for (var i = this.state.images.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.state.images[i];
      this.state.images[i] = this.state.images[j];
      this.state.images[j] = temp;

    }

    this.setState({
      images
    });
    console.log(images);
  }





  render() {
    return (
      <div>
        <div id="scores">


          <Scores score={this.state.score} topScore={this.state.topScore} /></div><h1>CLICKY GAME</h1>{this.state.correct ? (
  <div className="result">CORRECT!<br /><br /></div>
) : (<div className="result">START THE ROUND!<br /><br /></div>)}

        <div id="wrapper">
          {this.state.images.map(image => (
            <ImageCard
              clickImage={this.clickImage}
              id={image.id}
              href={image.href}
              clicked={image.clicked}


            />
          ))}
          
          </div>
      </div>
    );
  }
}

export default App;

