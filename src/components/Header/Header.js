import Link from "next/link";
import Image from "next/image";
import React, { useCallback } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => {
  const scrollToSection = useCallback((id) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  return (
    <Container>
      <Div1>
        <Link href="/" passHref>
          <div style={{ display: "flex", alignItems: "center", color: "white", cursor: "pointer" }}>
            <Image src="/logo.svg" height={60} width={60} alt="logo" />
            <span style={{ marginLeft: 10, marginTop: 7, fontSize: 30 }}>Aryan</span>
          </div>
        </Link>
      </Div1>
      <Div2>
        <li>
          <NavLink onClick={() => scrollToSection('technologies')}>Skills</NavLink>
        </li>
        <li>
          <NavLink onClick={() => scrollToSection('experience')}>Experience</NavLink>
        </li>
        <li>
          <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
        </li>
        <li>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/aryan-elite">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/aryan-gupta-41494323a/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
