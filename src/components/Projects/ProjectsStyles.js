import styled from "styled-components";

/*
 * Color Guide:
 * Primary Background: #0F1624 (dark blue background)
 * Secondary Background: #162340 (lighter blue for cards)
 * Accent: #FFB800 (golden yellow for highlights)
 * Text Primary: #FFFFFF (white for main text)
 * Text Secondary: #B1C5E2 (light blue for secondary text)
 * Button Primary: #3366FF (bright blue)
 * Button Secondary: #FF3366 (pink/red)
 * Card Shadow: rgba(0, 0, 0, 0.2)
 */

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  transition: transform 0.5s ease;
`;

export const ImgPlaceholder = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(135deg, #162340 0%, #3a7ca5 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.2);
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  padding: 3rem 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 2rem;
  }
`;

export const BlogCard = styled.div`
  background: #162340;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);

    ${Img} {
      transform: scale(1.05);
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  color: #b1c5e2;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  padding: 0 1.5rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffffff;
  padding: 1rem 1.5rem 0.5rem;
  font-size: ${(props) => (props.title ? "2.4rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 0.5rem 1.5rem 1rem;
  border: 0;
  background: #ffb800;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 1.5rem;
  color: #b1c5e2;
  font-size: 1.4rem;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1.5rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 1.5rem;
  gap: 0.8rem;
`;

export const Tag = styled.li`
  color: #ffffff;
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 1.5rem;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: auto;
`;

export const ExternalLinks = styled.a`
  color: #ffffff;
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  background: ${(props) => (props.source ? "#FF3366" : "#3366FF")};
  border-radius: 8px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;

  svg {
    font-size: 1.6rem;
    margin-right: 8px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    background: ${(props) => (props.source ? "#E62D5B" : "#2855D6")};
  }
`;
