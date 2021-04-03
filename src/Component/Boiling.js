
function Boiling (props){
    if(props.celcias >= 100){
        return <p>The water would boil.</p>
    }
    else if(props.celcias < 100){
        return <p>The water would not boil.</p>
    }
    return <p></p>
}

export default Boiling