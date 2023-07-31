import React, { useEffect } from "react";
import Transition from "../components/Transition";

const StudyCase = () => {
  return <div>StudyCase</div>;
};

export default Transition(StudyCase);

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import BottomCart from "../components/BottomCart";
// import Footer from "../components/Footer";
// import NavBar from "../components/NavBar";
// import { useCartContext } from "../context/CartProvider";
// import ProfileRestaurantBanner from "../components/profile/ProfileRestaurantBanner";

// function Perfil() {
//   const { link } = useParams();
//   const [profileStore, setProfileStore] = useState(null);
//   const [categories, setCategories] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isCartShown, setIsCartShown] = useState(false);
//   const { setIsCartActive } = useCartContext();

//   useEffect(() => {
//     function getProfileInfo() {
//       fetch(`https://services.pagotienda.com/store/profile/${link}`)
//         .then((res) => res.json())
//         .then((resJson) => {
//           setProfileStore(resJson.store);
//           setCategories(resJson.categories);
//           setIsLoaded(true);
//         })
//         .catch((err) => console.error(err));
//     }
//     getProfileInfo();
//   }, [link]);

//   const handleCart = () => {
//     setIsCartActive(true);
//   };
//   window.onscroll = function () {
//     let navBar = document.getElementById("navBar");
//     let rect = navBar.getBoundingClientRect();
//     let menuTop = rect.top;

//     if (menuTop < -100) {
//       setIsCartShown(true);
//     } else {
//       setIsCartShown(false);
//     }
//   };
//   return (
//     <div>
//       <BottomCart
//         setIsCartShown={setIsCartShown}
//         isCartShown={isCartShown}
//         onClick={handleCart}
//       />
//       <NavBar />
//       {isLoaded === true ? (
//         <div>
//           <div className="py-[40px] px-[16px] md:px-[50px] lg:px-[100px]">
//             <ProfileRestaurantBanner
//               store={profileStore}
//               storeCategories={categories}
//               storeProducts={profileStore.products}
//             />
//           </div>
//           <Footer />
//         </div>
//       ) : (
//         <div className="w-full h-[100vh] cursor-progress">
//           <div className="absolute bottom-0 top-0 right-0 left-0 m-auto w-[50px] h-[50px]">
//             <span className="loader"></span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Perfil;
