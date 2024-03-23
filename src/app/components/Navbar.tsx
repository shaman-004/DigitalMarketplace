
import Wrapper from "./wrapper"
import Link from "next/link"
import {Icons}  from "@/app/components/Icons"
import Navitem  from "./Navitem"
import { buttonVariants } from "./ui/button"
import { Ghost } from "lucide-react"
import Cart  from "@/app/components/cart"
const Navbar = () => {
  const user = null; // Declare the 'user' variable

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

                        <div className="ml-auto flex items-center">
                            <div className="hidden lg:flex  lg:flex-1 lg:items-center lg:justify-end lg:space-x-7">
                                {user ? null:(
                                    <Link href='/signin' className={buttonVariants({variant:'ghost'})}>Sign in</Link>
                                    ) 
                                    //{/* Use the 'user' variable */}

                                    } 
                                {
                                    user? null:(
                                        <span className='h-6 w-px bg-gray-200'
                                         aria-hidden='true'
                                         />

                                    )
                                }
                                {
                                    user?null:(
                                        <Link href="/sign-up" className={buttonVariants({variant:'ghost'})}>Create Account</Link>
                                    )
                                }

                                {
                                    user?(
                                        <span className='h-6 w-px bg-gray-200'
                                         aria-hidden='true'
                                         />
                                    ) :null
                                }
                                {
                                    user? null:(
                                        <span className='h-6 w-px bg-gray-200'
                                         aria-hidden='true'
                                         />

                                    )
                                }
                                <div className="ml-4 flow-root lg:ml-6 sm:ml-6">
                                    <Cart/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </header>
    </div>
  )
}

export default Navbar