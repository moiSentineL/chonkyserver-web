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
                <div className="mx-auto flex w-full flex-1 flex-col items-center justify-center md:max-w-3xl lg:max-w-6xl">              
                    <h1 className="pt-5 mt-10 text-3xl font-bold sm:text-6xl lg:-mt-5 lg:text-6xl my-4 lg:my-10">
                        Tutorials
                    </h1>
                </div> 
                <div className="mt-10 space-y-4 font-semibold text-white">
                    <p className="text-4xl">Contents</p>
                    <div className="mt-2 text-3xl sm:textfont-semibold text-white">
                        <p className="mt-1">
                            &rarr;{" "}
                            <a
                                href="#InGameEco"
                                className="cursor-pointer hover:text-blue-500 hover:underline"
                            >
                                In Game Economy
                            </a>    
                        </p>
                        <p className="mt-1">
                            &rarr;{" "}
                            <a
                                href="#PluginTut"
                                className="cursor-pointer hover:text-blue-500 hover:underline"
                            >
                                Plugin Tutorials
                            </a>
                            <div className="">
                                <p className="mt-1 text-2xl">
                                    &emsp;&nbsp;&nbsp;&rarr;{" "}
                                    <a
                                        href="#UltimateClaims"
                                        className="cursor-pointer hover:text-blue-500 hover:underline"
                                    >
                                        UltimateClaims
                                    </a>
                                </p>
                                <p className="mt-1 text-2xl">
                                    &emsp;&nbsp;&nbsp;&rarr;{" "}
                                    <a
                                        href="#ShopGUI"
                                        className="cursor-pointer hover:text-blue-500 hover:underline"
                                    >
                                        EconomyShopGUI
                                    </a>
                                </p>
                            </div>
                        </p>
                        <p className="mt-2 text-3xl">
                            &rarr;{" "}
                            <a
                                href="#Teleportation"
                                className="cursor-pointer hover:text-blue-500 hover:underline"
                            >
                                Teleportation Commands
                            </a> 
                        </p>
                        <p className="mt-1 text-3xl">
                            &rarr;{" "}
                            <a
                                href="#Social"
                                className="cursor-pointer hover:text-blue-500 hover:underline"
                            >
                                Social Commands
                            </a> 
                        </p>
                        <p className="mt-1 text-3xl">
                            &rarr;{" "}
                            <a
                                href="#Others"
                                className="cursor-pointer hover:text-blue-500 hover:underline"
                            >
                                Other Useful Commands
                            </a> 
                        </p>

                    </div>
                </div>
                <div className="mt-10 space-y-4 text-lg font-semibold text-white">
                    <div id="InGameEco">
                        <p className="text-4xl">In-Game Economy</p>
                    </div>
                    <div className="">
                        <p className="">
                            The game has a built-in economy (money money money).
                        </p>
                        <p className="">
                            You can earn money, give money, sell and buy stuff {" {"}
                            <a
                                href="#ShopGUI"
                                className="underline cursor-pointer hover:text-blue-500 hover:underline"
                            >
                                EconomyShopGUI
                            </a>
                            {"} "}and become the richest in the server.
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
                            <code className="">/bal</code>{" "}
                            and to find who's the richest, use{" "}
                            <code className="">/baltop</code>.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div id="PluginTut">
                            <p className="pb-[10px] text-4xl">Plugin Tutorials</p>
                        </div>
                        <div className="space-y-2"> 
                            <div id="UltimateClaims">
                                <p className="py-[15px] text-2xl">UltimateClaims</p>
                            </div>
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
                                    Here our fuels are, Iron Ingot, Gold Ingot, Diamond and
                                    Emerald.{" "}
                                </p>
                                <p className="">
                                    An Iron Ingots provides claim for 4 hours, Gold Ingot for 6 hours,
                                    Diamonds for 8 hours, and emeralds for 9
                                    hours.
                                </p>
                                <p className="">
                                    Ofcourse, this means you have to keep
                                    fueling the powercell in order to keep your
                                    claim from getting dissolved.
                                </p>
                                <p className="">
                                    Check recipe with{" "}
                                    <code className="">/c recipe</code>
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
                            
                            <div id="ShopGUI">
                                <p className="py-[15px] text-2xl ">EconomyShopGUI </p>
                            </div>
                            
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
                            <div id="Teleportation">
                                <p className="py-[15px] text-4xl">
                                    Teleportation Commands
                                </p>
                            </div>
                            <div className="mt-4">
                                <div className="">
                                    <div className="">
                                        <p className="">
                                            To teleport to other players, use
                                            command{" "}
                                            <code className="">
                                                /tpa {"<playername>"}
                                            </code>{" "}
                                            to send them a request.
                                        </p>
                                        <p className="">
                                            You can use{" "}
                                            <code className="">/tpaccept</code>{" "}
                                            to accept a request.
                                        </p>
                                    </div>
                                    <p className="">
                                        Use{" "}
                                        <code className="">
                                            /tpahere {"<playername>"}
                                        </code>{" "}
                                        to teleport a player to your location.
                                    </p>
                                    <p className="">
                                        Similarly, you can toggle auto-accepting
                                        request by using{" "}
                                        <code className="">/tpauto</code>.
                                    </p>
                                </div>
                            </div>
                            <div id="Social">
                                <p className="py-[15px] text-4xl">
                                    Social Commands
                                </p>
                            </div>
                            <div className="mt-4">
                                <div className="">
                                    <div className="">
                                        <p className="">
                                            You can message other players
                                            privately using{" "}
                                            <code className="">
                                                /msg {"<playername> <message>"}
                                            </code>
                                        </p>
                                        <p className="">
                                            Reply to a recent message by{" "}
                                            <code className="">
                                                /r {"<message>"}
                                            </code>
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <p className="">
                                            Send mails to other players using{" "}
                                            <code className="">
                                                /mail send{" "}
                                                {"<playername> <message>"}
                                            </code>{" "}
                                            so that they can read it next time
                                            they come online.
                                        </p>
                                        <p className="">
                                            Send mails to all players by{" "}
                                            <code className="">
                                                /mail sendall {"<message>"}
                                            </code>{" "}
                                            .
                                        </p>
                                        <p className="">
                                            Read mails  by{" "}
                                            <code className="">
                                                /mail read {"<message>"}
                                            </code>{" "}
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div id="Other">
                                <p className="py-[15px] text-4xl">
                                    Other Useful Commands
                                </p>
                            </div>
                            <div className="mt-4">
                                <div className="">
                                    <div>
                                        <p>
                                            You can use <code>/nick</code> to
                                            set a nickname for yourself.
                                        </p>
                                        <p className="mb=4">
                                            And use{" "}
                                            <code>
                                                /sethome {"<name of the home>"}
                                            </code>{" "}
                                            to set yourself a home. You can have
                                            upto 3 homes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default Tutorials;
