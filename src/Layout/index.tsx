import React from "react";
import GlobalStyles from "helpers/GlobalStyles";
import Header from "@components/Header";
import LayoutWrapper from "./styles";

export default function Layout() {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Header />
      <main className="content">body</main>
      {/* footer if any */}
    </LayoutWrapper>
  );
}
