import React from 'react';

export default class TimelineFrame extends React.Component {

    handleMouseClick(e) {        
        this.props.dragEvent(e, this.props.layerKey, this.props.index);        
       
    }

    handleDragArrea(e) {
        //console.log('Seconds',this.props.frame.second);
        //console.log('Client X',e.clientX);
        //this.setState({draggable:null});
    }

    render() {
        return (
            <span className="timeline-editor__frames-layer__item" 
                style={{width:this.props.frame.duration, left:this.props.frame.second}}
                onMouseDown={(e) => this.handleMouseClick(e)}                
                onMouseMove={(e) => this.handleDragArrea(e)}>
                {this.props.frame.name}
            </span>
        );
    }
}