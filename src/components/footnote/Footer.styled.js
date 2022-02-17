import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

export const StyledSocialLinks = styled.div`
  display: none;

  display: block;
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  color: var(--light-grey);

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const StyledCredit = styled.div`
  color: var(--light-slate);
  font-size: var(--fz-xxs);
  line-height: 1;
  a {
    padding: 10px;
  }
`;
