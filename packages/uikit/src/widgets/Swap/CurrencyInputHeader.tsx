import { AtomBox } from "@pancakeswap/ui";
import { ReactNode } from "react";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";

interface Props {
  title: ReactNode;
  subtitle: ReactNode;
}

export const CurrencyInputHeader = ({ title, subtitle }: Props) => {
  return (
    <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
      <AtomBox display="flex" width="full" alignItems="center" justifyContent="space-between">
        {title}
      </AtomBox>
      {subtitle}
    </AtomBox>
  );
};
//style={{ backgroundImage: "/swap_page_bg.png", backgroundColor: "red" }}

export const CurrencyInputHeaderTitle = ({ children }: { children: ReactNode }) => (
  <Text
    color="#31EAF6"
    fontSize="50px"
    textAlign="center"
    fontWeight="700"
    style={{ alignSelf: "center", textShadow: "2px 2px 15px #31EAF6" }}
  >
    {children}
  </Text>
);
export const CurrencyInputHeaderSubTitle = ({ children }: { children: ReactNode }) => (
  <Text color="textSubtle" fontSize="20px" style={{ alignSelf: "center" }}>
    {children}
  </Text>
);
