import React from "react";
import SectionTitle from "../customElements/SectionTitle";
import CustomButton from "../customElements/CustomButton";

const ClientsOpinion = () => {
  return (
    <section className="py-desktop px-mobile md:px-tablet lg:px-desktop bg-main flex flex-col gap-100 min-h-[90vh] justify-center items-center">
      <div className="flex flex-col gap-5">
        <p className="text-[22px] md:text-[32px] uppercase text-black">
          To create a groundbreaking operating experience, the NODO Film Systems
          allowed camera operators to adjust the weight of the wheels, control
          mass and drag, and create different camera simulations.
        </p>
        <span className="text-black text-sm">Andrés. Pago Tienda, CEO.</span>
      </div>
      <CustomButton blackColor className="self-start">
        Become a client
      </CustomButton>
    </section>
  );
};

export default ClientsOpinion;
