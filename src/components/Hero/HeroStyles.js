import styled from 'styled-components';

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const ProfileImage = styled.img`
  width: 340px;
  height: 340px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  border: 4px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 40px rgba(19, 173, 199, 0.25);
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
