import styled from 'styled-components';

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  border: 4px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 40px rgba(19, 173, 199, 0.25);

  @media ${(props) => props.theme.breakpoints.md} {
    width: 220px;
    height: 220px;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 0 32px 48px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    padding: 2rem 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    padding: 1.6rem 1.6rem;
  }
`;
