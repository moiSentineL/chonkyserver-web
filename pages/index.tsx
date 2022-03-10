import Head from "next/head";
import { useRouter } from "next/router";

const Home = () => {
    const router = useRouter();
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#2C2F33] py-2 text-gray-300">
            <Head>
                <title>ChonkyServer</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <h1 className="mt-5 text-5xl font-bold sm:text-6xl lg:-mt-5 lg:text-6xl my-4 lg:my-10">
                    Welcome to ChonkyServer
                </h1>
                <div className="pt-2 lg:pt-5 text-2xl font-bold sm:text-4xl lg:-mt-10 lg:text-4xl">
                    <span
                        onClick={() => router.push("/contact")}
                        className=" underline cursor-pointer hover:text-blue-500 hover:underline"
                    >
                        Join WhatsApp group
                    </span>
                    {" "}for updates NOW!
                </div> 

                <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
                    
                    <a
                        href="/more-info"
                        className="mt-6 w-96 px-5 sm:px-0 text-left hover:text-white focus:text-white"
                    >
                        <div className="rounded-xl border p-5">
                            <h3 className="text-2xl font-bold">
                                More Information &rarr;
                            </h3>
                            <p className="mt-4 text-xl">
                                Click here for more information about the server.
                            </p>
                        </div> 
                    </a>

                    <a
                        href="/connections"
                        className="mt-6 w-96 px-5 sm:px-0 text-left hover:text-white focus:text-white"
                    >
                        <div className="rounded-xl border p-5">
                            <h3 className="text-2xl font-bold">
                                Join / Connect to Server &rarr;
                            </h3>
                            <p className="mt-4 text-xl">
                                Click here for IP Address and Port.
                            </p>
                            <br />
                        </div>
                    </a>

                    <a
                        href="/tutorials"
                        className="mt-6 w-96 px-5 sm:px-0 text-left hover:text-white focus:text-white"
                    >
                        <div className="rounded-xl border p-5">
                            <h3 className="text-2xl font-bold">Tutorials &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Click here to see how the plugins in the server
                                work.
                            </p>
                        </div>
                    </a>

                    <a
                        href="/contact"
                        className="mt-6 w-96 px-5 sm:px-0 text-left hover:text-white focus:text-white"
                    >
                        <div className="rounded-xl border p-5">
                            <h3 className="text-2xl font-bold">
                                Contact Us &rarr;
                            </h3>
                            <p className="mt-4 text-xl">
                                Click here for more support.
                            </p>
                            <br />
                        </div>
                    </a>
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

export default Home;
