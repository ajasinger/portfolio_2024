'use client';
import Image from 'next/image';

type ImageType = {
    src: string;
    tabletSrc: string;
    mobileSrc: string;
    alt: string;
    srcHover?: string;
    altHover?: string;
};

interface Props {
    image: ImageType;
  }

export default function OneImageSection ({ image }: Props) {
    return(
        <div>
            <div className="relative z-50 overflow-hidden h-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                <div className="hidden md:block">
                    <Image
                        src={image.tabletSrc}
                        width={900}
                        height={600}                            
                        alt={image.alt}                            
                    />
                </div>
                <div className="md:hidden">
                    <Image
                        src={image.mobileSrc}
                        width={700}
                        height={600}                            
                        alt={image.alt}                            
                    />
                </div>
            </div>
        </div>
    )
}