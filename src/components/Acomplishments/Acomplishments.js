import React from 'react';

import { Section } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "11", text: 'TECHNOLOGIES'},
  { number: "5", text: 'YEARS OF EXPERIENCE', },
  { number: "23", text: 'COMPLETED PROJETCS', },
  { number: "23", text: 'REPOSITORIES', }
];

const Acomplishments = () => (
  <Section id="achievements">
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
