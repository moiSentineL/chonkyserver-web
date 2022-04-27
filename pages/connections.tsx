import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

const Connections = () => {
    const router = useRouter();

    return (
        <div className="flex min-h-screen flex-col items-center bg-[#2C2F33] py-2 text-gray-300">
            <Head>
                <title>ChonkyServer | Connections</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="mx-auto flex w-full flex-1 flex-col items-center justify-center p-5 md:max-w-3xl lg:max-w-6xl">
                <h1 className="mt-5 text-5xl font-bold sm:text-6xl lg:-mt-5 lg:text-6xl my-4 lg:my-10">
                    Connections
                </h1>

                <div className="mt-10 space-y-4 font-semibold text-white">
                    <p className="text-2xl">Connecting to the server.</p>
                    <div className="">
                        <p className="mt-4 text-xl">Java Edition</p>
                        <p className="text-md">
                            You MUST have Version 1.12.2+ to join the server.</p>
                        <p className="text-md">
                            You should use Version 1.16.5 or 1.17.1 (recommended) for optimal performance.</p>
                        <p className="mt-2 text-md">
                            Use IP Address{" "}
                            <code className="">play.chonkyserver.tk</code> to
                            connect to ChonkyServer.
                        </p>
                    </div>
                    <div className="">
                        <p className="mt-4 text-xl">Bedrock Edition</p>
                        <p className="text-md">
                            You should have at least MCPE Version 1.18.0 in order to connect.</p>
                        <p className="text-md">   
                            Version 1.18.2 doesn't work yet.</p>
                        <p className="text-md"> 
                            For better performance use MCPE Version 1.18.30. Click{" "}
                            <a
                                href="https://mcpedl.org/minecraft-pe-1-18-30-apk/"
                                className="underline cursor-pointer hover:text-blue-500 hover:underline"
                            >
                                here
                            </a>
                            {" "}to download.</p>
                        <p className="mt-2 text-lg">For Minecraft Pocket Edition</p>
                        <p className="text-md">
                            To add to your servers, click{" "}
                            <a
                                href="minecraft://?addExternalServer=ChonkyServer|play.chonkyserver.tk:19132"
                                className="underline cursor-pointer hover:text-blue-500 hover:underline"
                            >
                                here
                            </a>
                        </p>
                        <p className="mt-2 text-lg">Manual Server Adding:</p>
                        <p className="text-md">
                            Use IP Address{" "}
                            <code className="">play.chonkyserver.tk</code> and
                            Port <code className="">19132</code> to connect to
                            ChonkyServer.
                        </p>
                    </div>

                    <div className="mt-4 text-lg">
                        For more support, or reporting any errors, please{" "}
                        <span
                            onClick={() => router.push("/contact")}
                            className=" underline cursor-pointer hover:text-blue-500 hover:underline"
                        >
                            contact us
                        </span>
                        .
                    </div>
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

export default Connections;
