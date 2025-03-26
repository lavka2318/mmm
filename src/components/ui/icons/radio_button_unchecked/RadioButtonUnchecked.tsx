import { FC } from "react";

import { determineVersion } from "@/components/ui/icons/settingsIcons";
import { IconProps } from "@/components/ui/icons/typeIcons";

import s from "../Icons.module.scss";

export const RadioButtonUnchecked: FC<IconProps> = ({
  color = "",
  version = "dark",
  ...rest
}) => {
  return (
    <svg
      {...rest}
      className={`${s.svg} ${rest.className} `}
      fill={"none"}
      height={"24"}
      viewBox={"0 0 24 24"}
      width={"24"}
      xmlns={"http://www.w3.org/2000/svg"}
    >
      <g clipPath={"url(#clip0_5661_1670)"}>
        <path
          d={
            "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
          }
          fill={color ? color : determineVersion(version)}
        />
      </g>
      <defs>
        <clipPath id={"clip0_5661_1670"}>
          <rect fill={"white"} height={"24"} width={"24"} />
        </clipPath>
      </defs>
    </svg>
  );
};
