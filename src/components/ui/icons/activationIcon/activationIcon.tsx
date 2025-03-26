import { FC } from "react";
import { IconProps } from "@/components/ui/icons/typeIcons";

export const ActivationIcon: FC<IconProps> = ({
  color = "",
  height = 18,
  version = "dark",
  width = 18,
  ...rest
}) => {
  return (
    <svg
      {...rest}
      fill={"none"}
      height={"80"}
      viewBox={"0 0 173 173"}
      width={"80"}
      xmlns={"http://www.w3.org/2000/svg"}
    >
      <path
        d={
          "M173 86.5C173 134.273 134.273 173 86.5 173C38.7274 173 0 134.273 0 86.5C0 38.7274 38.7274 0 86.5 0C134.273 0 173 38.7274 173 86.5ZM8.08804 86.5C8.08804 129.806 43.1943 164.912 86.5 164.912C129.806 164.912 164.912 129.806 164.912 86.5C164.912 43.1943 129.806 8.08804 86.5 8.08804C43.1943 8.08804 8.08804 43.1943 8.08804 86.5Z"
        }
        fill={"#00A91B"}
      />
      <path
        d={"M128 57.9375L74.375 111.562L50 87.1875"}
        stroke={"#00A91B"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"10"}
      />
    </svg>
  );
};
