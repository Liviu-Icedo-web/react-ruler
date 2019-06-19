import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

import Timeline from "./indextimeline";

var layers = [
    {
        id: "3d1df1b4-4d9d-45a4-bf14-cb580ee74675",
        name: "Layer 1"
    },
    {
        id: "7d8c4210-0cfa-4a10-8b21-01e6601e00bf",
        name: "Layer 2"
    },
    {
        id: "65079f30-47a8-4469-833e-4f0eea04d233",
        name: "Layer 3"
    }
];
var frames = {
    "3d1df1b4-4d9d-45a4-bf14-cb580ee74675": [{
        name: "Hello.png",
        second: 0,
        duration: 70
    }],
    "7d8c4210-0cfa-4a10-8b21-01e6601e00bf": [{
        name: "Welcome.png",
        second: 130,
        duration: 200
    }],
    "65079f30-47a8-4469-833e-4f0eea04d233": [{
        name: "Goodbye.png",
        second: 10,
        duration: 150
    }]
};

var seconds =5;

function onUpdateFrames(frames) {
    //TODO: deal with frames
}

ReactDOM.render(
    <Timeline layers={layers} frames={frames} seconds={seconds} onUpdateFrames={onUpdateFrames}/>,
    document.getElementById("root")
);

//ReactDOM.render(<App />, document.getElementById('root'));

