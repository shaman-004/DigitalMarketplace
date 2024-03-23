import Wrapper from './components/wrapper'
import 'tailwindcss/tailwind.css';
import Link from 'next/link'
import { buttonVariants ,Button} from '@/app/components/ui/button';
import { Ghost } from 'lucide-react';
import { ArrowDownToLine ,CheckCircle,Leaf} from 'lucide-react';
export default function Home() {

const data =[
 {
name:'Trending One',
Icon:ArrowDownToLine,
description:"Get your hands on the latest and greatest digital assets,with a huge variety of categories.",
},
 {
name:'Guranteed Quality',
Icon:CheckCircle,
description:"Get your hands on the latest and greatest Quality assets and guranteed asset .",
},
 {
name:'For the Environment',
Icon:Leaf,
description:"Best assets in the overall planet in your cart go get it now,with the best reviews all around the world!",
}
]
  return (
    <>
  <div className='py-20 mx-auto text-center flex flex-col  items-center max-w-3xl'>
    <h1 className='text-4xl font-bold tracking-tight text-gray-600 sm:text-4xl'>
      Your marketplace for high-quality{" "}
      <span className='text-blue-500'>digital assets</span>.
    </h1>
    <p className='mt-3 text-center text-lg text-gray-500 sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl'>
      Buy and sell digital assets from a vast community of independent creators.
    </p>
    <div className=' flex flex-col text-center items-center sm:flex-row gap-4 mt-5 p-9'>
<Link href="/products" className={buttonVariants({ variant:"outline"})}>Trending One</Link>
<Button variant='ghost'> &copy; Our Quality &rarr;</Button>
    </div>
  </div>
 

 <section className="border-t border-gray-200 bg-gray-50">
<Wrapper className="py-20" >
  <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
{data.map((data)=>(
<div key={data.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'> 

  <div className='md:flex-shrink-0 flex justify-center'>
    <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-200 text-blue-500'>
    <data.Icon className='w-1/3 h-1/3'/>
    </div>
  </div>

  <div className='mt-6  md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
    <h3 className='text-base font-medium text-gray-800'>
{data.name}
    </h3>
    <p className='mt-2 text-sm text-muted-foreground'>
{data.description}
    </p>

</div>
</div>
  

))}
  </div>
</Wrapper>
 </section>
 </>
  )
}
