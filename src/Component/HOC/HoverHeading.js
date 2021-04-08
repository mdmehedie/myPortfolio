import React from 'react'

class HoverHeading extends React.Component{
    state = {
        count: 0,
    }
    clickCount= ()=>{
        this.setState(prevState => ({
            count : prevState.count + 1,
        }))
    }
    render(){
        const {count} = this.state
        return(
            <div>
                <h1 onMouseOver={this.clickCount}>Hover {count} times</h1>
            </div>
        );
    }
}

export default HoverHeading