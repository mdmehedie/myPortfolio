import React from 'react'

const withCounter = (orginalComponent) =>{
    class newComponent extends React.Component{
        state = {
        count: 0,
        }
        clickCount = ()=>{
            this.setState(prevState => ({
                count : prevState.count + 1,
            }))
        }
        render(){
            const {count} = this.state
            return(
                <orginalComponent count={count} increment={this.clickCount}/>
            )
        }
    }

    return newComponent
}
export default withCounter