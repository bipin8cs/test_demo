import React from 'react';
const Cartitem=(props)=> 
{   
    
    
//     // testing(){
//     //     const promise=new Promise( (resolve,reject)=>
//     //     {
//     //         //setState acts like a synchronous call
//     //         setTimeout(()=>{
//     //         resolve('done');
//     //         },5000);
//     //     })
//     //     promise.then(()=>{
//     //       this.setState({qty:this.state.qty+10});
//     //       this.setState({qty:this.state.qty+10});
//     //       this.setState({qty:this.state.qty+12});

//     //       console.log('state',this.state);
//     //     });
//     // }
//     increaseQuantity=()=>
//     {
//         //console.log('this',this);
//         //this.state.qty+=1;
//         //form1 if prevState not required us this
//        // this.setState({qty:this.state.qty+1});
//         //this.setState({qty:this.state.qty+1});
//        // this.setState({qty:this.state.qty+1});
//        //form2 if prevState required use this 
//        this.setState((prevState)=>{
//             return {
//                 qty:prevState.qty+1
//             }
//         },()=>{
//             console.log("this.State",this.state);//to kno0w when the setstate is finished
//         }
//         );
//    // console.log('this.state',this.state);//we don't know when the setstate is finished because it is asynchronous
//     }
//     decreaseQuantity=()=>{
//         const {qty}=this.state;
//         if(qty===0){
//             return;
//         }
//     this.setState(
//         (prevState)=>{
//             return {
//                 qty:prevState.qty-1
//             }
//         }
//     );
//     }
       // console.log('this.probs' ,this.props );
      // console.log("RENDERED");
       //const {price, title, qty}=this.state;
      //const {price,title, qty}=this.props;
      const {price,title,qty}=props.product;
      const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
     return(
   <div className="cart-item ">
        <div className="left-block">
        <img style={styles.image}/>
        </div>


       <div className="right-block">
               <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#c777'}}>Rs:{price}</div>
                 <div style={{color:'#c777'} }>Qty:{qty}</div>

             <div className="cart-item-actions">
              {/*buttons*/}
              <img alt="increase" className="action-icons"   
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={()=>{onIncreaseQuantity(product)}}/>
              <img alt="decrease" className="action-icons"
                 src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={()=>{onDecreaseQuantity(product)}}/>
              <img alt="delete" className="action-icons" 
               src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" onClick={()=>{onDeleteProduct(product.id)}}/>

             </div>
       </div>
    </div>
    );
     
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default Cartitem;