import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

import Timeline from "./indextimeline";

var layers = [
    {
        id: "3d1df1b4-4d9d-45a4-bf14-cb580ee74675",
        name: "Market data"
    },
    {
        id: "7d8c4210-0cfa-4a10-8b21-01e6601e00bf",
        name: "Historical"
    },
    {
        id: "65079f30-47a8-4469-833e-4f0eea04d233",
        name: "Protfolio"
    },
    {
        id: "65079f30-47a8-4469-833e-4f0eea04d239",
        name: "Headline"
    }

];
var frames = {
    "3d1df1b4-4d9d-45a4-bf14-cb580ee74675": [{
        name: "webFg",
        second: 0,
        duration: 70
    }],
    "7d8c4210-0cfa-4a10-8b21-01e6601e00bf": [{
        name: "Thomas Reuter",
        second: 130,
        duration: 200
    }],
    "65079f30-47a8-4469-833e-4f0eea04d233": [{
        name: "Morning Star",
        second: 10,
        duration: 150
    }],
    "65079f30-47a8-4469-833e-4f0eea04d239": [{
        name: "BolsaMania",
        second: 15,
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

