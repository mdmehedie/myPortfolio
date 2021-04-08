import withCounter from './withCounter'

const clickButton = (props) => {
    const {count, increment} = props
        return(
            <div>
                <button type="button" onClick={increment}>Click {count} times</button>
            </div>
        );
}

export default withCounter(clickButton)