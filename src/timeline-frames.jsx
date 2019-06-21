import React from 'react';
import TimelineRuler from "./timeline-ruler.jsx";
import TimelineFrame from "./timeline-frame.jsx";
import { SECONDS_LENGTH } from "./seconds-sizes";

export default class TimelineFrames extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            frames: props.frames, 
            seconds: props.seconds, 
            layers: props.layers, 
            draggable: null,
            visibility:'hidden',
            transition:'0s',
            widthPlay:'0px'
        };
    }

    handleFrameDragStart(e, layerKey, frameIndex) {
        const clientX = e.clientX;
        this.setState({draggable:{
            currentLayer: layerKey,
            currentElementIndex: frameIndex,
            startX: clientX,
            bounds:'parent',
            containment: true
        }});  

    }

    handleFrameDraggin(e) {
<<<<<<< HEAD
        if(!this.state.draggable) return;
        
        const currentClientX = e.clientX;
=======
        if(!this.state.draggable) return;        
        const currentClientX = e.clientX !== undefined ? e.clientX : 500;
>>>>>>> 03c334527c1cebd9334d24dbbef9d1db5f615cc1
        const moveMouseX = currentClientX - this.state.draggable.startX;
        //TODO: move elements by 10?
        // if ((Math.abs(moveMouseX)%10)!==0) return;
        const index = this.state.draggable.currentElementIndex;
        const layerKey = this.state.draggable.currentLayer;
        var frames = this.state.frames;
        frames[layerKey][index].second = frames[layerKey][index].second + moveMouseX;
<<<<<<< HEAD
        this.setState(
                {   frames: frames, 
                    draggable: {
                        currentLayer: layerKey,
                        currentElementIndex: index,
                        startX: currentClientX,
                        containment: true
                    },
                }
            );
=======

        var layerStopDragPoint = 500 -frames[layerKey][index].duration;

        if(frames[layerKey][index].second >= layerStopDragPoint){
            frames[layerKey][index].second = layerStopDragPoint;
        }
        if(frames[layerKey][index].second <= 0){
            frames[layerKey][index].second = 0;
        }
        
        this.setState({frames: frames, draggable: {
            currentLayer: layerKey,
            currentElementIndex: index,
            startX: currentClientX,
            //containment: 'parent'
        }});
>>>>>>> 03c334527c1cebd9334d24dbbef9d1db5f615cc1
        this.props.updateFrames(frames);
    }

    handleFrameDragEnd() {       
        
        this.setState({draggable:null});
    }
    cambia(e){
        this.setState({
            visibility:'visible',
            transition:'5s',
            widthPlay:'350px'
        });
    }
    
    render() {
        
        return (
            <div className="timeline-editor__frames" 
                onMouseUp={() => this.handleFrameDragEnd()}>
                <div className="bdi" style={{visibility:this.state.visibility,transition:this.state.transition,width:this.state.widthPlay}}></div>
                <div className="bdi-noo"></div>
                <button onClick={this.cambia.bind(this)}>Click me!</button>
                <TimelineRuler seconds={this.state.seconds}/>
<<<<<<< HEAD
                {this.state.layers.map((layer) =>                
                    <div className="timeline-editor__frames-container" key={layer.id}>
=======
                {this.state.layers.map((layer) =>
                    <div className="timeline-editor__frames-container" style={{width:this.state.seconds*100}} key={layer.id}>
>>>>>>> 03c334527c1cebd9334d24dbbef9d1db5f615cc1
                        <div className="timeline-editor__frames-layer"
                        style={{width:this.state.seconds*SECONDS_LENGTH}}
                        onMouseMove={(e) => this.handleFrameDraggin(e)}>
                        {this.state.frames[layer.id] && 
                        this.state.frames[layer.id].map((frame, index) =>
                            <TimelineFrame key={index} index={index} 
                            frame={frame} layerKey={layer.id} 
                            dragEvent={this.handleFrameDragStart.bind(this)} bounds='parent' />
                        )}
                        </div>
                    </div>                   
                )}
            </div>
        );
    }
}