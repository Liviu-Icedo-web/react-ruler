import React from 'react';

export default class TimelineFrame extends React.Component {

    handleMouseClick(e) {                      
        this.props.dragEvent(e, 
            this.props.layerKey, 
            this.props.index); 
       
    }

    handleDraggin(e) {
        
        console.log(this.props.frame.second); 
        if(this.props.frame.second === 300){
            this.props.dragEvent(  e.preventDefault(),
        e.nativeEvent.stopImmediatePropagation(),
        e,
        this.props.layerKey, 
        this.props.index 
            ); 
        }             
        
       
    }

    render() {
        return (
            <span className="timeline-editor__frames-layer__item"
                style={{width:this.props.frame.duration, left:this.props.frame.second}}
                onMouseDown={(e) => this.handleMouseClick(e)}                
                onMouseMove={(e) => this.handleDraggin(e)}
            >
                {this.props.frame.name}
            </span>
        );
    }
}