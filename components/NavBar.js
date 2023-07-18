import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"

function NavBar() {
    return (
        <nav >
            <ul>
                <li>
                    <Link className="a" href="/" >Home</Link>
                </li>
                <li>
                    <Link className="a" href="/about">About </Link>
                </li>
            </ul>
            <ThemeSwitch/>
            <style jsx>{`
            nav{
                display: flex;
                justify-content: space-between;
            }
            ul{
                padding: 0;
                list-style-type: none;
            }
            li{
                display: inline;
            }
            li:not(:first-child){
                margin-left: 0.75rem;
            
            }
            `}</style>
        </nav>
    )
}
export default NavBar