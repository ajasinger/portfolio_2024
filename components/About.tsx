'use client';

import { aboutParagraphs } from '@/lib/data';
import MotionSection from '@/components/MotionSection';

export default function About() {
    return(
        <MotionSection>
        <div id="about" className="flex">
            <div className="z-50 h-full w-full">
                <div className="flex flex-col gap-8 text-left md:p-12">
                    <h3 className="font-semibold text-2xl md:text-4xl text-left">About me</h3>
                    <div className="flex flex-col gap-4 max-w-xl 2xl:max-w-2xl">
                        {aboutParagraphs.map((text, index) => (
                            <p key={index} className="z-50">{text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </MotionSection>
    )
}
