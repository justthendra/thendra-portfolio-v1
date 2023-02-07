import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';


const Timeline = () => {

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
      </SectionText>
      
    </Section>
  );
};

export default Timeline;
