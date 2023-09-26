import React, { useEffect, useLayoutEffect, useRef } from "react";
import CustomSection from "../components/customElements/CustomSection";
import emailjs from "@emailjs/browser";
import Transition from "../components/Transition";
import CustomButton from "../components/customElements/CustomButton";
import CustomInput from "../components/customElements/CustomInput";
import { colors } from "../utils/constants";
import SocialMedia from "../components/SocialMedia";
import CustomATag from "../components/customElements/CustomATag";
import SectionTitle from "../components/customElements/SectionTitle";
import { Expo, gsap } from "gsap";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const body = document.querySelector("body");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".contactContainer",
        {
          opacity: 0,
          yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 2,
          ease: Expo.easeOut,
        }
      );

      gsap.to(body, {
        backgroundColor: colors.white,
      });
      //scroll to top right before it mounts
      window.scrollTo(0, 0);
    }, container);

    return () => ctx.revert();
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m9fncgb",
        "template_1vhitae",
        form.current,
        "cUNHhLO-5dUz6GaiH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div ref={container}>
      <CustomSection
        hasPadding
        className="flex min-h-[100vh] flex-col justify-between md:flex-row md:h-view gap-50 py-desktop contactContainer"
      >
        <div className="w-full md:w-[30%] md:h-full flex flex-row md:flex-col items-start justify-between">
          <SectionTitle
            className="text-black leading-[90%]"
            noMaxHeight
            text={t("contact.welcomeMessage")}
          ></SectionTitle>

          <div className="flex flex-col gap-20">
            <ul className="text-black">
              <li>
                {/* <a href="22">hello@samacle.com</a> */}
                <CustomATag href="22" colorHover="#9E9E9E">
                  hello@samacle.com
                </CustomATag>
              </li>
              <li>
                <CustomATag href="tel:=14375186019" colorHover="#9E9E9E">
                  +1 (437) 518-6019
                </CustomATag>
              </li>
              <li>
                <CustomATag href="tel:=14374730048" colorHover="#9E9E9E">
                  +1 (437) 473-0048
                </CustomATag>
              </li>
              <li>
                <CustomATag href="/" colorHover="#9E9E9E">
                  Waterloo, ON, Canada.
                </CustomATag>
              </li>
            </ul>
            <ul className="flex gap-5">
              <SocialMedia color={colors.gray} bgColor="#ECECEC" />
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[60%] h-full flex flex-col justify-start items-center gap-30">
          <h4 className="text-black text-text md:text-subtitleTablet">
            {t("contact.formTitle")}
          </h4>
          <form
            className="flex flex-col w-full gap-10"
            onSubmit={sendEmail}
            ref={form}
          >
            <CustomInput
              name="user_name"
              type="text"
              label="Name"
              placeholder={t("contact.placeholder.name")}
              required
            />
            <CustomInput
              name="user_email"
              type="email"
              label="Email"
              placeholder={t("contact.placeholder.email")}
              required
            />
            <CustomInput
              name="message"
              type="text"
              label="Message"
              placeholder={t("contact.placeholder.message")}
              textarea
              required
            />
            <CustomButton className="mt-20" type="submit">
              {t("button.send")}
            </CustomButton>
          </form>
        </div>
      </CustomSection>
    </div>
  );
};

export default Transition(Contact);
