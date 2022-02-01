import Head from "next/head";

const Home = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#2C2F33] py-2 text-gray-300">
            <Head>
                <title>ChonkyServer</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <h1 className="mt-5 text-3xl font-bold sm:text-4xl lg:-mt-5 lg:text-6xl">
                    Welcome to ChonkyServer
                </h1>

                <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
                    <a
                        href="/more-info"
                        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-white focus:text-white"
                    >
                        <h3 className="text-2xl font-bold">
                            More Information &rarr;
                        </h3>
                        <p className="mt-4 text-xl">
                            Click here for more information about the server.
                        </p>
                    </a>

                    <a
                        href="/connections"
                        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-white focus:text-white"
                    >
                        <h3 className="text-2xl font-bold">
                            Join / Connect to Server &rarr;
                        </h3>
                        <p className="mt-4 text-xl">
                            Click here for IP Address and Port.
                        </p>
                        <br />
                    </a>

                    <a
                        href="/tutorials"
                        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-white focus:text-white"
                    >
                        <h3 className="text-2xl font-bold">Tutorials &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Click here to see how the plugins in the server
                            work.
                        </p>
                    </a>

                    <a
                        href="/contact"
                        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-white focus:text-white"
                    >
                        <h3 className="text-2xl font-bold">
                            Contact Us &rarr;
                        </h3>
                        <p className="mt-4 text-xl">
                            Click here for more support.
                        </p>
                        <br />
                    </a>
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

export default Home;
