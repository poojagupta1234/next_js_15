
import Link from "next/link";
export default  function InterceptRoute2Page() {
  return (
   <div>
      Intercept Route Page 2 on click (.)
      <Link href="/i1" className="p-4 underline">Intercept Route</Link>
   </div>
  );
}
