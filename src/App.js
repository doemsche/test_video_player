import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from 'react-slick'
import ReactPlayer from 'react-player'

class App extends Component {
  state={p:false}
  playme(){
    this.setState({p:!this.state.p})
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="App">
       <Slider {...settings}>
       
        <div>
        <ReactPlayer url='https://www.youtube.com/watch?v=d46Azg3Pm4c' />
        </div>
        <div onClick={this.playme.bind(this)}>
          <ReactPlayer playing={this.state.p} url='./02.mp4' />
        </div>
       
        <div onClick={this.playme.bind(this)}>
        <ReactPlayer playing={this.state.p} url='./01.mp4' />
        </div>
        <div>
          <video src="./01.mp4" />
        </div>
         </Slider>
         
    
      </div>
    );
  }
}

export default App;
