import React from "react";
import Text from "../attoms/Text";
import Button from "../attoms/Button";
import gitHubPic from "@/public/assets/images/Tools/GitHubLogo.svg";

import Picture from "../attoms/Picture";
export default function Heading() {
  return (
    <div className="flex flex-col gap-12 sm:items-center sm:text-center">
      <Text className="font-bold text-Landing-name text-mark-text">
        Mahdi Shahabi Zadeh
      </Text>
      <Text className="font-bold text-Landing-job text-regular">
        Web Developer
      </Text>
      <div className="flex gap-8">
        <Button
          href={
            "https://uploadkon.ir/uploads/ee8408_26f1ef1b62-b9f6-4d0c-87db-37a5c6f96a44.png"
          }
        >
          <div>CV</div>
        </Button>
        <Button href={"https://github.com/ShahabMorgan"}>
          <div className="flex items-center justify-center gap-3 ">
            <Picture
              className="size-Icon-size-button"
              src={gitHubPic}
            ></Picture>
            <div>GitHub</div>
          </div>
        </Button>
      </div>
    </div>
  );
}
