"use client";

import '../globals.css'; 
import SimpleCard from '../../Components/SimpleCard';

export default function About() {

    return(
       <div className='container flex flex-col items-center justify-center '>
            <div className="textContainer text-4xl font-mono w-2/4 pt-10">
                <div className="Take-your">Take your</div>
                <div className="Website neon-glow text-pinkish">Website</div>
                <div className="To-the-next">To the next</div>
                <div className="LEVEL neon-glow">LEVEL</div>
                <div className="Venture text-6xl neon-glow">Venture</div>
            </div>
            <div className='container flex flex-row items-center justify-center p-10'>
                <div className="cardContainer">
                    <div className="Card1 squareShadow" onClick={swipeCard}> <SimpleCard/> </div>
                    <div className="Card2 squareShadow" onClick={swipeCard}> <SimpleCard/> </div>
                    <div className="Card3 squareShadow" onClick={swipeCard}> <SimpleCard/> </div>
                    <div className="Card4 squareShadow" onClick={swipeCard}> <SimpleCard/> </div>
                    <div className="Card5 squareShadow" onClick={swipeCard}> <SimpleCard/> </div>
                    <div className="Card6 squareShadow" onClick={swipeCard}> <SimpleCard/> </div>
                </div>
            </div>
       </div>
    )
}

export function swipeCard(){
    console.log('swipeCard')
}