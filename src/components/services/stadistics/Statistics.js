import React from "react";
import { useNavigate } from "react-router";
import Card from "./Card";
import CustomATag from "../../customElements/CustomATag";
import { navigateToPage } from "../../../utils/navigateToPage";
import { colors } from "../../../utils/constants";

const Statistics = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full px-mobile pt-[5px] md:px-tablet lg:px-desktop grid grid-cols-1 md:grid-cols-3 gap-50">
      <Card title="97%">
        97% of consumers search for local businesses online.{" "}
        <CustomATag
          href={undefined}
          colorHover={colors.main}
          onClick={() => {
            navigateToPage(navigate, "/contact");
          }}
          className="text-main"
        >
          Having a website ensures your business is discoverable.
        </CustomATag>
      </Card>
      <Card title="40%">
        Small businesses that have an online presence and a website{" "}
        <CustomATag
          href={undefined}
          colorHover={colors.main}
          onClick={() => {
            navigateToPage(navigate, "/contact");
          }}
          className="text-main"
        >
          grow 40% faster
        </CustomATag>{" "}
        than those that don't.
      </Card>
      <Card title="x3">
        Websites{" "}
        <CustomATag
          href={undefined}
          colorHover={colors.main}
          onClick={() => {
            navigateToPage(navigate, "/contact");
          }}
          className="text-main"
        >
          generate 3 times more leads and sales{" "}
        </CustomATag>
        than traditional methods.
      </Card>
    </div>
  );
};

export default Statistics;
