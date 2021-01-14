import React, { Component } from 'react';
import StartButton from '../StartButton/StartButton'
import './StartScreen.css'

export default class StartScreen extends Component {
   render() {
      return (
         <div id="StartScreen">
            <div id="button" >
               <StartButton />
            </div>
         </div >
      )
   }
}
