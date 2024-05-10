'use client';
import Image from 'next/image';

type ImageType = {
    src: string;
    alt: string;
    srcHover?: string;
    altHover?: string;
};

interface Props {
    image1: ImageType;
    image2: ImageType;
    image3: ImageType;
  }

export default function ThreeImageSection ({ image1, image2, image3 }: Props) {
    return(
        <div className="flex gap-16 justify-between">
            <div className="z-10 overflow-hidden h-full transition ease-in-out duration-300 delay-100 hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                <div>
                    <Image
                        src={image1?.src}
                        width={400}
                        height={600}
                        alt={image1?.alt}
                    />    
                </div>
            </div>
            <div className="z-10 overflow-hidden h-full transition ease-in-out duration-300 delay-100 hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                <div>
                    <Image
                        src={image2?.src}
                        width={400}
                        height={600}
                        alt={image2?.alt}                            
                    />
                </div>
            </div>
            <div className="z-10 overflow-hidden h-full transition ease-in-out duration-300 delay-100 hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                <div>
                    <Image
                        src={image3?.src}
                        width={400}
                        height={600}
                        alt={image3?.alt}                            
                    />
                </div>
            </div>
        </div>
    )
}