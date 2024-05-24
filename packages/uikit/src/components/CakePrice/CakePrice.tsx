import React from "react";
import styled, { keyframes } from "styled-components";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
  showSkeleton?: boolean;
}

const shakingAnimation = keyframes`
  0% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(-2px);
  }
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
    .soon {
      animation: ${shakingAnimation} 0.3s ease infinite;
    }
  }
`;

const SoonText = styled(Text)`
  color: green;
`;

const CakePrice: React.FC<React.PropsWithChildren<Props>> = ({
  cakePriceUsd,
  color = "textSubtle",
  showSkeleton = true,
}) => {
  const logoUrl = "https://pbs.twimg.com/profile_images/1788242323018592262/-FD9ZU4L_400x400.jpg"; // Logo URL'si
  return cakePriceUsd ? (
    <PriceLink
      href="https://x.com/Dexhole" // Yeni link
      target="_blank"
    >
      <img src={logoUrl} alt="Logo" width="24px" height="24px" style={{ marginRight: "8px" }} />
      <SoonText className="soon" color={color} bold>$SOON</SoonText>
    </PriceLink>
  ) : showSkeleton ? (
    <Skeleton width={80} height={24} />
  ) : null;
};

export default React.memo(CakePrice);
