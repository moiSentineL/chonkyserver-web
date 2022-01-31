import Head from "next/head";
import React from "react";

const Connections = () => {
    return (
        <div className="flex min-h-screen flex-col items-center bg-[#2C2F33] py-2 text-gray-300">
            <Head>
                <title>ChonkyServer | Connections</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="mx-auto flex w-full flex-1 flex-col justify-center p-5 md:max-w-3xl lg:max-w-6xl">
                <h1 className="mt-5 text-center text-3xl font-bold sm:text-4xl lg:-mt-5 lg:text-6xl">
                    Connections
                </h1>

                <div className="mt-10 space-y-4 font-semibold text-white">
                    <p className="text-3xl">Connecting to the server.</p>
                    <div className="">
                        <p className="text-2xl">Java Edition</p>
                        <p className="text-lg">
                            Use IP Address{" "}
                            <code className="">play.chonkyserver.tk</code> to
                            connect to ChonkyServer.
                        </p>
                    </div>
                    <div className="">
                        <p className="text-2xl">Bedrock Edition</p>
                        <p className="text-lg">For Minecraft Pocket Edition</p>
                        <p className="text-lg">
                            To add to your servers,{" "}
                            <a
                                href="minecraft://?addExternalServer=ChonkyServer|play.chonkyserver.tk:19132"
                                className="hover:text-blue-500 hover:underline"
                            >
                                click here
                            </a>
                        </p>
                    </div>
                    <div className="">
                        <p className="text-lg">Manual Server Adding:</p>
                        <p className="text-lg">
                            Use IP Address{" "}
                            <code className="">play.chonkyserver.tk</code> and
                            Port <code className="">19132</code> to connect to
                            ChonkyServer.
                        </p>
                    </div>

                    <p className="">
                        For more support, or reporting any errors, please
                        contact us.
                    </p>
                </div>
            </main>
            <footer className="mt-10 flex h-24 w-full items-center justify-center border-t lg:mt-0">
                <a
                    className="flex items-center justify-center"
                    href="https://jonakadiptakalita.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Made by Jonak Adipta Kalita
                </a>
            </footer>
        </div>
    );
};

export default Connections;
