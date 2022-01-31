import Head from "next/head";
import React from "react";

const Tutorials = () => {
    return (
        <div className="flex min-h-screen flex-col items-center bg-[#2C2F33] py-2 text-gray-300">
            <Head>
                <title>ChonkyServer | Tutorials</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="mx-auto flex w-full flex-1 flex-col justify-center p-5 md:max-w-3xl lg:max-w-6xl">
                <h1 className="mt-6 text-center text-3xl font-bold sm:text-4xl lg:-mt-5 lg:text-6xl ">
                    Tutorials
                </h1>

                <div className="mt-10 space-y-4 text-lg font-semibold text-white">
                    <p className="text-3xl">In-Game Economy</p>
                    <div className="">
                        <p className="">
                            The game has a built-in economy (money money money).
                        </p>
                        <p className="">
                            You can earn money, give money, sell and buy stuff
                            (ShopGUI) and become the richest in the server.
                        </p>
                    </div>
                    <p className="">
                        Players start out with a 100 DC (Dogecoins, for obvious
                        reasons). And they get 20 DC as they level upto level 5,
                        10, 15 and 60 DC as they level upto level 20, 25, 30.
                    </p>

                    <div className="">
                        <p className="">
                            You can Sell and Buy stuff in the ShopGUI. And you
                            can do so much more.
                        </p>

                        <p className="">
                            You can see your balance by using the command{" "}
                            <code className="">/bal</code>
                            and to find who's the richest, use{" "}
                            <code className="">/baltop</code>.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <p className="pb-[10px] text-3xl">Plugin Tutorials</p>
                        <div className="space-y-2">
                            <p className="pb-[15px] text-2xl">Better RTP</p>
                            <div className="space-y-2">
                                <p className="">
                                    Better RTP is a plugin that teleports you
                                    randomly to a place. This might be useful to
                                    get away from the base, to find more loot,
                                    and many more possibilities.
                                </p>
                                <p className="">
                                    Remember that it costs 50 DC (ingame
                                    currency) for a RTP in the overworld, 250 DC
                                    in the Nether and 100 DC in The End.
                                </p>
                                <div className="">
                                    <p className="">
                                        Here is the command for the Random
                                        Teleport,
                                    </p>
                                    <p className="">
                                        <code className="">/rtp</code>: Teleport
                                        Randomly.
                                    </p>
                                    <p className="">
                                        <code className="">
                                            /rtp world {"<worldname>"}
                                        </code>
                                        : Teleport to another world. (Use
                                        worldname{" "}
                                        <code className="">world_nether</code>{" "}
                                        for Nether and{" "}
                                        <code className="">world_the_end</code>{" "}
                                        for The End)
                                    </p>
                                </div>
                                <div className="">
                                    <p className="">
                                        Check this video out for more reference.
                                        Some of commands displayed in the video
                                        may be disabled in the server due to
                                        fairplay.
                                    </p>
                                    <div className="flex justify-center">
                                        <iframe
                                            src="https://www.youtube.com/embed/j-I-QDWXDv4"
                                            className="my-4 h-[315px] w-[420px] md:h-[560px] md:w-[940px]"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>

                            <p className="py-[15px] text-2xl">UltimateClaims</p>
                            <div className="space-y-2">
                                <p className="">
                                    UltimateClaims is a plugin in the server
                                    that helps you to claim your land to protect
                                    it from hostile mob spawning, other players,
                                    and much more.
                                </p>
                                <p className="">
                                    The plugin requires you to use something
                                    called a 'PowerCell' to manage your claim.
                                    The powercell requires fuel to keep working.
                                    Here our fuels are, Iron Ingot, Diamond and
                                    Emerald.{" "}
                                </p>
                                <p className="">
                                    An Iron Ingots provides claim for 2 hours,
                                    Diamonds for 6 hours, and emeralds for 9
                                    hours.
                                </p>
                                <p className="">
                                    Ofcourse, this means you have to keep
                                    fueling the powercell in order to keep your
                                    claim from getting dissolved.
                                </p>
                                <p className="">
                                    You can use the command{" "}
                                    <code className="">/c</code> for more help.
                                </p>
                                <p className="">
                                    Or you can check this video out for more
                                    information. Remember, some commands might
                                    be disabled.
                                </p>
                                <div className="flex justify-center">
                                    <iframe
                                        src="https://www.youtube.com/embed/VgC6r33NiLA"
                                        className="my-4 h-[315px] w-[420px] md:h-[560px] md:w-[940px]"
                                    ></iframe>
                                </div>
                            </div>

                            <p className="py-[15px] text-2xl">EconomyShopGUI</p>
                            <div className="space-y-2">
                                <p className="">
                                    This is plugin that allows you to sell and
                                    buy things using a GUI. It is pretty easy to
                                    use for the Java Edition. But for PE
                                    players, it's a little bit tricky. Check the
                                    video for more information.
                                </p>

                                <p className="">
                                    Here are the commands for the Plugin.
                                </p>
                                <div className="">
                                    <p className="">
                                        <code className="">/shop</code>: To open
                                        the ShopGUI.
                                    </p>
                                    <p className="">
                                        <code className="">/sellgui</code>: To
                                        open the selling GUI.
                                    </p>
                                </div>
                            </div>
                            <p className="">
                                Bedrock Players, check this video out.
                            </p>
                            <div className="flex justify-center">
                                <iframe
                                    src="https://www.youtube.com/embed/3SuvE0ml3P0"
                                    className="my-4 h-[315px] w-[420px] md:h-[560px] md:w-[940px]"
                                ></iframe>
                            </div>
                            <p className="py-[15px] text-2xl">
                                Teleporting Commands
                            </p>
                            <div className="mt-4">
                                <div className="">
                                    <div className="">
                                        <p className="">
                                            To teleport to other players, use
                                            command <code className="">/tpa {"<playername>"}</code>{" "} to send them a request.
                                        </p>
                                        <p className="">
                                            You can use <code className="">/tpaccept</code>{" "} to accept a
                                            request.
                                        </p>
                                    </div>
                                    <p className="">
                                        Use <code className="">/tpahere {"<playername>"}</code>{" "}
                                        to teleport a player to your location.
                                    </p>
                                    <p className="">
                                        Similarly, you can toggle auto-accepting
                                        request by using{" "}
                                        <code className="">/tpauto</code>.
                                    </p>
                                </div>
                            </div>
                            <p className="py-[15px] text-2xl">
                                Social Commands
                            </p>
                            <div className="mt-4">
                                <div className="">
                                    <div className="">
                                        <p className="">
                                            You can message other players
                                            privately using{" "}
                                            <code className="">/msg {"<playername> <message>"}</code>
                                        </p>
                                        <p className="">
                                            Reply to a recent message by{" "}
                                            <code className="">/r {"<message>"}</code>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="">
                                            Send mails to other players using{" "}
                                            <code className="">/mail send {"<playername> <message>"}</code>{" "} 
                                            so that they can read it next time
                                            they come online.
                                        </p>
                                        <p className="">
                                            Send mails to all players by{" "}
                                            <code className="">/mail sendall {"<message>"}</code>{" "}
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="py-[15px] text-2xl">
                                Other useful Commands
                            </p>
                            <div className="mt-4">
                                <div className="">
                                    <div>
                                        <p>
                                            You can use <code>/nick</code> to
                                            set a nickname for yourself.
                                        </p>
                                        <p>
                                            And use <code>/sethome {"<name of the home>"}</code> to set
                                            yourself a home. You can have upto 3 homes. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default Tutorials;
