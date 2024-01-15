import Wrapper from "./wrapper"
import Link from "next/link"
import {Icons}  from "@/app/components/Icons"
import Navitem  from "./Navitem"

const Navbar = () => {
  return (
    <div className="bg-white-200 sticky z-50 top-0 inset-x-0 h-16">
        <header className="relative bg-white">
            <Wrapper>
                <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">
                        <div className="ml-4 flex lg:ml-0">
                            <Link href="#">
                                <Icons.logo  className="h-10 w-10"/>
                            </Link>
                        </div>
                        <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch" >
                            <Navitem/>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </header>
    </div>
  )
}

export default Navbar