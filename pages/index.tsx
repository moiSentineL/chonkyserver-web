import Head from "next/head";

const Home = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#2C2F33] py-2 text-gray-300">
            <Head>
                <title>Chonky Server</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <h1 className="mt-5 text-3xl font-bold sm:text-4xl lg:-mt-5 lg:text-6xl">
                    Welcome to Chonky Server
                </h1>

                <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
                    <a
                        href="https://nextjs.org/docs"
                        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-white focus:text-white"
                    >
                        <h3 className="text-2xl font-bold">
                            Documentation &rarr;
                        </h3>
                        <p className="mt-4 text-xl">
                            Find in-depth information about Next.js features and
                            API.
                        </p>
                    </a>

                    <a
                        href="https://nextjs.org/learn"
                        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-white focus:text-white"
                    >
                        <h3 className="text-2xl font-bold">Learn &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Learn about Next.js in an interactive course with
                            quizzes!
                        </p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-white focus:text-white"
                    >
                        <h3 className="text-2xl font-bold">Examples &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Discover and deploy boilerplate example Next.js
                            projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-white focus:text-white"
                    >
                        <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </p>
                    </a>
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

export default Home;
