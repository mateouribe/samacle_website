import React from "react";
import SectionTitle from "../customElements/SectionTitle";

const ClientsOpinion = () => {
  return (
    <section className="py-desktop px-mobile md:px-tablet lg:px-desktop">
      <SectionTitle noMaxHeight className="text-black">
        Client's <br />
        thoughts.
      </SectionTitle>
    </section>
  );
};

export default ClientsOpinion;
