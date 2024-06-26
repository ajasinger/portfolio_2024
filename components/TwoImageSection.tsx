'use client';
import Image from 'next/image';
import { ImageType } from '@/lib/types';

interface Props {
    image1: ImageType;
    image2: ImageType;
  }

export default function TwoImageSection ({ image1, image2 }: Props) {
    return(
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-between">
            <div className="z-10 relative group overflow-hidden h-full transition ease-in-out duration-300 delay-100 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                    <div className={`${image1?.srcHover && "lg:group-hover:opacity-0 transition-opacity duration-300 delay-100 ease-in-out"}`}>
                        <Image
                            src={image1?.src}
                            width={800}
                            height={600}
                            alt={image1?.alt}
                        />    
                    </div>
                    {image1?.srcHover && image1?.altHover &&
                        <div className="opacity-0 lg:group-hover:opacity-100 bg-center bg-no-repeat bg-cover absolute top-0 left-0 transition-opacity duration-300 delay-100 ease-in-out">
                            <Image
                                src={image1?.srcHover}
                                width={800}
                                height={600}
                                alt={image1?.altHover}
                            />    
                        </div>
                    }
            </div>
            <div className="z-10 overflow-hidden h-full transition ease-in-out duration-300 delay-100 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                    <div>
                        <Image
                            src={image2?.src}
                            width={800}
                            height={600}
                            alt={image2?.alt}                            
                        />
                    </div>
            </div>
        </div>
    )
}