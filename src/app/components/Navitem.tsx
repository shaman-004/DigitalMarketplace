'use client';
import { PRODUCT_CATEGORIES } from "@/config";
import { useRef, useState } from "react"
import Navitems from "./Navitems";
import { useOnClickOutside } from "@/hooks/onclick";

const Navitem = () => {
    const[activeIndex, setActiveIndex] = useState<null | number>(null)
    
    const isAnyOpen=activeIndex!==null

    const navref =useRef<HTMLDivElement|null>(null)

    useOnClickOutside(navref,()=>setActiveIndex(null))

  return (
  <div className="flex gap-4 h-full" >
{
 PRODUCT_CATEGORIES.map((category,i)=>{
    const handleopen=()=>{
        if(activeIndex===i){
            setActiveIndex(null)    
        }else{
            setActiveIndex(i)
            
        }
    }
     const isOpen=i===activeIndex

    return(
        <Navitems category={category} handleOpen={handleopen} isOpen={isOpen} key={category.value} isAnyOpen={isAnyOpen}/>
    )
})}

  </div>  
)
}
export default Navitem