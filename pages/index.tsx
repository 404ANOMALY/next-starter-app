<<<<<<< HEAD
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <hr />
      <Link href="/products">Products</Link>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/movies">Liste films</Link>
    </div>
  );
}
=======

import HomePage from "../components/HomePage";
import Link from "next/link";

const IndexPage = () => {
  return(
    <div>
      <HomePage/>
      <hr />
      <Link className="px-3 transition hover:text-red-500 font-bold"  href="/Customers">Customers</Link>
      <p> </p>
      <Link className="px-3 transition hover:text-red-500 font-bold" href="/About">About</Link>
      <p> </p>
      <Link className="px-3 transition hover:text-red-500 font-bold"  href="/Products">Products</Link>
      <p> </p>
      <Link className="px-3 transition hover:text-red-500 font-bold" href="/Movies">Les Films</Link>
    </div>
  );
  
};
export default IndexPage;
>>>>>>> 08b87fd (Affiche movies et customers)
