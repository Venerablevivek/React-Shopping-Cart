import React from "react";
import {RiDeleteBin2Line} from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();
  const {cart} = useSelector((state)=> state);

  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.error("Item Removed from Cart");
  }

  return (
    <div className="flex flex-col items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5" >

        <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center " >

           <div className="w-[30%]" >
            <img src={item.image} alt="Item_Image" className="w-full h-full" />
           </div>

           <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]" >
              <h1 className="text-slate-700 font-semibold text-xl">{item.title}</h1>
              <h1 className="text-base text-slate-700 font-medium" > {item.description.split(" ").slice(0,15).join(" ") + "..."} </h1>
              <div className="flex items-center justify-between" >
                <p className="font-bold text-lg text-green-600" >${item.price}</p>
                <div onClick={removeFromCart} className="bg-red-300 rounded-full p-2 cursor-pointer hover:scale-125 transition duration-200 " >
                  <RiDeleteBin2Line className=" text-red-700 text-xl " />
                </div>
              </div>
           </div>

        </div>
        {
          cart.length > 1 ? (<div className="w-[100%] h-[1px] bg-black mt-4" ></div>):(<div></div>)
        }
    </div>
  );
};

export default CartItem;
