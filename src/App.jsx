import foto from "./img/camilo.jpg"
import instagram from "./img/instagram 1.png"
import github from "./img/github 2.png"
import whatsapp from "./img/whatsapp 1.png"
import descarga from "./img/descargas 1.png"
import w_instagram from "./w_img/instagram-white.png"
import w_whatsapp from "./w_img/whatsapp-white.png"
import w_github from "./w_img/github-white.png"
import w_descarga from "./w_img/descargas-white.png"

export default function App() {

  const toggleTheme = () => document.body.classList.toggle("dark");
  
  return (
    <div className="">

      <div className="flex justify-center items-center font-bold relative dark:bg-black">
        <p className="mx-5 my-6 hover:text-sky-500 cursor-pointer dark:text-white dark:hover:text-red-600">SOBRE MI</p>
        <p className="mx-5 my-6 hover:text-sky-500 cursor-pointer dark:text-white dark:hover:text-red-600">CUALIDADES</p>
        <p className="mx-5 my-6 hover:text-sky-500 cursor-pointer dark:text-white dark:hover:text-red-600">PROYECTOS</p>
        <p className="mx-5 my-6 hover:text-sky-500 cursor-pointer dark:text-white dark:hover:text-red-600">CONTACTO</p>
        <label htmlFor="check" className="absolute right-10 bg-gray-300 px-1 py-1 w-14 rounded-full has-[:checked]:pl-7 transition-all">
          <div className="w-6 h-6 rounded-full bg-white"></div>
          <input onChange={toggleTheme} id="check" type="checkbox" hidden/>
        </label>
      </div>

      <div className="md:flex justify-center items-center mt-16">
        <div className="mx-16">
          <img src={foto} alt="foto_perfil" className="w-48 h-48 rounded-full mb-10"/>

          <div className="flex justify-center items-center">
            <img src={instagram} alt="redes1" className="w-11 h-11 cursor-pointer mx-2 dark:hidden"/>
            <img src={w_instagram} alt="redes2" className="w-11 h-11 cursor-pointer mx-2 hidden dark:inline-block"/>
            <img src={github} alt="redes2" className="w-11 h-11 cursor-pointer mx-2 dark:hidden"/>
            <img src={w_github} alt="redes2" className="w-11 h-11 cursor-pointer mx-2 hidden dark:inline-block"/>
            <img src={whatsapp} alt="redes3" className="w-11 h-11 cursor-pointer mx-2 dark:hidden"/>
            <img src={w_whatsapp} alt="redes3" className="w-11 h-11 cursor-pointer mx-2 hidden dark:inline-block"/>
          </div>
        </div>

        <div className="mx-16">
          <h1 className="w-96 font-bold text-5xl mb-10 dark:text-white">Andres Camilo Gaviria Bolaños</h1>
          <p className="w-72 font-semibold my-6 dark:text-white">Programador Junior Front end y creador de ideas con profesion de Ingeniero en Sistemas y experiencia en diferentes areas; con mi lema “nunca rendirse” por delante, aprendiendo constantemente de este mundo</p>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <button className="flex bg-sky-400 rounded-2xl px-5 py-3 text-left hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400">
          <p className="font-semibold dark:text-white">Hoja de Vida</p>
          <img src={descarga} alt="descarga" className="ml-3 w-5 h-5 dark:hidden"/>
          <img src={w_descarga} alt="descarga" className="ml-3 w-5 h-5 hidden dark:inline-block"/>
        </button>
      </div>
      
    </div>
  )
}