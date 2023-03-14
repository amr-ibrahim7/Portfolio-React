import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemsStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'This Is an Info',
}) {
  return (
    <ItemsStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemsStyles>
  );
}
