import { useMediaQuery } from "@mui/material";
import devices from "helpers/devices";

export default function useBreakpoints() {
  const xxLargeScreen = useMediaQuery(devices.xxLarge);
  const xLargeScreen = useMediaQuery(devices.xLarge);
  const largeScreen = useMediaQuery(devices.large);
  const mediumScreen = useMediaQuery(devices.medium);
  const smallScreen = useMediaQuery(devices.small);
  const xSmallScreen = useMediaQuery(devices.xSmall);

  return {
    xxLargeScreen,
    xLargeScreen,
    largeScreen,
    mediumScreen,
    smallScreen,
    xSmallScreen,
  };
}
