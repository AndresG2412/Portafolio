import foto from "./img/camilo.jpg"
import instagram from "./img/instagram 1.png"
import github from "./img/github 2.png"
import whatsapp from "./img/whatsapp 1.png"
import descarga from "./img/descargas 1.png"
import w_instagram from "./w_img/instagram-white.png"
import w_whatsapp from "./w_img/whatsapp-white.png"
import w_github from "./w_img/github-white.png"
import w_descarga from "./w_img/descargas-white.png"
import react from "./icons/communityIcon_4g1uo0kd87c61.png"
import git from "./icons/github_color.png"
import python from "./icons/267_Python-512.webp"
import tailwind from "./icons/tailwind 1.png"
import mysql from "./icons/mysql 1.png"
import java from "./icons/java 1.png"
import html from "./icons/html-5 1.png"
import css from "./icons/css-3 1.png"
import js from "./icons/js 1.png"
import telefono from "./img/telefono 1.png"
import correo from "./img/correo.png"
import casa from "./img/casa 1.png"
import w_telefono from "./w_img/telefono.png"
import w_casa from "./w_img/casa.png"
import w_correo from "./w_img/correo.png"

export default function App() {

  function handleSobreMiClick() {
    const sobremiDiv = document.getElementById("sobremi");
    if (sobremiDiv) {
      sobremiDiv.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleCualidadesClick() {
    const sobremiDiv = document.getElementById("cualidades");
    if (sobremiDiv) {
      sobremiDiv.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleProyectosClick() {
    const sobremiDiv = document.getElementById("proyectos");
    if (sobremiDiv) {
      sobremiDiv.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleContactoClick() {
    const sobremiDiv = document.getElementById("contacto");
    if (sobremiDiv) {
      sobremiDiv.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  const toggleTheme = () => document.body.classList.toggle("dark");
  
  return (
    <div>

      <div className="fixed top-0 w-full bg-white dark:text-white flex justify-center items-center font-bold dark:bg-black dark:border-white border-b-2 border-black">
        <p onClick={handleSobreMiClick} className="mx-5 my-6 hover:text-sky-500 cursor-pointer dark:text-white dark:hover:text-red-600">SOBRE MI</p>
        <p onClick={handleCualidadesClick} className="mx-5 my-6 hover:text-sky-500 cursor-pointer dark:text-white dark:hover:text-red-600">CUALIDADES</p>
        <p onClick={handleProyectosClick} className="mx-5 my-6 hover:text-sky-500 cursor-pointer dark:text-white dark:hover:text-red-600">PROYECTOS</p>
        <p onClick={handleContactoClick} className="mx-5 my-6 hover:text-sky-500 cursor-pointer dark:text-white dark:hover:text-red-600">CONTACTO</p>
        <label htmlFor="check" className="absolute right-10 bg-gray-300 px-1 py-1 w-14 rounded-full has-[:checked]:pl-7 transition-all">
          <div className="w-6 h-6 rounded-full bg-white"></div>
          <input onChange={toggleTheme} id="check" type="checkbox" hidden />
        </label>
      </div>

      <div id="sobremi">

        <div className="md:flex justify-center items-center pt-36">
          <div className="mx-16">
            <img src={foto} alt="foto_perfil" className="w-48 h-48 border-black border-2 dark:border-white rounded-full mb-10"/>

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

      <div id="cualidades">

        <div className="flex justify-center">
          <p className="font-semibold dark:text-white mt-28 mb-16 text-center w-2/3">Algunas de mis habilidades y proyectos incluyen diferentes programas, centrandome en la programacion web buscando dedicarme a ello profesionalmente con bases universitarias y conocimiento empirico obtenido al rededor de los años; manteniendome al dia en todos sus temas</p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="mx-24">
            <p className="font-semibold dark:text-white text-center m-2">React</p>
            <img src={react} alt="react_icon" className="w-20 h-20"/>
          </div>
          <div className="mx-24 ">
            <p className="font-semibold dark:text-white text-center m-2">Github</p>
            <img src={git} alt="git_icon" className="w-20 h-20"/>
          </div>
          <div className="mx-24 bg">
            <p className="font-semibold dark:text-white text-center m-2">Python</p>
            <img src={python} alt="python_icon" className="w-20 h-20"/>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <div className="mx-24">
            <p className="font-semibold dark:text-white text-center m-2">Tailwind</p>
            <img src={tailwind} alt="tailwind_icon" className="w-20 h-20"/>
          </div>
          <div className="mx-24 ">
            <p className="font-semibold dark:text-white text-center m-2">MySQL</p>
            <img src={mysql} alt="MySQL_icon" className="w-20 h-20"/>
          </div>
          <div className="mx-24 bg">
            <p className="font-semibold dark:text-white text-center m-2">Java</p>
            <img src={java} alt="Java" className="w-20 h-20"/>
          </div>
        </div>

        <div className="flex justify-center ">
          <div className="mx-24">
            <p className="font-semibold dark:text-white text-center mb-2">HTML</p>
            <img src={html} alt="HTML_icon" className="w-20 h-20"/>
          </div>
          <div className="mx-24">
            <p className="font-semibold dark:text-white text-center m-2">CSS</p>
            <img src={css} alt="CSS_icon" className="w-20 h-20"/>
          </div>
          <div className="mx-24">
            <p className="font-semibold dark:text-white text-center m-2">JavaScript</p>
            <img src={js} alt="JavaScript" className="w-20 h-20"/>
          </div>
        </div>
      </div>
      
      <div id="proyectos">
        <div className="flex justify-center">
          <p className="font-semibold dark:text-white mt-28 mb-16 text-center w-2/3">De entre todos mis proyectos personales y practicas que dia a dia avanzo de manera personal o grupal con trabajos universitarios; he seleccionado algunos de los cuales me siento mas identificado y satisfecho con los resultados, demas de los que mas he aprendido</p>
        </div>

        <div className="flex font-semibold justify-center dark:text-white ">

          <div className="mt-4 mb-12 text-center mx-16">
            <p className="mb-6">Web de <br />Libros</p>
            <div id="img" className="bg-gray-500 w-[200px] h-[150px] rounded-xl"></div>
            <div className="flex justify-center">
              <img src={react} alt="icon_react" className="w-8 h-8 my-2 mx-1 dark:border-white border-black border-2 rounded-full"/>
              <img src={mysql} alt="icon_mysql" className="w-8 h-8 my-2 mx-1 dark:border-white border-black border-2 rounded-full"/>
              <img src={tailwind} alt="icon_tailwind" className="w-8 h-8 my-2 mx-1 dark:border-white border-black border-2 rounded-full"/>
              <img src={git} alt="icon_github" className="w-8 h-8 my-2 mx-1 dark:border-white border-black border-2 rounded-full"/>
            </div>
            <p className="font-semibold w-[200px] h-[150px] mt-4">Con C.R.U.D y API de google incuido, la pagina permitia subir y visualizar libros la informacion del mismo para leyentes</p>
          </div>

          <div className="mt-4 mb-12 text-center mx-16">
            <p className="mb-6">Web para <br />Restaurante</p>
            <div id="img" className="bg-gray-500 w-[200px] h-[150px] rounded-xl"></div>
            <div className="flex justify-center">
              <img src={react} alt="icon_react" className="w-8 h-8 my-2 mx-1 dark:border-white border-black border-2 rounded-full"/>
              <img src={js} alt="icon_js" className="w-8 h-8 my-2 mx-1 dark:border-white border-black border-2 rounded-full"/>
              <img src={tailwind} alt="icon_tailwind" className="w-8 h-8 my-2 mx-1 dark:border-white border-black border-2 rounded-full"/>
              <img src={git} alt="icon_github" className="w-8 h-8 my-2 mx-1 dark:border-white border-black border-2 rounded-full"/>
            </div>
            <p className="font-semibold w-[200px] h-[150px] mt-4">Pagina simple para visualizar a travez de QR el menu e informacion de un restaurante </p>
          </div>

          <div className="mt-4 mb-12 text-center mx-16">
            <p className="mb-6">Tienda virtual <br />E-commerce</p>
            <div id="img" className="bg-gray-500 w-[200px] h-[150px] rounded-xl"></div>
            <div className="flex justify-center">
              <img src={react} alt="icon_react" className="w-8 h-8 my-2 mx-1 dark:border-white border-black border-2 rounded-full"/>
              <img src={mysql} alt="icon_mysql" className="w-8 h-8 my-2 mx-1 dark:border-white border-black border-2 rounded-full"/>
              <img src={tailwind} alt="icon_tailwind" className="w-8 h-8 my-2 mx-1 dark:border-white border-black border-2 rounded-full"/>
              <img src={git} alt="icon_github" className="w-8 h-8 my-2 mx-1 dark:border-white border-black border-2 rounded-full"/>
            </div>
            <p className="font-semibold w-[200px] h-[150px] mt-4">Pagina de ventas virtual acerca de ropa totalmente funcional, diseño unico y llamativo a la vista</p>
          </div>

          <div className="mt-4 mb-12 text-center mx-16">
            <p className="mb-6">Calculadora <br />Virtual</p>
            <div id="img" className="bg-gray-500 w-[200px] h-[150px] rounded-xl"></div>
            <div className="flex justify-center">
              <img src={react} alt="icon_react" title="React" className="w-8 h-8 my-2 mx-1 dark:border-white border-black border-2 rounded-full"/>
              <img src={js} alt="icon_js" title="JavaScrip" className="w-8 h-8 my-2 mx-1 dark:border-white border-black border-2 rounded-full"/>
              <img src={tailwind} alt="icon_tailwind" title="Tailwind" className="w-8 h-8 my-2 mx-1 dark:border-white border-black border-2 rounded-full"/>
              <img src={git} alt="icon_github" title="Github" className="w-8 h-8 my-2 mx-1 dark:border-white border-black border-2 rounded-full"/>
            </div>
            <p className="font-semibold w-[200px] h-[150px] mt-4">Simple calculadora creada en mis inicios, aprendido acerca de JavaScript y experimentando con el mismo</p>
          </div>

        </div>
      </div>

      <div id="contacto">
        <div>
          <p className="font-semibold text-center mt-4 pb-12 dark:text-white">Soy interesante, verdad? y me falta mucho por aprender! <br />
          Si lo deseas puedes contactarme y podemos hablar de la vida o de programacion juntos</p>
        </div>

        <div className="md:flex justify-center items-center pt-12 pb-28">
          <div className="mx-16">
            <img src={foto} alt="foto_perfil" className="w-48 h-48 mb-10 border-black dark:border-white border-2 rounded-full"/>

            <div className="flex justify-center items-center">
              <img src={instagram} alt="redes1" className="w-11 h-11 cursor-pointer mx-2 dark:hidden"/>
              <img src={w_instagram} alt="redes2" className="w-11 h-11 cursor-pointer mx-2 hidden dark:inline-block"/>
              <img src={github} alt="redes2" className="w-11 h-11 cursor-pointer mx-2 dark:hidden"/>
              <img src={w_github} alt="redes2" className="w-11 h-11 cursor-pointer mx-2 hidden dark:inline-block"/>
              <img src={whatsapp} alt="redes3" className="w-11 h-11 cursor-pointer mx-2 dark:hidden"/>
              <img src={w_whatsapp} alt="redes3" className="w-11 h-11 cursor-pointer mx-2 hidden dark:inline-block"/>
            </div>
          </div>

          <div className="mx-16 dark:text-white">
            <div className="flex items-center font-semibold my-4">
              <img src={telefono} alt="telefono" className="w-8 h-8 mr-4 dark:hidden"/>
              <img src={w_telefono} alt="telefono" className="w-8 h-8 mr-4 hidden dark:inline-block"/>
              <p className=" text-xl">+57 3157870130</p>
            </div>
            <div className="flex items-center font-semibold my-4">
              <img src={correo} alt="correo" className="w-8 h-8 mr-4 dark:hidden"/>
              <img src={w_correo} alt="correo" className="w-8 h-8 mr-4 hidden dark:inline-block"/>
              <p className=" text-xl">cgaviria930@gmail.com</p>
            </div>
            <div className="flex items-center font-semibold my-4">
              <img src={casa} alt="casa" className="w-8 h-8 mr-4 dark:hidden"/>
              <img src={w_casa} alt="casa" className="w-8 h-8 mr-4 hidden dark:inline-block"/>
              <p className=" text-xl">Cali - Valle del Cauca</p>
            </div>
            <div className="flex justify-center mt-20">
              <button className="flex bg-sky-400 rounded-2xl px-5 py-3 text-left hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400">
                <p className="font-semibold dark:text-white">Hoja de Vida</p>
                <img src={descarga} alt="descarga" className="ml-3 w-5 h-5 dark:hidden"/>
                <img src={w_descarga} alt="descarga" className="ml-3 w-5 h-5 hidden dark:inline-block"/>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}