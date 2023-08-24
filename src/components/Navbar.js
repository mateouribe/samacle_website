import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CustomLink from "./customElements/CustomLink";
import { Expo, gsap } from "gsap";
import { colors } from "../utils/constants";
import SplitText from "../utils/Split3.min.js";
import { useStatesContext } from "../context/StatesProvider";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const mobileTl = useRef(null);
  const mobileContainer = useRef(null);
  const desktopTl = useRef(null);
  const desktopContainer = useRef(null);
  const languageTl = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      //Create tl
      desktopTl.current = gsap.timeline();
      const tl = desktopTl.current;

      gsap.set(desktopContainer.current, {
        y: -100,
      });

      tl.to(desktopContainer.current, {
        y: 0,
        duration: 1,
        ease: Expo.easeInOut,
      });

      //Language container animation
      languageTl.current = gsap.timeline({ paused: true });

      languageTl.current.to(".language-options", {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: Expo.easeInOut,
      });
    }, desktopContainer);

    return () => ctx.revert();
  }, []);

  //Mobile animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      mobileTl.current = gsap.timeline({ paused: true });
      const tl = mobileTl.current;

      const items = gsap.utils.toArray(".mobileItem");
      let splitMobileItems = [];
      items.forEach((item) => {
        const split = new SplitText(item, {
          type: "words",
        });

        splitMobileItems.push(split.words);
      });

      //Set position to menu out of screen
      gsap.set(".contentMobileContainer", {
        left: "-100%",
      });
      //Set items overflow to hidden
      gsap.set(".mobileItem", {
        overflow: "hidden",
      });
      //Set whiteLogo opacity to 0
      gsap.set(".whiteLogo", {
        opacity: 0,
      });
      //Animate burger
      tl.to(".topLine", {
        y: 4,
        rotate: 45,
        duration: 0.5,
      });
      tl.to(
        ".bottomLine",
        {
          y: -4,
          rotate: -45,
          duration: 0.5,
        },
        "-=0.5"
      );

      //Animate burger color
      tl.to(
        [".topLine", ".bottomLine"],
        {
          backgroundColor: colors.white,
        },
        "-=0.5"
      );
      tl.to(
        ".burgerCircle",
        {
          borderColor: colors.white,
        },
        "-=0.5"
      );

      //Animate black logo
      tl.to(
        ".blacklogo",
        {
          opacity: 0,
          duration: 0.5,
        },
        "-=0.5"
      );

      //Animate menu container
      tl.to(
        ".contentMobileContainer",
        {
          left: 0,
          duration: 0.5,
          ease: Expo.easeInOut,
        },
        "-=0.5"
      );

      //Animate white logo
      tl.to(
        ".whiteLogo",
        {
          opacity: 1,
          duration: 0.3,
        },
        "-=0.2"
      );
      //Animate menu items
      tl.fromTo(
        splitMobileItems,
        {
          y: 50,
        },
        {
          y: -50,
          duration: 1,
          stagger: 0.05,
          ease: Expo.easeInOut,
        },
        "-=0.3"
      );
    }, mobileContainer);
  }, []);

  const onClickBurgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      mobileTl.current.reverse();
      mobileTl.current.duration(1);
      setIsMenuOpen(false);
    } else {
      mobileTl.current.play();
      mobileTl.current.duration(1.55);
      //  mobileTl.current.timeScale(1);
    }
  };

  const onClickLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
    if (isLanguageOpen) {
      languageTl.current.reverse();
      setIsMenuOpen(false);
    } else {
      languageTl.current.play();
    }
  };

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="w-full relative z-[10]">
      <ul
        className="hidden lg:flex w-full flex-row justify-between p-mobile md:px-tablet lg:px-desktop"
        ref={desktopContainer}
      >
        <CustomLink route="/" className="text-black">
          <img className="" src="/images/icon.svg" alt="Samacle icon" />
        </CustomLink>
        <li className="flex gap-30 justify-start">
          <ul className="w-full flex gap-30 text-sm text-black">
            <CustomLink
              route="/"
              className="desktopItem"
              image="/images/homeSs.png"
            >
              Home
            </CustomLink>
            <CustomLink
              route="/services"
              className="desktopItem"
              image="/images/servicesSs.png"
            >
              Services
            </CustomLink>
            <CustomLink
              route="/projects"
              className="desktopItem"
              image="/images/projectsSs.png"
            >
              Projects
            </CustomLink>
            <CustomLink
              route="/about"
              className="desktopItem"
              image="/images/aboutSs.png"
            >
              About
            </CustomLink>
            <CustomLink
              route="/contact"
              className="desktopItem"
              image="/images/contactSs.png"
            >
              Contact
            </CustomLink>
          </ul>
          <div
            className="text-black flex flex-col text-sm relative uppercase language-container z-[990]"
            onClick={onClickLanguage}
            onMouseDown={(e) => gsap.to(e.currentTarget, { scale: 0.8 })}
            onMouseUp={(e) => gsap.to(e.currentTarget, { scale: 1 })}
          >
            <span className="material-symbols-outlined text-black hover:text-main">
              language
            </span>
            <div className="bg-white absolute left-0 top-full min-w-max py-5 rounded-10 rounded-tl-[0px] border-[1px] border-gray language-options opacity-0 scale-0 z-[-10]">
              <ul>
                <li
                  className="px-10 hover:bg-lightGray"
                  onClick={() => {
                    changeLanguage("en");
                  }}
                >
                  English
                </li>
                <li
                  className="px-10 hover:bg-lightGray"
                  onClick={() => {
                    changeLanguage("fr");
                  }}
                >
                  Français
                </li>
                <li
                  className="px-10 hover:bg-lightGray"
                  onClick={() => {
                    changeLanguage("sp");
                  }}
                >
                  Español
                </li>
                <li
                  className="px-10 hover:bg-lightGray"
                  onClick={() => {
                    changeLanguage("hi");
                  }}
                >
                  Hindi{" "}
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>

      {/* Mobile */}
      <div
        className="fixed flex lg:hidden w-full justify-between items-start p-mobile md:p-tablet z-[9999]"
        ref={mobileContainer}
      >
        {/* Burger */}
        <img
          src="/images/icon.svg"
          alt="Samacle icon"
          className="w-[134px] blacklogo bg-white rounded-full"
        />
        <div
          className="w-[50px] h-[50px] border-[3px] border-black flex flex-col justify-center items-center gap-[5px] rounded-full z-[9999] burgerCircle"
          onClick={onClickBurgerMenu}
        >
          <span className="w-[30px] h-[3px] bg-black rounded-full topLine origin-center lineBurger" />
          <span className="w-[30px] h-[3px] bg-black rounded-full bottomLine origin-center lineBurger" />
        </div>

        {/* Menu */}
        <div className="w-full h-[100vh] absolute bg-black top-0 right-0 p-mobile md:p-tablet flex flex-col contentMobileContainer">
          <img
            src="/images/iconWhite.svg"
            alt="Samacle icon"
            className="w-[134px] whiteLogo"
          />
          <div className="w-full h-full flex justify-center items-center ">
            <ul className="w-full flex flex-col text-white justify-center items-start ">
              <CustomLink
                route="/"
                className="text-subtitleDesktop w-full border-b-[1px] border-black text-white mobileItem"
                onClick={onClickBurgerMenu}
              >
                Home
              </CustomLink>
              <CustomLink
                route="/services"
                className="text-subtitleDesktop w-full border-b-[1px] border-black text-white mobileItem"
                onClick={onClickBurgerMenu}
              >
                Services
              </CustomLink>
              <CustomLink
                route="/projects"
                className="text-subtitleDesktop w-full border-b-[1px] border-black text-white mobileItem"
                onClick={onClickBurgerMenu}
              >
                Projects
              </CustomLink>
              <CustomLink
                route="/about"
                className="text-subtitleDesktop w-full border-b-[1px] border-black text-white mobileItem"
                onClick={onClickBurgerMenu}
              >
                About
              </CustomLink>
              <CustomLink
                route="/contact"
                className="text-subtitleDesktop w-full border-b-[1px] border-black text-white mobileItem"
                onClick={onClickBurgerMenu}
              >
                Contact
              </CustomLink>
            </ul>
          </div>
          <ul>
            <li className="text-main mobileItem">EN</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
