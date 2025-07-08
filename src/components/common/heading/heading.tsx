'use client';

import { StyledHeading, StyledTitle } from './heading.styles';
import React from 'react';
interface HeadingProps {
  readonly headingName: string;
}

export default function Heading(props: HeadingProps): React.ReactElement {
  const { headingName,  } = props;
  return (
    <StyledHeading>
      <StyledTitle>{headingName}</StyledTitle>
    </StyledHeading>
  );
}