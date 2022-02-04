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
          img:'',
          id:1
         },
         {
          price:15000,
          title:'MI-note 10',
          qty:1,
          img:'',
          id:2
         },
         {
          price:1200,
          title:'Shoes',
          qty:4,
          img:'',
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
    </div>
  );
       }
}
export default App;
