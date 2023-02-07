import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (

  

   <>
    <Section row nopadding id="about">
      <LeftSection>
        <SectionTitle main center>
          Hi there <br />
          I'm <span id="span">Thendra</span>
        </SectionTitle>
        <SectionText>
        Hi, I'm Thendra. I am 17 years old. I am a 3rd year high school student. 
			I have been dealing with software for about 5 years. I started with node.js, 
			developed Discord Bot and made my biggest improvement with the latest FiveM script. 
			Software has been and continues to be my biggest hobby to date. 
			I'm still improving myself.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;