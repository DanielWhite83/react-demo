import HobbyCard from "./HobbyCard"
import { useState, useLayoutEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'

const HobbyCards = (props) => {

    // to update the cards in real-time, we need to use useState
    const [cardInfo, setCard] = useState(props.cardInfo);

    // When 'next' button is clicked
    const clickNext = () => {
        let len = cardInfo.length;
        for (var i = 0; i < len; i++){
            // move all cards back one position (sliding them to the left, displaying the next card)
            let new_pos = cardInfo[i].pos - 1;
            new_pos = mod(new_pos, len); // mod helper function required to handle negative modulo
            cardInfo[i].pos = new_pos;
    
        };
        // setCard changes the state, updating everything
        setCard([...cardInfo])
    }

    const clickPrev = () => {
        console.log();
        let len = cardInfo.length;
        // move all cards forward one position (sliding them to the right, displaying the previous card)
        for (var i = 0; i < len; i++){
            let new_pos = cardInfo[i].pos + 1;
            new_pos = mod(new_pos, len);
            cardInfo[i].pos = new_pos;
    
        };
        // setCard changes the state, updating everything
        setCard([...cardInfo])
    }

    const setStyles = () => {
        for (var i = 0; i < cardInfo.length; i++){
            cardInfo[i].pos = mod(cardInfo[i].pos, cardInfo.length)

            // set initial styles
            cardInfo[i].style = {
                transition:  'all 1s ease-out',
                opacity: 1.0,
                position: 'absolute',
                zIndex: cardInfo[i].pos + 2,
                width: "500px",              
            }
            
            // the card in position 1 is the active card
            // this can't be zero, because the 0 position card needs to be to the left
            if (cardInfo[i].pos == 1)
            {
                cardInfo[i].style.left = "250px";
                cardInfo[i].style.opacity = 1.0;
    
            }
            // if the position is greater than 1, it will be 1000 pixels to the right, off screen.
            else if (cardInfo[i].pos > 1){
                cardInfo[i].style.left = "1000px";
                cardInfo[i].style.opacity = -1.0; // negative opacity makes the fade in start after the movement
            }
            // if the position is less than 1, it will be 1000 pixels to the left, off screen.
            else
            {
                cardInfo[i].style.left = "-1000px";
                cardInfo[i].style.opacity = -1.0;
            }
            
            
        }
    }

    // set up the styles of the container div
    // some of these could be handled by bootstrap classes, but it is cleaner to keep them separate
    const containerDivStyle = {
        width: "1000px",
        height: "800px",
        minWidth: "1000px",
        overflow: "hidden",
        position: "relative",
        marginLeft: "auto",
        marginRight: "auto"
    }

    return (
        // className includes all bootstrap classes
        <Container className="bg-light border border-3 border-primary rounded mt-4 p-4" style={containerDivStyle}>
            <h1 className="m-3">React.js Scrolling Cards Demo</h1>
            {setStyles()}
            {cardInfo.map((card) => (
                <HobbyCard
                    key={card.id}
                    cardInfo={card} 
                    clickNext={clickNext}
                    clickPrev = {clickPrev}
                    />
            ))}
        </Container>
    )
}

function mod(n, m) {
    return ((n % m) + m) % m;
  }

export default HobbyCards
