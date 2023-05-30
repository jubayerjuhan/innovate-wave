import { Bullet } from "@/components/sections/home/FeatureWithImageSection/types";
import React from "react";
import { IconType } from "react-icons/lib";

export interface IconBulletProps {
  Icon: IconType;
  type: "iconAndTitle" | "iconOnly";
  bullet: Bullet;
}
