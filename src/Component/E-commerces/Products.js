import React from  'react'
import Product from './product'
import ShowCart from './shoCart'


class Products extends React.Component{
    constructor() {
        super();
        this.state={
            products: [
        { pName: "Polo Shirt", pPrice: "400" },
        { pName: "Jenes Pants", pPrice: "1200" },
        { pName: "Gavading Pants", pPrice: "1000" },
      ],
      count:0,
      index:0,
    };
  };
  handleCount = (index) => {
    this.setState({ count: this.state.count + 1, 
    index, })
    
    }
    render(){
        const {products} = this.state
        const pstyle={
            display:"flex",
            padding:"10px",
        }
        const cartStyle={
            float:"right",
            padding: "5px 10px",
            marginTop:"20px",
            marginRight:"20px",
        }
        const product = products.map((product, index) => {
            return (
                <Product
                name={product.pName}
                price={product.pPrice}
                clickCount={this.handleCount.bind(this, index)}
                />
            );
        });
        return(
        <div>
            <div style={cartStyle}>
                <ShowCart tPCount={this.state.count} index={this.state.index} products={this.state.products}/>
            </div>
            
            <div style={pstyle}>
             {product}
            </div>
            
        </div>
    );
    }
}

export default Products