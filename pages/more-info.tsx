import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

const MoreInfo = () => {
    const router = useRouter();

    return (
        <div className="flex min-h-screen flex-col items-center bg-[#2C2F33] py-2 text-gray-300">
            <Head>
                <title>ChonkyServer | Information</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="mx-auto flex flex-1 flex-col justify-center px-5 md:max-w-3xl lg:max-w-6xl">
                <h1 className="mt-5 text-center text-3xl font-bold sm:text-4xl lg:mt-0 lg:text-6xl">
                    More Information
                </h1>

                <div className="mt-10 font-semibold text-white md:text-lg sm:text-lg">
                    <p className="text-justify">
                        ChonkyServer is a{" "}
                        <span className="italic">cracked</span> Minecraft SMP
                        Server for both Java Edition and Bedrock (Win10,
                        Android, iOS) Edition. This was made in January 2022.
                        The server stays online from{" "}
                        <span className="font-bold">8AM to 12PM IST</span>.
                        You can play this anytime you want. Feel free to contact
                        us for more support.
                    </p>
                    <div className="mt-3">
                        <p className="mb-2">Some of the features include:</p>
                        <div className="items-left ml-4 flex flex-col space-y-[5px]">
                            <p className="text-base">
                                {" "}
                                <span className="text-lg">1)</span> Smooth
                                Gameplay.
                            </p>
                            <p className="text-base">
                                {" "}
                                <span className="text-lg">2)</span>{" "}
                                Multi-Platform Support (Java and Bedrock)
                            </p>
                            <p className="text-base">
                                {" "}
                                <span className="text-lg">3)</span>{" "}
                                Multi-Version Support (Java 1.12.2 to 1.18.1,
                                and PE 1.17 to 1.18.2)
                            </p>
                            <p className="text-base">
                                {" "}
                                <span className="text-lg">4)</span> Very Less
                                Ping (~150ms)
                            </p>
                            <p className="text-base">
                                {" "}
                                <span className="text-lg">5)</span> Max 10
                                Players at the same time.
                            </p>
                            <p className="text-base">
                                {" "}
                                <span className="text-lg">6)</span> Hosted with
                                3GB of Dedicated RAM.
                            </p>
                            <p className="text-base">
                                {" "}
                                <span className="text-lg">7)</span> Great
                                plugins for great gameplay. Click{" "}
                                <span
                                    className="underline cursor-pointer hover:text-blue-500 hover:underline"
                                    onClick={() => router.push("/tutorials")}
                                    
                                >
                                    here
                                </span>{" "}
                                for tutorials.
                            </p>
                            <p className="text-base">
                                {" "}
                                <span className="text-lg">8)</span> Nice
                                support.
                            </p>
                        </div>
                    </div>
                    <p className="mt-3">
                        Join now. And become a chonker in ChonkyServer. Click{" "}
                        <span
                            onClick={() => router.push("/connections")}
                            className=" underline cursor-pointer hover:text-blue-500 hover:underline"
                        >
                            here
                        </span>{" "}
                        for information regarding connecting to the server.
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

export default MoreInfo;
