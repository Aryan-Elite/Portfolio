import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Image from "next/image";
import { SectionTitle } from "../../styles/GlobalComponents";

// Enhanced Color Palette
const colors = {
  primary: "#0F1624", // Deep space blue
  secondary: "#162340", // Rich navy blue
  accent: "#3A7CA5", // Softer blue accent
  textPrimary: "#FFFFFF", // Crisp white
  textSecondary: "#B1C5E2", // Soft blue-gray
  background: "#0A1128", // Darker background
  cardBackground: "linear-gradient(145deg, #162340, #0F1624)", // Gradient background
  shadowColor: "rgba(22, 35, 64, 0.5)", // Soft shadow
  timelineLine: "rgba(58, 124, 165, 0.3)" // Soft timeline line color
};

// Advanced Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const timelineAnimation = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 100%;
    opacity: 1;
  }
`;

const Section = styled.section`
  padding: 100px 48px;
  background: ${colors.background};
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    padding: 60px 24px;
  }

  @media screen and (max-width: 640px) {
    padding: 40px 16px;
  }
`;




const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${colors.timelineLine};
    transform: translateX(-50%);
    z-index: 1;
  }

  @media screen and (max-width: 640px) {
    padding: 0 1rem 0 3.5rem;

    &::before {
      left: 16px;
      transform: none;
    }
  }
`;

const TimelineCard = styled.div`
  background: ${colors.cardBackground};
  border-radius: 20px;
  box-shadow: 
    0 15px 35px ${colors.shadowColor},
    0 5px 15px ${colors.shadowColor};
  padding: 2.5rem;
  position: relative;
  margin-bottom: 3rem;
  width: 45%;
  transition: all 0.4s ease;
  border: 2px solid transparent;

  ${props => props.isVisible && css`
    animation: ${fadeInUp} 1s ease-out;
  `}

  &:nth-child(even) {
    align-self: flex-end;
    margin-left: auto;
  }

  &:nth-child(odd) {
    align-self: flex-start;
    margin-right: auto;
  }

  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${colors.accent};
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  &:nth-child(odd)::before {
    right: -45px;
  }

  &:nth-child(even)::before {
    left: -45px;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: ${colors.accent};
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-left: 0 !important;
    margin-right: 0 !important;
    align-self: unset !important;
    padding: 1.8rem;

    &::before {
      left: -32px !important;
      right: auto !important;
      width: 20px;
      height: 20px;
      top: 2.5rem;
      transform: none;
    }
  }
`;

const CompanyLogo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  border: 3px solid ${colors.accent};
  overflow: hidden;
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${TimelineCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const CompanyName = styled.h3`
  font-size: 2.4rem;
  font-weight: 900;
  color: ${colors.textPrimary};
  text-align: center;
  margin-bottom: 0.5rem;
`;

const RoleTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${colors.textSecondary};
  text-align: center;
  margin-bottom: 1rem;
`;

const Duration = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${colors.accent};
  text-align: center;
  margin-bottom: 2rem;
  font-style: italic;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BulletItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  color: ${colors.textSecondary};
  font-size: 1.4rem;
  line-height: 1.6;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '▹';
    color: ${colors.accent};
    position: absolute;
    left: 0;
    top: 2px;
    font-size: 1.4rem;
  }

  &:hover {
    color: ${colors.textPrimary};
    transform: translateX(5px);
    transition: all 0.3s ease;
  }
`;

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      company: "EasilyGeo",
      role: "Software Developer",
      duration: "Jan 2026 – Apr 2026",
      logo: "/images/easilygeo.jpeg",
      bullets: [
        "Built a brand citation tracking pipeline using OpenAI Web Search and Responses API, with PostgreSQL for storing prompts, citations, and ranking data across AI search engines.",
        "Took the product from zero to 20 paying clients by handling backend, infrastructure, and iteration end-to-end.",
        "Built an AI agent to auto-generate technical blogs; 28 out of 30 indexed by Google within 10 days (93% indexing rate)."
      ]
    },
    {
      company: "LaikaTest",
      role: "Software Developer",
      duration: "Oct 2025 – Jan 2026",
      logo: "/images/laikatest.jpeg",
      bullets: [
        "Designed and built prompt management infrastructure using Supabase, storing, labelling, and versioning prompt variants to support structured A/B testing across agent runs.",
        "Implemented distributed tracing using OpenTelemetry to monitor LLM call chains, token usage, and latency across agent runs.",
        "Published the LaikaTest npm SDK in Node.js with TypeScript support for prompt retrieval, variant management, and client-side score submission."
      ]
    },
    {
      company: "Envint",
      role: "Backend Developer Intern",
      duration: "Dec 2024 – Mar 2025",
      logo: "/images/envint.jpeg",
      bullets: [
        "Developed backend services using Node.js and DynamoDB, reducing report generation time by 80% for a SaaS platform.",
        "Achieved 99.9% uptime and 100,000+ annual report downloads via AWS EC2 and CloudWatch."
      ]
    }
  ];

  return (
    <Section id="experience" ref={sectionRef}>
      <SectionTitle>Experience</SectionTitle>
      <TimelineContainer>
        {experiences.map((exp, index) => (
          <TimelineCard
            key={index}
            isVisible={isVisible}
          >
            <CompanyLogo>
              {exp.logo ? (
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={100}
                  height={100}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                />
              ) : (
                <span style={{ fontSize: "3.6rem", fontWeight: 800, color: colors.accent }}>
                  {exp.company[0]}
                </span>
              )}
            </CompanyLogo>
            <CompanyName>{exp.company}</CompanyName>
            <RoleTitle>{exp.role}</RoleTitle>
            <Duration>{exp.duration}</Duration>
            <BulletList>
              {exp.bullets.map((bullet, i) => (
                <BulletItem key={i}>{bullet}</BulletItem>
              ))}
            </BulletList>
          </TimelineCard>
        ))}
      </TimelineContainer>
    </Section>
  );
};

export default Experience;
