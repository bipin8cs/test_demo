import React from 'react';
import Cartitem from './Cartitem';
import Cart from './Cart';
import NavBar from './NavBar';
class App extends React.Component{

  constructor()
  {
      super();
      this.state={
         products:[
             {
          price:999,
          title:'Watch',
          qty:10,
          img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          id:1
         },
         {
          price:15000,
          title:'MI-note 10',
          qty:1,
          img:'https://images.unsplash.com/photo-1584904872169-ce55f469f6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80',
          id:2
         },
         {
          price:1200,
          title:'Shoes',
          qty:4,
          img:'https://media.istockphoto.com/photos/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-picture-id1303978937?b=1&k=20&m=1303978937&s=170667a&w=0&h=az5Y96agxAdHt3XAv7PP9pThdiDpcQ3otWWn9YuJQRc=',
          id:3
         }
      ]
              }
               // this.increaseQuantity=this.increaseQuantity.bind(this);
            // this.testing();
  }
  handleDeleteProduct=(id)=>{
      const{products}=this.state;
      const items=products.filter((item)=> item.id!==id);//[ it wiil contain  products whose id vis not equal to given id]
      this.setState({products:items});
  }
  
handleIncreaseQuantity=(product)=>{
   const{products}=this.state;
   console.log(products);
  // console.log(product);
   const index=products.indexOf(product);
  // console.log(index);
  products[index].qty +=1;
  this.setState({products:products});
}
handleDecreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0){return}
    products[index].qty -=1;
    this.setState({products:products});
     }
getCartCount=()=>{
  const {products}=this.state;
  let count=0;
  products.forEach((product) => {
    count+=product.qty;
  });
  return count;
}
getCartTotal=()=>{
  const {products}=this.state;
  let cartTotal=0;
  products.map((product)=>{
    cartTotal=cartTotal+product.qty*product.price
  });
  return cartTotal;
}

  render(){
    const{products}=this.state;
  return (
    <div className="App">
      <NavBar  count={this.getCartCount()}/>
      <Cart 
      products={products}
       onIncreaseQuantity={this.handleIncreaseQuantity}
       onDecreaseQuantity={this.handleDecreaseQuantity}
       onDeleteProduct={this.handleDeleteProduct}
      />
      <div style={{fontSize:20,padding:10}}>Total Price:{this.getCartTotal()}</div>
    </div>
  );
       }
}
export default App;
