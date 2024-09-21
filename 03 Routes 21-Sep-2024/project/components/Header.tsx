import Link from "next/link"

function Header () {
    return (
        <div>
        <ul className="flex justify-center gap-40 bg-blue-600 p-4 text-white font-bold">
          <Link href="/"> Home Page </Link>
          <Link href="/about"> About </Link>
          <Link href="/contactus"> Contact Us </Link>
          <Link href="/career" > Career </Link>
        </ul>
      </div>
    )
}

export default Header;