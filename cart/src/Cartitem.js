import React from 'react';
class Cartitem extends React.Component
{
    render()
    {
     return(
   <div className="cart-item ">
        <div className="left-block">
        <img style={styles.image}/>
        </div>


       <div className="right-block">
               <div style={{fontSize:25}}>Phone</div>
                <div style={{color:'#c777'}}>Rs 999</div>
                 <div style={{color:'#c777'} }>Qty:1</div>

             <div className="cart-item-actions">
              {/*buttons*/}
             </div>
       </div>
    </div>
    );
     
    }
}
const styles={
    image:{
        height:200,
        width:200,
        borderRadius:4,
        background:'#ccc'
    }
}
export default Cartitem;