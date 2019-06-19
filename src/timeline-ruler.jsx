import React from 'react';
import { DEFAULT_SECONDS_RULER, SECONDS_CHUNKS, 
    SECONDS_LENGTH, RULER_EXTRA_PIXEL } from "./seconds-sizes";

export default class TimelineRuler extends React.Component {
    
    constructor(props) {
        super(props);
        let secondsLength = props.seconds> 0 ? props.seconds : DEFAULT_SECONDS_RULER;
        this.state = {secondsList: this.getSecondsList(secondsLength)};
    }

    getSecondsList(seconds) {
        var list = [];
        var second = 1;
        do
        {            
            list.push(`${second}`);
            second = second + 1;
        }
        while(second<=seconds)        
        return list;
    }
    
    render() {
        return (
            <div className="timeline-editor__frames-ruler"
                style={{width:(this.state.secondsList.length*SECONDS_CHUNKS*SECONDS_LENGTH)+RULER_EXTRA_PIXEL}}>
                {this.state.secondsList.map((second)=>
                    <div className="timeline-editor__frames-ruler-s10s" key={second}>
                        <span>{second}</span>
                        <div className="timeline-editor__frames-ruler__second"></div>
                        <div className="timeline-editor__frames-ruler__second"></div>
                        <div className="timeline-editor__frames-ruler__second"></div>
                        <div className="timeline-editor__frames-ruler__second"></div>
                        <div className="timeline-editor__frames-ruler__second"></div>
                    </div>
                )}
            </div>
        );
    }
}