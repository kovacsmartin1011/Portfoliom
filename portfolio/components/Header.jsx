import Link from "next/link";
import Nav from "./Nav";
import Button from "./Button";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Martin <div className="text-accent square relative left-[-15px]"></div>
                </h1>
            </Link>
            
            {/* Desktop Nav and Hire button*/}
            <div className="hidden xl:flex">
                <Nav />
                <Link href="/kapcsolat">
                    <Button>Kapcsolat felvétele</Button>
                </Link>
            </div>

            {/*Mobil Nav*/}
            <div className="xl:hidden">mobile nav</div>
            </div>
        </header>
    );
}

export default Header
