'use client';
import { useAuth } from '@/contexts/useContext';
import ProductCart from '@/components/ecom/productCart/productCart';
export default function Checkout() {
       const { cartItems  } = useAuth();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    console.log("formData", formData);
  };

  return (
    <div className="min-h-screen  bg-gray-100 p-6">
      <div className="w-full    bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Checkout</h1>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
          <fieldset className="border border-gray-300 rounded-lg p-6">
            <legend className="text-xl font-medium text-gray-700 px-2">Shipping Address</legend>
            <div className="mt-4">
              <label htmlFor="shipping-name" className="block mb-1 text-gray-700 font-medium">Full Name</label>
              <input
                id="shipping-name"
                name="shipping-name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="shipping-email" className="block mb-1 text-gray-700 font-medium">Email</label>
              <input
                id="shipping-email"
                name="shipping-email"
                type="text"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="address1" className="block mb-1 text-gray-700 font-medium">Address</label>
              <input
                id="address1"
                name="address1"
                type="text"
                placeholder="Street, City, State"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="zip-code1" className="block mb-1 text-gray-700 font-medium">Zip/Postal Code</label>
              <input
                id="zip-code1"
                name="zip-code1"
                type="text"
                placeholder="e.g., 123456"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </fieldset>
           <fieldset className="border border-gray-300 rounded-lg p-6">
            <legend className="text-xl font-medium text-gray-700 px-2">Billing Address</legend>

            <div className="mt-4">
              <label htmlFor="billing-name" className="block mb-1 text-gray-700 font-medium">Full Name</label>
              <input
                id="billing-name"
                name="billing-name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
             <div className="mt-4">
              <label htmlFor="billing-email" className="block mb-1 text-gray-700 font-medium">Email</label>
              <input
                id="billing-email"
                name="billing-email"
                type="text"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="address1" className="block mb-1 text-gray-700 font-medium">Address</label>
              <input
                id="address1"
                name="address1"
                type="text"
                placeholder="Street, City, State"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="zip-code1" className="block mb-1 text-gray-700 font-medium">Zip/Postal Code</label>
              <input
                id="zip-code1"
                name="zip-code1"
                type="text"
                placeholder="e.g., 123456"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </fieldset>
         
          </div>
          <fieldset className="border border-gray-300 rounded-lg p-6">
            <legend className="text-xl font-medium text-gray-700 px-2">Cart Details</legend>
            <ProductCart />
            </fieldset>

           </div>
          <button
            type="submit"
            disabled={cartItems.length === 0}
            className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 rounded-lg transition duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Checkout
          </button>
        </form>
       
      </div>
    </div>
  );
}
