import { FaApple, FaDiscord, FaDownload, FaGithub, FaLinux, FaWindows } from "react-icons/fa";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";


export default function App() {
  gsap.registerPlugin(ScrollTrigger);
  const containerCardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo("#title", {opacity: 0, scale: 0.8}, {opacity: 100, scale: 1, duration:1})
    gsap.fromTo("#subTitle", {opacity: 0, scale: 0.8}, {opacity: 100, scale: 1, duration:1})
    gsap.fromTo("#screen", {opacity: 0, x:500}, {opacity: 100, x:0, duration:1})
    gsap.fromTo("#button1", {opacity: 0, scale: 0.8}, {opacity: 100, scale: 1, duration:1})
    gsap.fromTo("#button2", {opacity: 0, scale: 0.8}, {opacity: 100, scale: 1, duration:1})
    gsap.fromTo("#button6", {opacity: 0, scale: 0.8}, {opacity: 100, scale: 1, duration:1})

  }, []);

  return (
    <>
      <div className="flex mx-auto px-20 h-screen items-center overflow-hidden bg-background">
        <div className="flex-1 mr-10">
          <h1 id="title" className="text-7xl text-white font-black text-center mb-8">Nazel launcher</h1>
          <h2 id="subTitle" className="text-xl text-white font-bold text-center mb-12">Jouer à minecraft sur les serveurs privés de <a className=" underline" href="https://discord.com/users/667087553861648417">@vupilex</a></h2>
          <div className="flex justify-center space-x-4">
            <button onClick={() => window.scrollTo({ top: containerCardRef.current ? containerCardRef.current.offsetTop : 0, behavior: "smooth" })} onMouseEnter={() => gsap.to("#button1", {scale: 1.1, delay: 0.05})} onMouseLeave={() => gsap.to("#button1", {scale: 1, delay: 0.05})} id="button1" className="flex-button flex items-center text-xl text-background bg-white rounded-lg font-extrabold px-6 py-2">
              <FaDownload className="mr-2" />
              Télécharger
            </button>
            <a onMouseEnter={() => gsap.to("#button2", {scale: 1.1, delay: 0.05})} onMouseLeave={() => gsap.to("#button2", {scale: 1, delay: 0.05})} id="button2" href="https://github.com/thibault0712/nazel_launcher" className="flex-button cursor-pointer flex items-center text-xl text-background bg-white rounded-lg font-extrabold px-6 py-2">
              <FaGithub className="mr-2" />
              GitHub
            </a>
            <a onMouseEnter={() => gsap.to("#button6", {scale: 1.1, delay: 0.05})} onMouseLeave={() => gsap.to("#button6", {scale: 1, delay: 0.05})} id="button6" href="https://github.com/thibault0712/nazel_launcher" className="flex-button cursor-pointer flex items-center text-xl text-background bg-white rounded-lg font-extrabold px-6 py-2">
              <FaDiscord className="mr-2" />
              Discord
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img id="screen" priority src="/pictures/screen.png" className="w-full h-auto rounded-lg" width="1000" height="1000" alt="screenshot" />
        </div>
      </div>
      <div ref={containerCardRef} id="cardContainer" className="bg-background h-screen flex flex-col items-center justify-center relative">
        <h2 className="text-5xl text-white font-bold text-center mb-12">Télécharger pour votre plateforme</h2>
        <div className="flex justify-center space-x-10">
          <div className="relative flex flex-col items-center bg-secondBackground bg-opacity-50 rounded-lg p-10 w-96 h-96 text-white">
            <div className="h-full items-center flex">
              <div>
                <FaWindows className="text-6xl mb-2 mx-auto" />
                <span className="text-4xl font-extrabold">Windows</span>
              </div>
            </div>
            <a onMouseEnter={() => gsap.to("#button3", {scale: 1.1, delay: 0.05})} onMouseLeave={() => gsap.to("#button3", {scale: 1, delay: 0.05})} id="button3" href="https://github.com/thibault0712/nazel_launcher/releases/latest/download/Nazel.exe" className="mt-auto flex items-center text-xl bg-white text-background rounded-lg font-extrabold px-6 py-2">
              <FaDownload className="mr-2" />
              Télécharger
            </a>
            <span className="text-sm mt-2">SEULEMENT WIN10 ET WIN11</span>
          </div>
          <div className="relative flex flex-col items-center bg-secondBackground bg-opacity-50 rounded-lg p-10 w-96 h-96 text-white">
            <div className="h-full items-center flex">
              <div>
                <FaApple className="text-6xl mb-2 mx-auto" />
                <span className="text-4xl font-extrabold">Apple</span>
              </div>
            </div>
            <a onMouseEnter={() => gsap.to("#button4", {scale: 1.1, delay: 0.05})} onMouseLeave={() => gsap.to("#button4", {scale: 1, delay: 0.05})} id="button4" href="https://github.com/thibault0712/nazel_launcher/releases/latest/download/Nazel.dmg" className="mt-auto flex items-center text-xl bg-white text-background rounded-lg font-extrabold px-6 py-2">
              <FaDownload className="mr-2" />
              Télécharger
            </a>
            <span className="text-sm mt-2">DES BUGS SONT POSSIBLES</span>
          </div>
          <div id="card" className="relative flex flex-col items-center bg-secondBackground bg-opacity-50 rounded-lg p-10 w-96 h-96 text-white">
            <div className="h-full items-center flex">
              <div>
                <FaLinux className="text-6xl mb-2 mx-auto" />
                <span className="text-4xl font-extrabold">Linux</span>
              </div>
            </div>
            <a onMouseEnter={() => gsap.to("#button5", {scale: 1.1, delay: 0.05})} onMouseLeave={() => gsap.to("#button5", {scale: 1, delay: 0.05})} id="button5"href="https://github.com/thibault0712/nazel_launcher/releases/latest/download/Nazel.deb" className="mt-auto flex items-center text-xl bg-white text-background rounded-lg font-extrabold px-6 py-2">
              <FaDownload className="mr-2" />
              Télécharger
            </a>
            <span className="text-sm mt-2">UNQIUEMENT SUR LES OS DEBIAN</span>
          </div>
        </div>
      </div>
      <footer className="bg-background text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="mb-4 md:mb-0 w-1/3">
            <p className="text-center text-sm">© 2024 Thibault Falezan. Tous droits réservés.</p>
          </div>
          <div className="items-center w-1/3 justify-center space-y-2 md:space-y-0 md:space-x-4">
            <div>
              <p className="text-sm text-center">Email : thibaultfalezan@gmail.com</p>
              <p className="text-sm text-center" >Discord : vupilex</p>
            </div>
          </div>
          <div className="flex mt-4 md:mt-0 w-1/3">
            <div className="mx-auto flex space-x-8 justify-center">
              <a href="https://github.com/thibault0712/nazel_launcher" className="text-xl hover:text-gray-400 ">
                <FaGithub />
              </a>
              <a href="https://discord.gg/6aGSYFnZsD" className="text-xl hover:text-gray-400">
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}