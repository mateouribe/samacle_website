const colors = {
  black: "#282828",
  white: "#FFFFFF",
  main: "#FF6B00",
  lightGray: "#F6F6F6",
  gray: "#808080",
};

const services = [
  {
    title: "Web Design and<br/>Development.",
    subtitle: "UX/UI Design Services.",
    description:
      "Your website is the face of your business in the digital world. Our talented team of designers and developers create visually stunning, user-friendly websites that leave a lasting impression on your audience. <i>With a focus on responsive design and seamless functionality, we ensure your online presence stands out.</i>",
    image: "/images/website.png",
  },
  {
    title: "Search Engine<br/>Optimization (SEO).",
    subtitle: "",
    description:
      "Unlock the true potential of organic search traffic with our data-driven SEO strategies. <i>We utilize the latest tools and industry insights to optimize your website's ranking on search engines, driving a steady stream of targeted traffic to your site.</i>",
    image: "/images/seo.png",
  },
  {
    title: "Email marketing.",
    subtitle: "",
    description:
      "Leverage the power of email campaigns to nurture leads and maintain customer relationships. <i>Our team of experts will help you create and execute email marketing strategies that drive conversions and increase revenue.</i>",
    image: "/images/mail.png",
  },
];

const projects = [
  // Amazing pet grooming
  {
    completed: true,
    info: {
      link: "amazing-pet-grooming",
      title: "Amazing Pet Grooming",
      place: "Canada",
      date: "2023",
      tags: ["UI Design", "Web Development"],
      technologies: ["React JS", "GSAP", "Tailwind CSS"],
    },
    image: "/images/projects_grooming.png",
    mockupImages: {
      big: "/images/mockupBigGrooming.png",
      mid: "/images/mockupMidGrooming.png",
      sm: "/images/mockupSmGrooming.png",
    },
    studyCase: {
      image: "/images/study-main-grooming.png",
      meet: "Pago Tienda is a web page where business partners exhibit and market their products or services so customers can purchase them. Pago Tienda Integrates the cryptocurrency payment method that is currently relatively recent and innovative in Argentina.",
      background:
        "In a market that is expanding in large proportions, not only in the Argentine region, it is vital to access the most significant number of products or services quickly and easily. In the case of Argentina, due to its current economic situation, which is not favorable at all, the local currency has been devalued abysmally. This event has caused the inhabitants of this country to be forced to resort to different ways of preserving liquidity, such as dollars or cryptocurrencies. This situation has motivated the Pago Tienda team to design an online store with payment options like cryptocurrencies.",
      development: [
        {
          image: "/images/development1-pago.png",
          title: "Registration processes.",
          description:
            "To create a groundbreaking operating experience, the NODO Film Systems allowed camera operators to adjust the weight of the wheels, control mass and drag, and create different camera simulations.",
        },
        {
          image: "/images/development1-pago.png",
          title: "Organization and features.",
          description:
            "To create a groundbreaking operating experience, the NODO Film Systems allowed camera operators to adjust the weight of the wheels, control mass and drag, and create different camera simulations.",
        },
        {
          image: "/images/development3-pago.png",
          title: "Purchase processes.",
          description:
            "To create a groundbreaking operating experience, the NODO Film Systems allowed camera operators to adjust the weight of the wheels, control mass and drag, and create different camera simulations.",
        },
      ],
      challenges:
        "To create a groundbreaking operating experience, the NODO Film Systems allowed camera operators to adjust the weight of the wheels, control mass and drag, and create different camera simulations.",
      figmaDesigns: ["/images/figmaDesktopGrooming.png"],
      designSystem: {
        typography: [
          { heading: "H1 heavy", desktop: "171px", mobile: "80px" },
          { heading: "H2 heavy", desktop: "80px", mobile: "60px" },
          { heading: "H3 heavy", desktop: "50px", mobile: "40px" },
          { heading: "H4 medium", desktop: "45px", mobile: "30px" },
          { heading: "H5 regular", desktop: "36px", mobile: "24px" },
          { heading: "p regular", desktop: "16px", mobile: "16px" },
        ],
        colors: [
          { name: "Primary", hex: "#65BFF8" },
          { name: "Secondary", hex: "#DDF2FF" },
          { name: "White", hex: "#FFFFFF" },
          { name: "Black", hex: "#2A2A2A" },
          { name: "Gray", hex: "#949494" },
          { name: "Purple", hex: "#7B1DF4" },
          { name: "Pink", hex: "#DF2C7C" },
          { name: "Blue", hex: "#3977EC" },
        ],
      },
    },
  },

  // Pago Tienda
  {
    completed: true,
    info: {
      link: "pago-tienda",
      title: "Pago Tienda",
      place: "Argentina",
      date: "2023",
      tags: ["UI Design", "Web Development"],
      technologies: ["React JS", "GSAP", "Tailwind CSS"],
    },
    image: "/images/projects_pago_tienda.png",
    mockupImages: {
      big: "/images/mockupBigPago.png",
      mid: "/images/mockupMidPago.png",
      sm: "/images/mockupSmPago.png",
    },
    studyCase: {
      image: "/images/study-main-pago.png",
      meet: "Pago Tienda is a web page where business partners exhibit and market their products or services so customers can purchase them. Pago Tienda Integrates the cryptocurrency payment method that is currently relatively recent and innovative in Argentina.",
      background:
        "In a market that is expanding in large proportions, not only in the Argentine region, it is vital to access the most significant number of products or services quickly and easily. In the case of Argentina, due to its current economic situation, which is not favorable at all, the local currency has been devalued abysmally. This event has caused the inhabitants of this country to be forced to resort to different ways of preserving liquidity, such as dollars or cryptocurrencies. This situation has motivated the Pago Tienda team to design an online store with payment options like cryptocurrencies.",
      development: [
        {
          image: "/images/development1-pago.png",
          title: "Registration processes.",
          description:
            "During the registration process, new users will be asked for information such as their email address, name, and preferred addresses for frequent locations, and finally, the user will be asked to use the pre-designed cryptocurrency wallet to facilitate future payments.",
        },
        {
          image: "/images/development1-pago.png",
          title: "Organization and features.",
          description:
            "Pago Tienda was developed in different phases. The first was to study the popularity of cryptocurrencies in the region. During the second phase, establishments and businesses willing to accept cryptocurrency payments were sought. The third phase was to design the web page and the fourth phase was to develop the web page.",
        },
        {
          image: "/images/development3-pago.png",
          title: "Purchase processes.",
          description:
            "Once you have selected all the products you want, there will be a section called the cart, the section to make payment for your purchase. You will be asked for certain information such as delivery address and customer name. For payment, in this case, with the integrated method of payment with cryptocurrencies that are linked to the wallet developed to make the purchase process more accessible, a deposit of the crypto with which you decide to pay will be made, and now you just have to wait and enjoy your order.",
        },
      ],
      challenges:
        "To create a groundbreaking operating experience, the NODO Film Systems allowed camera operators to adjust the weight of the wheels, control mass and drag, and create different camera simulations.",
      figmaDesigns: [
        "/images/figmaDesktopPago.png",
        "/images/figmaMobilePago.png",
      ],
      designSystem: {
        typography: [
          { heading: "H1 bold", desktop: "64px", mobile: "32px" },
          { heading: "H2 bold", desktop: "48px", mobile: "24px" },
          { heading: "H3 bold", desktop: "32px", mobile: "22px" },
          { heading: "H5 medium", desktop: "22px", mobile: "20px" },
          { heading: "P regular", desktop: "16px", mobile: "14px" },
        ],
        colors: [
          { name: "Primary", hex: "#960FCC" },
          { name: "Secondary", hex: "#F7EEFB" },
          { name: "White", hex: "#FFFFFF" },
          { name: "Black", hex: "#3E3E3E" },
          { name: "Dark blue", hex: "#28292C" },
          { name: "Gray", hex: "#828385" },
          { name: "Light gray", hex: "#B0B0B0" },
          { name: "Main gradient", hex: "#640A88" },
        ],
      },
    },
  },

  //Soon
  {
    completed: false,
    info: {
      link: "pago-tienda",
      title: "Pago Tienda",
      place: "Argentina",
      date: "2023",
      tags: ["UI Design", "Web Development"],
      technologies: ["React JS", "GSAP", "Tailwind CSS"],
    },
    image: "/images/projects_pago_tienda.png",
    mockupImages: {
      big: "/images/mockupBigPago.png",
      mid: "/images/mockupMidPago.png",
      sm: "/images/mockupSmPago.png",
    },
    studyCase: {
      image: "/images/study-main-pago.png",
      meet: "Pago Tienda is a web page where business partners exhibit and market their products or services so customers can purchase them. Pago Tienda Integrates the cryptocurrency payment method that is currently relatively recent and innovative in Argentina.",
      background:
        "In a market that is expanding in large proportions, not only in the Argentine region, it is vital to access the most significant number of products or services quickly and easily. In the case of Argentina, due to its current economic situation, which is not favorable at all, the local currency has been devalued abysmally. This event has caused the inhabitants of this country to be forced to resort to different ways of preserving liquidity, such as dollars or cryptocurrencies. This situation has motivated the Pago Tienda team to design an online store with payment options like cryptocurrencies.",
      development: [
        {
          image: "/images/development1-pago.png",
          title: "Registration processes.",
          description:
            "To create a groundbreaking operating experience, the NODO Film Systems allowed camera operators to adjust the weight of the wheels, control mass and drag, and create different camera simulations.",
        },
        {
          image: "/images/development1-pago.png",
          title: "Organization and features.",
          description:
            "To create a groundbreaking operating experience, the NODO Film Systems allowed camera operators to adjust the weight of the wheels, control mass and drag, and create different camera simulations.",
        },
        {
          image: "/images/development3-pago.png",
          title: "Purchase processes.",
          description:
            "To create a groundbreaking operating experience, the NODO Film Systems allowed camera operators to adjust the weight of the wheels, control mass and drag, and create different camera simulations.",
        },
      ],
      challenges:
        "To create a groundbreaking operating experience, the NODO Film Systems allowed camera operators to adjust the weight of the wheels, control mass and drag, and create different camera simulations.",
      figmaDesigns: [
        "/images/figmaDesktopPago.png",
        "/images/figmaMobilePago.png",
      ],
      designSystem: {
        typography: [
          { heading: "H1 bold", desktop: "64px", mobile: "32px" },
          { heading: "H2 bold", desktop: "48px", mobile: "24px" },
          { heading: "H3 bold", desktop: "32px", mobile: "22px" },
          { heading: "H5 medium", desktop: "22px", mobile: "20px" },
          { heading: "P regular", desktop: "16px", mobile: "14px" },
        ],
        colors: [
          { name: "Primary", hex: "#960FCC" },
          { name: "Secondary", hex: "#F7EEFB" },
          { name: "White", hex: "#FFFFFF" },
          { name: "Black", hex: "#3E3E3E" },
          { name: "Dark blue", hex: "#28292C" },
          { name: "Gray", hex: "#828385" },
          { name: "Light gray", hex: "#B0B0B0" },
          { name: "Main gradient", hex: "#640A88" },
        ],
      },
    },
  },
];

const processes = [
  {
    title: "Strategy",
    description:
      "We kickstart every project with a data-driven strategy that sets the foundation for your success. Our team dives deep into market insights, customer behavior, and industry trends to craft a tailored plan that aligns with your goals.",
  },
  {
    title: "Design",
    description:
      "Our design wizards bring imagination to life, conjuring captivating visuals that leave a lasting impression. From sleek interfaces to stunning graphics, we create an enchanting user experience that keeps visitors spellbound.",
  },
  {
    title: "Development",
    description:
      "Our development sorcerers work their magic, transforming design into functional reality. With cutting-edge technology and meticulous attention to detail, we weave a seamless web of code that powers your website's performance.",
  },
];
export { colors, services, projects, processes };

// description:
//       "Paula, (or 'The Cat Whisperer', as some people call her) has been in the pet grooming industry for over 20 years. <i>Graduated from the Nash Pet Grooming Academy in Kentucky</i>, she has dedicated most of her life to work with dogs and cats. She's passionate about nature and animal care. Her vast experience with all kind of dogs and cats is something we have the privilege to share with our customers.",
