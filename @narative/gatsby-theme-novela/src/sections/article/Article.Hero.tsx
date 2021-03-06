import React, {Fragment} from 'react';
import styled from '@emotion/styled';

import Headings from '@components/Headings';
import Image, {ImagePlaceholder} from '@components/Image';

import mediaqueries from '@styles/media';
import {IArticle, IAuthor} from '@types';

import ArticleAuthors from './Article.Authors';

interface ArticleHeroProps {
  article: IArticle;
  authors: IAuthor[];
}

const ArticleHero = ({article, authors}: ArticleHeroProps) => {
  const hasCoAUthors = authors.length > 1;
  const hasHeroImage =
    Object.keys(article.hero.full).length !== 0 &&
    article.hero.full.constructor === Object;

  return (
    <Hero>
      <Header>
        <HeroHeading>{article.title}</HeroHeading>
        <HeroSubtitle hasCoAUthors={hasCoAUthors}>
          <ArticleAuthors authors={authors} />
          <ArticleMeta hasCoAUthors={hasCoAUthors}>
            {article.date} · {Math.round(article.timeToRead * 1.8)} min read
          </ArticleMeta>
          {article.tag.map((tag) => (
            <ArticleTag>#{tag} </ArticleTag>
          ))}
        </HeroSubtitle>
      </Header>
      <HeroImage id="ArticleImage__Hero">
        {hasHeroImage ? (
          <React.Fragment>
            <Image src={article.hero.full} />
          </React.Fragment>
        ) : (
          <ImagePlaceholder />
        )}
      </HeroImage>
      <ImageHeading>{article.photograph}</ImageHeading>
    </Hero>
  );
};

export default ArticleHero;

const Hero = styled.div`
  ${(p) => mediaqueries.phablet`
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
  margin-left: ${(p) => (p.hasCoAUthors ? '10px' : '0')};

  ${mediaqueries.phablet`
    margin-left: 0;
  `}
`;
const ArticleTag = styled.div`
  margin-left: 10px;
  color: ${(p) => p.theme.colors.accent};

  ${mediaqueries.phablet`
    margin-left: 0;
  `}
`;

const Header = styled.header`
  position: relative;
  z-index: 10;
  margin:100px auto 40px;
  padding-left: 68px;
  max-width: 749px;

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
  font-family: ${(p) => p.theme.fonts.serif};
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
  color: ${(p) => p.theme.colors.grey};

  ${(p) => mediaqueries.phablet`
    font-size: 14px;
    flex-direction: column;

    ${
      p.hasCoAUthors &&
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
    `
    }


    strong {
      display: block;
      font-weight: 500;
      margin-bottom: 5px;
    }
  `}
`;

const ImageHeading = styled.p`
  margin: 10px auto;
  max-width: 450px;
  color: ${(p) => p.theme.colors.grey};
  font-size: 18px;
  font-family: ${(p) => p.theme.fonts.sansSerif};
  line-height: 1.4;
  text-align: center;

  ${mediaqueries.phablet`
    font-size: 14px;
  `}
`;

const HeroImage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-height: 600px;
  max-width: 1100px;
  overflow: hidden;
  margin: 0 auto;
  /* box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.2),
    0 18px 36px -18px rgba(0, 0, 0, 0.22); */

  ${mediaqueries.tablet`
    max-width: 100%;
  `}

  ${mediaqueries.phablet`
    margin: 0 auto;
    width: calc(100vw - 40px);
    height: 220px;

    & > div {
      height: 220px;
    }
`}
`;
