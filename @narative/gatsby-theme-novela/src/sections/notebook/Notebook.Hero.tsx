import React, {Fragment} from 'react';
import styled from '@emotion/styled';

import Headings from '@components/Headings';

import mediaqueries from '@styles/media';
import {IArticle, IAuthor} from '@types';

import ArticleAuthors from '../article/Article.Authors';
import Image from '../../components/Image/Image';

import GithubBadge from '../../icons/badges/github-badge.svg';
import ColabBadge from '../../icons/badges/colab-badge.svg';

interface NotebookHeroProps {
  notebook: IArticle;
  authors: IAuthor[];
}

const NotebookHero = ({notebook, authors}: NotebookHeroProps) => {
  const hasCoAUthors = authors.length > 1;
  console.log(notebook);
  return (
    <Hero>
      <Header>
        <HeroHeading>{notebook.title}</HeroHeading>
        <HeroSubtitle hasCoAUthors={hasCoAUthors}>
          <div style={{width: '100%', display: 'flex'}}>
            <ArticleAuthors authors={authors} style={{width: '100%'}} />
            <ArticleMeta hasCoAUthors={hasCoAUthors}>
              {notebook.date} · {Math.round(notebook.timeToRead * 1.8)} min read
            </ArticleMeta>
            {notebook.tag.map(tag => (
              <ArticleTag key={tag}>#{tag} </ArticleTag>
            ))}
          </div>
        </HeroSubtitle>
        {notebook.links && (
          <HeroLinkArea>
            {notebook.links.colab && (
              <LinkBadge href={notebook.links.colab} target="_blank">
                <Image width={150} src={ColabBadge}></Image>
              </LinkBadge>
            )}
            {notebook.links.github && (
              <LinkBadge href={notebook.links.github} target="_blank">
                <Image width={150} src={GithubBadge}></Image>
              </LinkBadge>
            )}
          </HeroLinkArea>
        )}
      </Header>
    </Hero>
  );
};

export default NotebookHero;

const Hero = styled.div`
  ${p => mediaqueries.phablet`
    &::before {
      content: "";
      width: 100%;
      height: 0px;
      background: ${p.theme.colors.primary};
      position: absolute;
      left: 0;
      top: 0;
      transition: ${p.theme.colorModeTransition};
    }

    &::after {
      content: "";
      width: 100%;
      height: 10px;
      background: ${p.theme.colors.background};
      position: absolute;
      left: 0;
      top: 10px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      transition: ${p.theme.colorModeTransition};
    }
  `}
`;

const ArticleMeta = styled.div<{hasCoAUthors: boolean}>`
  margin-left: ${p => (p.hasCoAUthors ? '10px' : '0')};
  ${mediaqueries.phablet`
    margin-left: 0;
  `};
`;
const ArticleTag = styled.div`
  margin-left: 10px;
  color: ${p => p.theme.colors.accent};

  ${mediaqueries.phablet`
    margin-left: 0;
  `}
`;
const LinkBadge = styled.daiv`
  margin-right: 10px;

  ${mediaqueries.phablet`
    margin-right: 5px;
  `}
`;

const Header = styled.header`
  position: relative;
  z-index: 10;
  margin:100px auto 40px;
  padding-left: 68px;
  max-width: 1000px;

  ${mediaqueries.desktop`
    padding-left: 53px;
    max-width: calc(507px + 53px);
    margin: 100px auto 70px;
  `}

  ${mediaqueries.tablet`
    padding-left: 0;
    margin: 40px auto 70px;
    max-width: 480px;
  `}

  ${mediaqueries.phablet`
    margin: 70px auto 80px;
    padding: 0 40px;
  `}

  @media screen and (max-height: 700px) {
    margin: 50px auto;
  }
`;

const HeroHeading = styled(Headings.h1)`
  font-size: 48px;
  font-family: ${p => p.theme.fonts.serif};
  margin-bottom: 25px;
  font-weight: bold;
  line-height: 1.32;
  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 36px;
  `} ${mediaqueries.phablet`
    font-size: 32px;
  `};
`;

const HeroSubtitle = styled.div<{hasCoAUthors: boolean}>`
  position: relative;
  display: flex;
  font-size: 18px;
  align-items: stretch;
  color: ${p => p.theme.colors.grey};

  ${p => mediaqueries.phablet`
    font-size: 14px;
    flex-direction: column;

    ${p.hasCoAUthors &&
      `
        &::before {
          content: '';
          position: absolute;
          left: -20px;
          right: -20px;
          top: -10px;
          bottom: -10px;
          border: 1px solid ${p.theme.colors.horizontalRule};
          opacity: 0.5;
          border-radius: 5px;
        }
    `}


    strong {
      display: block;
      font-weight: 500;
      margin-bottom: 5px;
    }
  `}
`;

const HeroLinkArea = styled.div`
  position: relative;
  display: flex;
  font-size: 18px;
  align-items: stretch;
  color: ${p => p.theme.colors.grey};
  margin: 15px 0;

  ${p => mediaqueries.phablet`
    font-size: 14px;
    flex-direction: column;
  `}
`;
