'use client';

import { StyledHeading, StyledTitle, StyledButton } from './heading.styles';
import React from 'react';
interface HeadingProps {
  readonly headingName: string;
  readonly buttonName: string;
}

export default function Heading(props: HeadingProps): React.ReactElement {
  const { headingName, buttonName } = props;
  return (
    <StyledHeading>
      <StyledTitle>{headingName}</StyledTitle>
      <StyledButton>{buttonName}</StyledButton>
    </StyledHeading>
  );
}