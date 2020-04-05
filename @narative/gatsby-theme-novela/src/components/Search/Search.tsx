import React, {useEffect, useState} from 'react';
import {Link, graphql} from 'gatsby';
import styled from '@emotion/styled';
import throttle from 'lodash/throttle';

export interface ISearch {
  searchString: string;
}

function Search({data}: any) {
  const posts = data.allMarkdownRemark.edges;
  const emptyQuery = '';
  const [articles, setArticles]: any = React.useState([{}]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    const {data} = props;

    // this is how we get all of our posts
    const posts = data.allMarkdownRemark.edges || [];

    // return all filtered posts
    const filteredData = posts.filter((post) => {
      // destructure data from post frontmatter
      const {description, title, tags} = post.node.frontmatter;
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        tags
          .join('') // convert tags from an array to string
          .toLowerCase()
          .includes(query.toLowerCase())
      );
    });

    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    });
  };

  return (
    <>
      {/* in my site I wrap each page with a Layout and SEO component which have 
  been omitted here for clarity and replaced with a React.fragment --> */}

      {/*in-line css for demo purposes*/}
      <h1 style={{textAlign: `center`}}>Writing</h1>

      <input
        type="text"
        id="filter"
        placeholder="Type to filter posts..."
        onChange={handleInputChange}
      />

      {articles.map(({article}) => {
        return (
          <ArticleLink to={article.slug} data-a11y="false">
            <Item gridLayout={gridLayout}>
              <ImageContainer narrow={narrow} gridLayout={gridLayout}>
                {hasHeroImage ? (
                  <Image src={imageSource} />
                ) : (
                  <ImagePlaceholder />
                )}
              </ImageContainer>
              <div>
                <Title dark hasOverflow={hasOverflow} gridLayout={gridLayout}>
                  {article.title}
                </Title>
                <Excerpt
                  narrow={narrow}
                  hasOverflow={hasOverflow}
                  gridLayout={gridLayout}
                >
                  {article.excerpt}
                </Excerpt>
                <MetaData>
                  {article.date} · {Math.round(article.timeToRead * 1.8)} min
                  read
                </MetaData>
              </div>
            </Item>
          </ArticleLink>
        );
      })}
    </>
  );
}

export const pageQuery = graphql`
  query {
    allArticle(sort: {fields: date, order: DESC}) {
      edges {
        node {
          slug
          title
          body
        }
      }
    }
  }
`;
export default Search;

const ArticleLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 5px;
  z-index: 1;
  transition: transform 0.33s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  &:hover ${ImageContainer}, &:focus ${ImageContainer} {
    transform: translateY(-1px);
    box-shadow: 0 50px 80px -20px rgba(0, 0, 0, 0.27),
      0 30px 50px -30px rgba(0, 0, 0, 0.3);
  }

  &:hover h2,
  &:focus h2 {
    color: ${(p) => p.theme.colors.accent};
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -1.5%;
    top: -2%;
    width: 103%;
    height: 104%;
    border: 3px solid ${(p) => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  ${mediaqueries.phablet`
    &:hover ${ImageContainer} {
      transform: none;
      box-shadow: initial;
    }

    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`;
