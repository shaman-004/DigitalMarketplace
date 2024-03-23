'use client'
import { SheetTrigger ,Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter} from "@/components/ui/sheet"
import { formatPrice } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import {  Link, ShoppingCart } from "lucide-react"
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const cart = () => {
  const item=0;
  return (
    <Sheet>
  <SheetTrigger className="group -m-2 flex items-center">
        <ShoppingCart aria-hidden="true" className="h-6 w-6 flex-shrink-2 text-gray-400 group-hover:text-gray-500" ></ShoppingCart>
        <span className="ml-2 text-sm font-medium text-gray-700 grroup-hover:text-gray-500">0</span>
  </SheetTrigger>
    <SheetContent className="bg-white flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 items-center pr-6">
            <SheetTitle>Cart (0)</SheetTitle>
            
        </SheetHeader>
        { item >0 ?(
          <>
              <div className="flex w-full flex-col  pr-5">
                cart items
              </div>
              <div className="space-y-4 pr-6">
                <Separator/>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="flex-1">Subtotal</span>
                      <span className="font-medium">{formatPrice(0.00)}</span>
                    
                  </div>
                  <div className="flex">
                    <span className="flex-1">Transaction fee</span>
                    <span className="font-medium">{formatPrice(1.00)}</span>
                  </div>
                  <div className="flex">
                    <span className="flex-1">Total</span>
                    <span className="font-medium">{formatPrice(2.00)}</span>
                  </div>
                </div>
                <SheetFooter>
                  <SheetTrigger asChild>
                    <Link href="/cart" className={buttonVariants({className:"w-full"})}>Checkout</Link>
                  </SheetTrigger>
                </SheetFooter>
              </div>
          </>
        ):(
              <div className="flex h-full flex-col items-center justify-center space-y-1">
                <div aria-hidden="true" className="relative mb-4 h-60 w-60 text-muted-foreground">
                  <Image src="/emptycart.jpg" fill alt="cart is empty"/>
                </div>
                <div className="font-medium text-sm">
                  Your cart is empty
                </div>
                <SheetTrigger asChild>
                  <Link href="/products" className={buttonVariants({variant:'link',size:'sm',className:'text-sm text-muted-foreground'})}>Add items to your cart</Link>

                </SheetTrigger>
              </div>
        )
        }
    </SheetContent>
  </Sheet>
  )
}

export default cart 