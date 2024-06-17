'use client'

import { useState, SyntheticEvent } from 'react';
import { formInputs } from '@/lib/data';

interface FormData {
    [key: string]: string;
}

export default function ContactPage() {
    const [message, setMessage] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [showForm, setShowForm] = useState(true);


    const handleSubmit = async(e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDisabled(true);

        let formData: FormData = {};

        const formElements = e.currentTarget.elements as HTMLFormControlsCollection;

        Array.from(formElements).forEach((field) => {
            const inputElement = field as HTMLInputElement;
            if (!inputElement.name) return;
            formData[inputElement.name] = inputElement.value;
        });

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                body: JSON.stringify(formData),
            });

            if(response.ok) {
                setMessage("Thank you for contacting me — I'll be in touch soon!");
            } else {
                setMessage("Uh oh, something went wrong! Please email me at info@ajasinger.com.");
            }
            
        } catch (err) {
            console.error(err);
            setMessage("Uh oh, something went wrong! Please email me at info@ajasinger.com.");
        } finally {
            setDisabled(false);
            setShowForm(false);
        }
    };

    return(
        <div className="bg-cream px-8 md:px-16 py-12 sm:py-24 font-general-sans text-zinc-950 relative min-h-[800px]">
            <h3 className="relative text-4xl font-semibold pb-16 z-10">Contact me</h3>
            <div className="bg-[#E0FEAF] absolute top-[10rem] right-[5rem] h-[31.25rem] w-24.25rem] rounded-full blur-[7rem] sm:w-[68.75rem] z-0"></div>
            <div className="bg-[#EDCEE2] absolute top-[10rem] right-[0rem] h-[21.25rem] w-[50rem] rounded-full blur-[7rem] z-0"></div>
            <div className="z-50 relative">
            {showForm ? (
                <form 
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 items-center md:w-2/3"
                >
                    {formInputs.map((input, index) => (
                        <div 
                            key={index}
                            className="w-full z-50"
                        >
                            <label htmlFor={input.inputType} className="text-sm">{input.inputText}</label>
                            {input.inputRows ? (
                                <textarea
                                    name={input.inputType} 
                                    id={input.inputType}
                                    placeholder={input.placeholder}
                                    autoComplete={input.autocomplete}
                                    rows={input.inputRows}
                                    required                                        
                                    className="bg-gray-50 border border-zinc-950 text-gray-900 w-full p-2.5 focus:outline-none focus:ring-0"
                                />
                            ):(
                                <input 
                                    name={input.inputType} 
                                    id={input.inputType}
                                    placeholder={input.placeholder}
                                    autoComplete={input.autocomplete}
                                    required
                                    className="bg-gray-50 border border-zinc-950 text-gray-900 block w-full p-2.5 focus:outline-none focus:ring-0"
                                />  
                            )}
                        </div>
                    ))}
                    <div className="flex justify-start w-full pt-6">
                        <button 
                            type='submit'
                            disabled={disabled}
                            className="px-6 py-3 border text-cream bg-zinc-950 border-zinc-950 rounded-full hover:bg-cream hover:text-zinc-950 z-50"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            ):(
                <div>
                    {message && 
                        <p>{message}</p>
                    }
                </div>
            )}
            </div>
        </div>
    )
}