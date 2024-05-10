'use client';
import Image from 'next/image';

type ImageType = {
    src: string;
    // videoSrc?: string;
    alt: string;
    srcHover?: string;
    altHover?: string;
};

interface Props {
    image1: ImageType;
    image2: ImageType;
  }

export default function TwoImageSection ({ image1, image2 }: Props) {
    return(
        <div className="flex gap-16 justify-between">
            <div className="z-10 overflow-hidden h-full transition ease-in-out duration-300 delay-100 hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                {/* {image1.src && */}
                    <div>
                        <Image
                            src={image1?.src}
                            width={800}
                            height={600}
                            alt={image1?.alt}
                        />    
                    </div>
                {/* } */}
                {/* {image1.videoSrc &&
                    <div>
                       <video width="320" height="240" controls preload="none">
                        <source src={image1.videoSrc} type="video/mp4" />
                        <track
                            src="/path/to/captions.vtt"
                            kind="subtitles"
                            srcLang="en"
                            label="English"
                        />
                        Your browser does not support the video tag.
                        </video>    
                    </div>
                } */}
            </div>
            <div className="z-10 overflow-hidden h-full transition ease-in-out duration-300 delay-100 hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                {/* {image2?.src && */}
                    <div>
                        <Image
                            src={image2?.src}
                            width={800}
                            height={600}
                            alt={image2?.alt}                            
                        />
                    </div>
                {/* }    */}
            </div>
        </div>
    )
}