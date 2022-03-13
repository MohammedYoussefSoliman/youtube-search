import React from "react";
import { Flex, Container } from "@components/Containers";
import Filter from "@components/Filter";
import { LogoTexted } from "@assets/svgs";
import Wrapper from "./style";

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Flex justify="space-between" align="center" gap="3rem" fullWidth>
          <LogoTexted size={180} />
          <Flex flex={1}>
            <Filter />
          </Flex>
        </Flex>
      </Container>
    </Wrapper>
  );
}
