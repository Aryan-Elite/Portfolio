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
import { BsRobot } from "react-icons/bs";

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
        <TechIcon><SiJavascript color="#F7DF1E" /></TechIcon>
        <TechName>JavaScript</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><SiPython color="#3776AB" /></TechIcon>
        <TechName>Python</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><SiCplusplus color="#00599C" /></TechIcon>
        <TechName>C++</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><SiHtml5 color="#E34F26" /></TechIcon>
        <TechName>HTML</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><SiCss3 color="#1572B6" /></TechIcon>
        <TechName>CSS</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><FaDatabase color="#336791" /></TechIcon>
        <TechName>SQL</TechName>
      </TechCard>
    </GridContainer>

    <SectionHeading>Frameworks & Libraries</SectionHeading>
    <GridContainer>
      <TechCard>
        <TechIcon><SiNodedotjs color="#339933" /></TechIcon>
        <TechName>Node.js</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><FaReact color="#61DAFB" /></TechIcon>
        <TechName>React.js</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><SiExpress color="#ffffff" /></TechIcon>
        <TechName>Express.js</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><SiFastapi color="#009688" /></TechIcon>
        <TechName>FastAPI</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><SiGraphql color="#E10098" /></TechIcon>
        <TechName>GraphQL</TechName>
      </TechCard>
    </GridContainer>

    <SectionHeading>Databases & Cloud</SectionHeading>
    <GridContainer>
      <TechCard>
        <TechIcon><SiMongodb color="#47A248" /></TechIcon>
        <TechName>MongoDB</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><SiPostgresql color="#336791" /></TechIcon>
        <TechName>PostgreSQL</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><SiRedis color="#DC382D" /></TechIcon>
        <TechName>Redis</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><SiSupabase color="#3ECF8E" /></TechIcon>
        <TechName>Supabase</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><SiMysql color="#4479A1" /></TechIcon>
        <TechName>MySQL</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><SiAmazonaws color="#FF9900" /></TechIcon>
        <TechName>AWS</TechName>
      </TechCard>
    </GridContainer>

    <SectionHeading>DevOps & Tools</SectionHeading>
    <GridContainer>
      <TechCard>
        <TechIcon><IoLogoDocker color="#2496ED" /></TechIcon>
        <TechName>Docker</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><SiGit color="#F05032" /></TechIcon>
        <TechName>Git</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><SiPostman color="#FF6C37" /></TechIcon>
        <TechName>Postman</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><SiOpenai color="#ffffff" /></TechIcon>
        <TechName>OpenAI API</TechName>
      </TechCard>
      <TechCard>
        <TechIcon><BsRobot color="#CC785C" /></TechIcon>
        <TechName>Claude Code</TechName>
      </TechCard>
    </GridContainer>
    <SectionDivider />
  </Section>
);

export default Technologies;
