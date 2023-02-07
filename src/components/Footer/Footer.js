import React from 'react';

import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
          <LinkTitle>PAGES</LinkTitle>
          <LinkItem href="#about">About</LinkItem>
          <LinkItem href="#projects">Projects</LinkItem>
          <LinkItem href="#technologies">Technologies</LinkItem>
          <LinkItem href="#achievements">Achievements</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>SOCIAL MEDIA</LinkTitle>
          <LinkItem href="https://instagram.com/haasanerdem" target={"_blank"}>Instagram</LinkItem>
          <LinkItem href="https://github.com/thendra-s" target={"_blank"}>Github</LinkItem>
          <LinkItem href="https://discord.com/users/267373400022843393" target={"_blank"}>Discord</LinkItem>
          <LinkItem href="https://youtube.com/@thendrra" target={"_blank"}>Youtube</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>CONTACT</LinkTitle>
          <LinkItem href="mailto:me@benthendra.cf">Mail</LinkItem>
        </LinkColumn>
      </LinkList>
      <p id='copy' align="center">© 2019 - 2023 Thendra. All rights reserved.</p>
      <p id='made' align="center">Made by <a id="thendralink" href="https://github.com/thendra-s" target={"_blank"}>Thendra</a>.</p>
    </FooterWrapper>
  );
};

export default Footer;
