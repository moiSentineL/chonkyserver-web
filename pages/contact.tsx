import Head from "next/head";
import React from "react";

const Contact = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#2C2F33] py-2 text-gray-300">
            <Head>
                <title>ChonkyServer | Contact Us</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="mt-auto flex w-full flex-1 flex-col items-center justify-center p-5 md:max-w-3xl lg:max-w-6xl">
                <h1 className="pt-5 text-3xl font-bold sm:text-4xl lg:-mt-5 lg:text-6xl">
                    Contact Us
                </h1>

                <div className="">
                    <p className="mt-[50px]">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeBoBHFT3y0faurJjre56eWBeS51FajiBY--uKiNUmcaymSyw/viewform?embedded=true" 
                    
                    className="my-4 h-[560px] w-[420px] md:h-[560px] md:w-[960px]" ></iframe>
                        
                    </p>
                </div>
            </main>
            <footer className="mt-10 flex h-24 w-full items-center justify-center border-t lg:mt-0">
                <a
                    className="flex items-center justify-center"
                    href="https://github.com/Jonak-Adipta-Kalita"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Made by Jonak Adipta Kalita
                </a>
            </footer>
        </div>
    );
};

export default Contact;
