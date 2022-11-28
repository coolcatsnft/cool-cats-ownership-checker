import styled from 'styled-components';
import { device } from '../utils/device';

export const HeaderPartial = (tag) => {
  return `
    font-family: var(--coolcats-font);
    font-weight: normal;
    font-size: var(--font-size-${tag}-mobile);
    line-height: var(--line-height-${tag}-mobile);
    ${device.laptop} {
      font-size: var(--font-size-${tag});
      line-height: var(--line-height-${tag});
    }
  `;
}

const StyledHeader = styled.h1`
  ${(props) => HeaderPartial(props.as)}
`;

export default function Heading({
  children,
  className,
  id,
  style,
  tag,
}) {
  const props = {
    className,
    id,
    style,
  };

  if (typeof children === 'string') {
    props.dangerouslySetInnerHTML = {
      __html: children
    }
  } else {
    props.children = children;
  }

  return <StyledHeader as={tag} {...props} />;
}
