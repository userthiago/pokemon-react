import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0;

  h2 {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin: 0 24px;
  }
`;

export const Media = styled(SVG)`
  fill: #fff;
  height: 40px;
  width: 40px;
  &:hover {
    fill: #cc1416;
  }
`;
