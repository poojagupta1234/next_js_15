
import { useAuth } from '@/contexts/useContext';
import type { CartItem } from "@/contexts/contextTypes";
export default function ProductCart() {
     const { cartItems, totalPrice, removeCartItem, totalQuantity  } = useAuth();
    return (
      <div className="">
               <div className="p-4 space-y-4 overflow-y-auto   h-64 max-h-[calc(100%-150px)] ">
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
            <span>Total Quanty:</span>
            <span>{totalQuantity}</span>
          </div>
             </div>
              <div className="p-4 border-t">
          <div className="flex justify-between font-semibold">
            <span>Total Price:</span>
            <span>₹{totalPrice}</span>
          </div>
             </div>
      </div>
       
    )
}