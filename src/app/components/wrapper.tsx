
import { cn } from "@/lib/utils"
import {ReactNode} from "react"

const wrapper=({
className,
children
}:{
  className?:String | undefined,
  children:ReactNode
})=>{
  return(
    <div className={cn("mx-autp w-full max-w-screen-xl px-2.5 md:px-20",className)}>{children}</div>
  )
}
export default wrapper