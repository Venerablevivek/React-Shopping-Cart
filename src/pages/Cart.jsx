import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";



const Cart = () => {

  const {cart} = useSelector( (state)=> state );
  console.log("printing cart");
  console.log(cart);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect( ()=>{
    const val = cart.reduce( (acc,curr) => acc + curr.price,0) ;
    setTotalAmount(val.toFixed(2));
  },[cart])

  return (
    <div>
    {
      cart.length > 0 ? 
      (<div className="max-w-[1200px] flex mx-auto flex-col md:flex-row justify-center" >


        <div className="w-[100%] md:w-[60%] flex flex-col p-2 " >
          {
            cart.map( (item, index)=>{
              return <CartItem key={item.id} item={item} itemIndex={index} /> 
            } )
          }
        </div>

        <div className="w-[100%] md:w-[40%] mt-5  flex flex-col" >

           <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between" >
           <div className="flex flex-col " >
              <div className="uppercase text-lg text-green-700 font-bold" >Your Cart</div>
              <div className="uppercase text-4xl text-green-700 font-bold">Summary</div>
              <p className="font-semibold mt-2" >
                <span>Total Items: {cart.length} </span>
              </p>
            </div>

            <div className="flex flex-col">
              <p className="font-semibold mb-2" >Total Amount: <span className="text-lg font-bold" >${totalAmount}</span></p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl" >
                Checkout Now
              </button>
            </div>
           </div>

        </div>

      </div>) :
      (<div className="w-screen h-[500px] flex flex-col items-center justify-center gap-4 text-xl " >
        <h2 className="font-bold" >Your Cart is Empty !</h2>
        <Link to={"/"}>
           <button className="bg-green-600 p-3 rounded-xl text-white font-bold uppercase hover:bg-slate-900 transition duration-200" >Shop Now</button>
        </Link>
      </div>)
    }
    </div>
  );
};

export default Cart;
