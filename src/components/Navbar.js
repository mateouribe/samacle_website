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
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const { t } = useTranslation();

  useEffect(() => {
    console.log("currentLanguage", currentLanguage);
  }, [currentLanguage]);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to([".topLine", ".bottomLine"], {
        backgroundColor: colors.black,
      });
    }, mobileContainer);

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
      tl.fromTo(
        ".blacklogo",

        {
          opacity: 1,
          scale: 1,
        },
        {
          opacity: 0,
          scale: 0.8,
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
      tl.fromTo(
        ".whiteLogo",
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
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
        "-=0.5"
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
    setCurrentLanguage(lng);
  };

  return (
    <nav className="w-full relative z-[200]">
      <ul
        className="flex-row items-center justify-between hidden w-full lg:flex p-mobile md:px-tablet lg:px-desktop"
        ref={desktopContainer}
      >
        <CustomLink route="/" className="text-black">
          <img className="" src="/images/icon.svg" alt="Samacle icon" />
        </CustomLink>
        <li className="flex justify-start gap-30">
          <ul className="flex w-full text-sm text-black gap-30">
            <CustomLink
              route="/"
              className="desktopItem"
              image="/images/homeSs.png"
            >
              {t("nav.home")}
            </CustomLink>
            <CustomLink
              route="/our-services"
              className="desktopItem"
              image="/images/servicesSs.png"
            >
              {t("nav.services")}
            </CustomLink>
            <CustomLink
              route="/our-projects"
              className="desktopItem"
              image="/images/projectsSs.png"
            >
              {t("nav.projects")}
            </CustomLink>
            <CustomLink
              route="/about-us"
              className="desktopItem"
              image="/images/aboutSs.png"
            >
              {t("nav.about")}
            </CustomLink>
            <CustomLink
              route="/contact-us"
              className="desktopItem"
              image="/images/contactSs.png"
            >
              {t("nav.contact")}
            </CustomLink>
          </ul>
          <div
            className="text-black flex flex-col text-sm relative uppercase language-container z-[990]"
            onClick={onClickLanguage}
            onMouseDown={(e) => gsap.to(e.currentTarget, { scale: 0.8 })}
            onMouseUp={(e) => gsap.to(e.currentTarget, { scale: 1 })}
          >
            <span className="text-black material-symbols-outlined hover:text-main">
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
        className="fixed flex lg:hidden w-full justify-between items-start p-mobile md:p-tablet z-[999999]"
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
          <div className="flex items-center justify-center w-full h-full ">
            <ul className="flex flex-col items-start justify-center w-full text-white ">
              <CustomLink
                route="/"
                className="text-subtitleDesktop w-full border-b-[1px] border-black text-white mobileItem"
                onClick={onClickBurgerMenu}
              >
                {t("nav.home")}
              </CustomLink>
              <CustomLink
                route="/our-services"
                className="text-subtitleDesktop w-full border-b-[1px] border-black text-white mobileItem"
                onClick={onClickBurgerMenu}
              >
                {t("nav.services")}
              </CustomLink>
              <CustomLink
                route="/our-projects"
                className="text-subtitleDesktop w-full border-b-[1px] border-black text-white mobileItem"
                onClick={onClickBurgerMenu}
              >
                {t("nav.projects")}
              </CustomLink>
              <CustomLink
                route="/about-us"
                className="text-subtitleDesktop w-full border-b-[1px] border-black text-white mobileItem"
                onClick={onClickBurgerMenu}
              >
                {t("nav.about")}
              </CustomLink>
              <CustomLink
                route="/contact-us"
                className="text-subtitleDesktop w-full border-b-[1px] border-black text-white mobileItem"
                onClick={onClickBurgerMenu}
              >
                {t("nav.contact")}
              </CustomLink>
            </ul>
          </div>
          <ul className="flex gap-20 text-white">
            <li
              className={`mobileItem ${
                currentLanguage !== "en" ? "text-white opacity-70" : "text-main"
              }`}
              onClick={() => {
                changeLanguage("en");
                onClickBurgerMenu();
              }}
            >
              EN
            </li>
            <li
              className={`mobileItem ${
                currentLanguage === "fr" ? "text-main" : "text-white opacity-70"
              }`}
              onClick={() => {
                changeLanguage("fr");
                onClickBurgerMenu();
              }}
            >
              FR
            </li>
            <li
              className={`mobileItem ${
                currentLanguage === "sp" ? "text-main" : "text-white opacity-70"
              }`}
              onClick={() => {
                changeLanguage("sp");
                onClickBurgerMenu();
              }}
            >
              ES
            </li>
            <li
              className={`mobileItem ${
                currentLanguage === "hi" ? "text-main" : "text-white opacity-70"
              }`}
              onClick={() => {
                changeLanguage("hi");
                onClickBurgerMenu();
              }}
            >
              HI
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
