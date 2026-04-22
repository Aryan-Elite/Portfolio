import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ImgPlaceholder,
} from "./ProjectsStyles";
import {
  Section,
  SectionTitle,
  SectionText,
  SectionDivider,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <>
    <Section id="projects">
      <SectionTitle main>Projects</SectionTitle>
      <SectionText>
        When I'm not working, I'm still building. Personal projects are where
        I experiment, break things, and figure out what actually works.
      </SectionText>

      <GridContainer>
        {projects.map((project, index) => (
          <BlogCard key={index}>
            {project.image ? (
              <Img src={project.image} alt={project.title} />
            ) : (
              <ImgPlaceholder>{project.title[0]}</ImgPlaceholder>
            )}
            <HeaderThree title={project.title}>{project.title}</HeaderThree>
            <Hr />
            <CardInfo>{project.description}</CardInfo>
            <div>
              <TitleContent>Tech Stack</TitleContent>
              <TagList>
                {project.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks
                href={project.visit}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink /> Live Preview
              </ExternalLinks>
              <ExternalLinks
                href={project.source}
                source="true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub /> Source Code
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
    <SectionDivider colorAlt />
  </>
);

export default Projects;
