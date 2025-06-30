import Drawer from "../../common/drawer/drawer";
import { useAuth } from '@/app/contexts/useContext';
import { useRouter } from 'next/navigation';
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface ShopingCartProps {
   
    readonly position: "left" | "right";
}

export default function ShopingCart(props: ShopingCartProps) {
 
   
     const { cartItems, isDrawerOpen,totalQuantity, totalPrice, toggleDrawer, removeCartItem, token  } = useAuth();
     
       const router = useRouter();
    return (
        <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} position={props.position}>
            <div className="border-2 border-gray-500 rounded-lg shadow-lg w-80 h-full bg-white m-4" >
               <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100%-150px)] ">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item: CartItem) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeCartItem(item.id)}
                  className="text-white bg-black rounded hover:bg-white hover:text-black border-2 border-black font-semibold px-2 py-1 text-sm cursor-pointer"
                >
                  X
                </button>
              </div>
            ))
          )}
        </div>
             <div className="p-4 border-t">
          <div className="flex justify-between font-semibold">
            <span>Total Items:</span>
            <span>{totalQuantity}</span>
          </div>
             </div>
              <div className="p-4 border-t">
          <div className="flex justify-between font-semibold">
            <span>Total Price:</span>
            <span>₹{totalPrice}</span>
          </div>
             </div>

             <div className="p-4 border-t">
          {token ? (
             <button
            disabled={cartItems.length === 0}
             onClick={()=> {
              toggleDrawer();
              router.replace("/blink/checkout")

            }}
            className="w-full bg-green-600 hover:bg-green-700 text-white  text-lg font-semibold  py-2 rounded  cursor-pointer disabled:opacity-50  duration-200  disabled:cursor-not-allowed"
          >
            Checkout
          </button>
          
          ) : (
             <button
             onClick={()=> router.replace("/blink/login")}
            className="w-full bg-green-500 text-white text-lg font-semibold py-2 rounded hover:bg-green-400 cursor-pointer"
          >
            Login
          </button>
          
          )}
         
     </div>
      </div>
       
        </Drawer>
    )
}