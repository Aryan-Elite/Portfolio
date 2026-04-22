import styled from "styled-components";

// Grid Container (VERTICAL scroll normal)
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1.2rem;
  margin: 2rem auto 3rem;
  justify-items: center;
  max-width: 1000px;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }
`;

// Tech Card
export const TechCard = styled.div`
  background: linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.08));
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 18px;
  padding: 1.2rem 0.8rem;
  text-align: center;
  transition: 0.4s ease all;
  height: 110px;
  width: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-6px) scale(1.05);
    background: linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.12));
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.25);
  }

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    padding: 1.2rem 0.6rem;
  }

  @media (max-width: 480px) {
    height: auto;
    width: 100%;
    padding: 1rem 0.4rem;
    border-radius: 12px;
  }
`;

// Tech Icon inside Card
export const TechIcon = styled.div`
  font-size: 2.8rem;
  margin-bottom: 0.4rem;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

// Section Heading
export const SectionHeading = styled.h2`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.7) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 3rem auto 2rem auto;
  text-align: center;
  padding: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 32px;
    line-height: 40px;
    margin: 2rem auto 1.5rem auto;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 28px;
    line-height: 36px;
    margin: 1.5rem auto 1rem auto;
  }
`;

// Tech Name
export const TechName = styled.h3`
  font-size: 1.6rem;
  color: #d1d5db;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;
