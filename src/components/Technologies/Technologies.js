import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  GridContainer,
  SectionHeading,
  TechCard,
  TechIcon,
  TechName,
} from "./TechnologiesStyles";

import {
  SiGit,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiExpress,
  SiPython,
  SiJavascript,
  SiFastapi,
  SiPostman,
  SiPostgresql,
  SiGraphql,
  SiRedis,
  SiSupabase,
  SiAmazonaws,
  SiMysql,
  SiOpenai,
  SiNodedotjs,
} from "react-icons/si";

import { FaReact, FaDatabase } from "react-icons/fa";
import { IoLogoDocker } from "react-icons/io5";

const Technologies = () => (
  <Section id="technologies">
    <SectionDivider />
    <SectionTitle>Tech Stacks</SectionTitle>
    <SectionText>
      I build backend systems and AI-powered products using modern web, cloud, and data technologies.
    </SectionText>

    <SectionHeading>Programming Languages</SectionHeading>
    <GridContainer>
      <TechCard>
        <TechIcon>
          <SiJavascript />
        </TechIcon>
        <TechName>JavaScript</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiPython />
        </TechIcon>
        <TechName>Python</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiCplusplus />
        </TechIcon>
        <TechName>C++</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiHtml5 />
        </TechIcon>
        <TechName>HTML</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiCss3 />
        </TechIcon>
        <TechName>CSS</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <FaDatabase />
        </TechIcon>
        <TechName>SQL</TechName>
      </TechCard>
    </GridContainer>

    <SectionHeading>Frameworks & Libraries</SectionHeading>
    <GridContainer>
      <TechCard>
        <TechIcon>
          <SiNodedotjs />
        </TechIcon>
        <TechName>Node.js</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <FaReact />
        </TechIcon>
        <TechName>React.js</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiExpress />
        </TechIcon>
        <TechName>Express.js</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiFastapi />
        </TechIcon>
        <TechName>FastAPI</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiGraphql />
        </TechIcon>
        <TechName>GraphQL</TechName>
      </TechCard>
    </GridContainer>

    <SectionHeading>Databases & Cloud</SectionHeading>
    <GridContainer>
      <TechCard>
        <TechIcon>
          <SiMongodb />
        </TechIcon>
        <TechName>MongoDB</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiPostgresql />
        </TechIcon>
        <TechName>PostgreSQL</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiRedis />
        </TechIcon>
        <TechName>Redis</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiSupabase />
        </TechIcon>
        <TechName>Supabase</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiMysql />
        </TechIcon>
        <TechName>MySQL</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiAmazonaws />
        </TechIcon>
        <TechName>AWS</TechName>
      </TechCard>
    </GridContainer>

    <SectionHeading>DevOps & Tools</SectionHeading>
    <GridContainer>
      <TechCard>
        <TechIcon>
          <IoLogoDocker />
        </TechIcon>
        <TechName>Docker</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiGit />
        </TechIcon>
        <TechName>Git</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiPostman />
        </TechIcon>
        <TechName>Postman</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiOpenai />
        </TechIcon>
        <TechName>OpenAI API</TechName>
      </TechCard>
    </GridContainer>
    <SectionDivider />
  </Section>
);

export default Technologies;
