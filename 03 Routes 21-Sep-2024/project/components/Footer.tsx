import Link from "next/link";

function Footer() {
  return (
    <div>
        
      <ul className="flex justify-center gap-80 bg-black p-4 text-white font-bold">
        <Link href="/"> Back to Home Page </Link>
      </ul>
    </div>
  );
}

export default Footer;
