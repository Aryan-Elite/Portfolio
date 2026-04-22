import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem 1.2rem;
    gap: 0.8rem;
  }
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const Div2 = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 1.4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 1rem;
    order: 3;
    width: 100%;
    justify-content: center;
    padding: 0.4rem 0 0.6rem;
    border-top: 1px solid rgba(255,255,255,0.08);
  }
`;

export const Div3 = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 0.2rem;
  }
`;

export const NavLink = styled.a`
  font-size: 1.8rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: #fff;
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.6rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
    line-height: 24px;
  }
`;

export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus { outline: none; }
  &:hover { color: #fff; }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover { opacity: 1; }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 6px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 4px;
    svg { font-size: 2.2rem !important; }
  }
`;
