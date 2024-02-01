'use client';
import AddToCartBtn from "./AddToCartBtn";

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingBag } from 'react-icons/cg'

const Bike = ({bike}) => {
    const popularBikeCat = bike.categories.find(
        (bike)=> bike.name === 'popular'
        );

  return (
    <div className="group">
        <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
            <div className="bg-black/5 w-full h-full group-hover:bg-black/10 transition-all duration-300 flex justify-center items-center">
               {/* bodge */}                
               <div className="absolute top-8 left-8 bg-red-600 text-white px-3 text-sm uppercase font-medium">
                Popular
                </div>                
                <Image 
                    src={urlFor(bike.images[0]).url()}
                    width={240}
                    height={147}
                    alt=''
                />
            </div>
            {/* btn group */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
                <AddToCartBtn />
                <Link href={`/product/${bike.slug}`}>
                    <button className="btn-icon btn-primary">
                        <CgEye />
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Bike
