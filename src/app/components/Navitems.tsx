'use client';
import Link from 'next/link';
import React, { useState } from 'react'
import {useRouter} from 'next/router';
import { Button } from './ui/button';
import { PRODUCT_CATEGORIES } from '@/config';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
type Category=typeof PRODUCT_CATEGORIES[number]

interface NavitemProps{
category:Category
handleOpen:()=>void
isOpen:boolean
isAnyOpen:boolean
}

const Navitems =
 ({isAnyOpen,
  category,
  handleOpen,
  isOpen,
  
}:NavitemProps) => {
  return <div className='flex'>
    <div className='relative flex items-center'>
      <Button className='gap-1.5' onClick={handleOpen} variant={isOpen?'secondary': isAnyOpen?'ghost':'outline'}>
        {category.label}
        <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground",
        {
          '-rotate-180':isOpen,
        })}/>
      </Button>
    </div>
  </div>
    
    

}

export default Navitems