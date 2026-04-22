import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection, RightSection, ProfileImage } from "./HeroStyles";
import Button from "../../styles/GlobalComponents/Button";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there!
        </SectionTitle>
        <SectionText>
          I'm Aryan Gupta, a backend developer who designs and ships scalable,
          production-ready systems. I have hands-on experience building AI
          agents, brand citation pipelines with OpenAI, and A/B testing
          infrastructure for LLM applications. I love building backend systems
          that others rely on without knowing it. AI is just another part of
          that stack, not a shortcut.
        </SectionText>
        <Button
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700 sm:px-2 sm:py-1"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/files/resume.pdf";
          }}
        >
          My Resume
        </Button>
      </LeftSection>
      <RightSection>
        <ProfileImage src="/images/profile.jpeg" alt="Aryan Gupta" />
      </RightSection>
    </Section>
  </>
);

export default Hero;
