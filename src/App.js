import React from "react";
import './App.css';
import desktop from "./images/image-hero-desktop.png";
import mobile from "./images/image-hero-mobile.png";
import databiz from "./images/client-databiz.svg"
import audiophile from "./images/client-audiophile.svg"
import maker from "./images/client-maker.svg"
import meeet from "./images/client-meet.svg"
import logo from "./images/logo.svg"
import chevronDown from "./images/icon-arrow-down.svg"
import menuOpen from "./images/icon-menu.svg"
import closeMenu from "./images/icon-close-menu.svg"

function App() {
  const hadleOpenMenu =() => {
    const navbar = document.querySelector(".navbar")
    const menuButton = document.querySelector(".menu-button")

    navbar.classList.toggle("open")

    if(navbar.classList.contains("open")){
      menuButton.src = closeMenu
    }
  }

  return (

    <>
      <header className="p-5 flex items-center justify-between">
        <div>
          <img src={logo} alt="Logo"/> 
        

          <navbar className="navbar ">
            <div><button>Feature <img src={chevronDown} alt=""/></button></div>
            <div><button>Company <img src={chevronDown} alt=""/></button></div>
            <div><button>Careers</button></div>
            <div><button>About</button></div>
          </navbar>
        </div>
        <div>
          <button
           onClick={hadleOpenMenu}>
            <img src={menuOpen}alt=""
             className="menu-button"/>
            </button>
        </div>

        <div className="hidden lg:block">
          <button>Login</button>
          <button>Sign Up</button> 
        </div>
      </header>


      <section className="flex flex-col-reverse py-20 md:grid md:gap-10 md:grid-cols-2 md:place-items-center
       max-w-4xl lg:max-w-5xl md:max-auto">
        <article className="text-center md:text-left px-5 xl:px-0">
        <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl mb-5">Makake remote work</h1>
        <p className="mb-5">
          Get your team in sync, no matter your location.
          Streamline processes, create rituals, and watch productivity sore.
        </p>
        <button className="bg-black rounded-lg shadow text-white font-bold
        hover:opacity-75 transition-all duration-150 pt-3 pb-2 px-6 cursor-pointer">Learn More
          </button>

          <ul className="grid grid-cols-4 gap-1 mt-10 ">
            <li>
              <img src={databiz} alt=""className="w- md:w-24"/>
            </li>
            <li>
              <img src={audiophile} alt=""className="w-16 md:w-24"/>
              </li>
            <li>
              <img src={meeet} alt=""className="w-16 md:w-24"/>
            </li>
            <li>
              <img src={maker} alt=""className="w-16 md:w-24"/>
              </li>
          </ul>

        </article>

        <article>
          <picture> 
            <source media = "(min-width:768px)" srcSet={desktop} />
            <img src={mobile}alt="" className="w-full" /> 
          </picture>
          
        </article>
      </section>
    </>
  );
}

export default App;
