import Head from "next/head";
import React from "react";

const Contact = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#2C2F33] py-2 text-gray-300">
            <Head>
                <title>ChonkyServer | Contact Us</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="mt-auto flex w-full flex-1 flex-col items-center justify-center p-5 md:max-w-5xl lg:max-w-6xl">
                <h1 className="pt-5 mt-15 text-5xl font-bold sm:text-6xl lg:-mt-5 lg:text-6xl my-4 lg:my-10">
                    Contact Us
                </h1>
                <div className="mt-5 space-y-2 text-lg font-semibold text-white">
                    <div id="WhatsAppGroup">
                        <p className="text-2xl items-center justify-center ">
                            <a
                                href="https://chat.whatsapp.com/DXlNMvj68SIA82Y7kujMhM"
                                className="underline cursor-pointer hover:text-blue-500 hover:underline"
                            >
                                Click here
                            </a>
                            {" "}to join the WhatsApp Group
                        </p>
                    </div>  
                </div>
                <div className="">
                    <p className="mt-[45px]">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeBoBHFT3y0faurJjre56eWBeS51FajiBY--uKiNUmcaymSyw/viewform?embedded=true" 
                    
                    className="my-4 h-[560px] w-[420px] md:h-[560px] md:w-[960px]" ></iframe>
                        
                    </p>
                </div>
            </main>
            <footer className="mt-10 flex h-24 w-full items-center justify-center border-t lg:mt-0">
                <div className="">
                    Made by{" "}
                    <a
                        className="cursor-pointer hover:text-blue-500 hover:underline"
                        href="https://github.com/Jonak-Adipta-Kalita"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Jonak Adipta Kalita
                    </a>
                    {" "}and{" "}
                    <a
                        className="cursor-pointer hover:text-blue-500 hover:underline"
                        href="https://t.me/moisentinel"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        moiSentineL
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
