import React from "react";
import { Modal, Button, Badge } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


class ShowCart extends React.Component {
    constructor(props){
        super(props);
        this.state={
            setShow:false,
        }
    }
    
  render(){

    const handleMod = () => {
        this.setState({
            setShow:!this.state.setShow,
        }
        );
    }
    
    const {tPCount, products, index} = this.props
    
    return (
        <>
        <Button onClick={handleMod}>
            Cart <Badge variant="light">{tPCount}</Badge>
        </Button>

        <Modal show={this.state.setShow} onHide={handleMod}>
            <Modal.Header closeButton>
            <Modal.Title>Total {tPCount} product, you added</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="row">
                    <div class="col">
                        <p class="border-bottom">Name</p>
                        <p>{products[index].pName}</p>
                    </div>
                    <div class="col">
                        <p class="border-bottom">Price</p>
                        <p>{products[index].pPrice}</p>
                    </div>
                    <div class="col">
                     <p class="border-bottom">quantity</p>
                    </div>
                    <div class="col">
                        <p class="border-bottom">Subtotal</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            
            </Modal.Footer>
        </Modal>
        </>
    );
  }
}

export default ShowCart
