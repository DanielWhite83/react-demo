import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HobbyCards from './HobbyCards';
import { useState, useLayoutEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'



function App() {
  // contains the details for the cards.
  // most likely, these would be kept in a database separately
  const [cardInfo, setCards] = useState([
    {
      id: 0,
      pos: 1,
      imgUrl: "https://cdn.hackernoon.com/images/z2xg2bpo.jpg",
      title: "React JS Demo",
      body: "Hello everyone! This is a quick demo of a scrolling card using react JS.",
    },  
    
    {
      id: 1,
      pos: 2,
      imgUrl: "https://theprayingwoman.com/wp-content/uploads/2016/07/Questionning-girl-1-e1458810899100.jpg",
      title: "Usage",
      body: "The rotation is circular, so you can move forwards or backwards.",
    },
    {
      id: 2,
      pos: 3,
      imgUrl: "https://jnu-esamhp.org/wp-content/uploads/2021/01/What-Is-Your-Why.jpg",
      title: "Why React.js?",
      body: "I could have created the same end result with normal html/css/javascript, but I React.js is a widely used Library. In addition to its popularity, it is flexible and organized due to the focus on UI components.",
    },
    
    {
      id: 3,
      pos: 4,
      imgUrl: "https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-social.png",
      title: "Bootstrap v5",
      body: "Most of the styling was done with Bootstrap 5.0. More info for using Bootstrap with React.js can be found here: <a href='https://react-bootstrap.github.io/getting-started/introduction' target='_blank'>https://react-bootstrap.github.io/getting-started/introduction.</a>",
    },
    {
      id: 4,
      pos: 5,
      imgUrl: "https://media.vlpt.us/images/dhlee91/post/e1224437-ef46-4c73-83ec-3fb43786a187/css_img.png",
      title: "CSS Transitions",
      body: "The animated movements were done using simple CSS transitions with the line: <i>transition:  'all 1s ease-out'</i>  .",
    },
    {
      id: 5,
      pos: 6,
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Spacetime_lattice_analogy.svg/1200px-Spacetime_lattice_analogy.svg.png",
      title: "Relative and Absolute styling",
      body: "To freely move the objects, be sure to set the container div's: <i>display: relative</i> and the card divs' <i>display: absolute</i>. Also, set the container div's: <i>overflow: hidden</i> This allows you to move the cards off of the screen. The fade was accomplished by animating the opacity.",
    },
    {
      id: 6,
      pos: 7,
      imgUrl: "https://www.getfreepng.com/sitem/storage/downloads/April2021/s9zrwJbJGJoOgruXrBdU.jpg",
      title: "GitHub Repo",
      body: 'The code for this project is available on my GitHub: <a href="https://github.com/DanielWhite83/react-demo.git" target="_blank">https://github.com/DanielWhite83/react-demo.git</a>',
    },
    {
      id: 7,
      pos: 8,
      imgUrl: "https://scrip.pharmaintelligence.informa.com/-/media/editorial/scrip/2019/07/sc1907_the-end_1422417179_1200.jpg",
      title: "The End",
      body: 'This is the end of the card loop. Unless you clicked "previous" first. In that case, you are just getting started.',
    },
  ])

  // Helmet is used to set the body background
  return (

    <div className="App">
      
      <HobbyCards 
        cardInfo = {cardInfo}  />
      <Helmet>
        <style>{'body { background-color: #ccc; }'}</style>
      </Helmet>
    </div>
  );
}

export default App;
