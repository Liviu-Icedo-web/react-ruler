import React from 'react';

export default class TimelineFrame extends React.Component {

<<<<<<< HEAD
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
        
       
=======
    handleMouseClick(e) {        
        this.props.dragEvent(e,this.props.layerKey, this.props.index);          
>>>>>>> 03c334527c1cebd9334d24dbbef9d1db5f615cc1
    }

    render() {
        return (
            <span className="timeline-editor__frames-layer__item"
                style={{width:this.props.frame.duration, left:this.props.frame.second}}
                onMouseDown={(e) => this.handleMouseClick(e)}                
<<<<<<< HEAD
                onMouseMove={(e) => this.handleDraggin(e)}
            >
=======
                >
>>>>>>> 03c334527c1cebd9334d24dbbef9d1db5f615cc1
                {this.props.frame.name}
            </span>
        );
    }
}