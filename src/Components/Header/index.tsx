import React from "react";
import useBreakPoints from "app/hooks/useBreakPoints";
import { Flex, Container } from "@components/Containers";
import Filter from "@components/Filter";
import { LogoTexted, Logo } from "@assets/svgs";
import Wrapper from "./style";

export default function Header() {
  const { smallScreen } = useBreakPoints();
  return (
    <Wrapper>
      <Container>
        <Flex
          justify="space-between"
          align="center"
          gap={smallScreen ? "1rem" : "3rem"}
          fullWidth
        >
          {smallScreen ? (
            <Logo size={40} inverted />
          ) : (
            <LogoTexted size={180} />
          )}
          <Flex flex={1}>
            <Filter />
          </Flex>
        </Flex>
      </Container>
    </Wrapper>
  );
}
