import React from 'react';
import styled from '@emotion/styled';

import mediaqueries from '@styles/media';

const Logo = ({fill = '#fff'}: {fill?: string}) => {
  console.log(fill);
  return (
    <LogoContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Desktop"
        width="505"
        height="69"
        viewBox="0 0 505 69"
      >
        <g
          id="Gruppe_17"
          data-name="Gruppe 17"
          transform="translate(401 -1572)"
        >
          <g id="Gruppe_16" data-name="Gruppe 16" transform="translate(15 13)">
            <g
              id="Rechteck_12"
              data-name="Rechteck 12"
              transform="translate(-416 1619.763)"
              stroke="#707070"
              stroke-width="1"
              fill={fill}
            >
              <rect width="48.289" height="4.237" stroke="none" fill={fill} />
              <rect x="0.5" y="0.5" width="47.289" height="3.237" fill={fill} />
            </g>
            <g
              id="Gruppe_15"
              data-name="Gruppe 15"
              transform="translate(-416 1574)"
            >
              <path
                id="Pfad_7"
                data-name="Pfad 7"
                d="M15.856,0c8.757,0,15.856,5.691,15.856,12.712s-7.1,12.712-15.856,12.712S0,19.732,0,12.712,7.1,0,15.856,0Z"
                transform="translate(16.54 1.356)"
                fill={fill}
              />
              <g
                id="Gruppe_11"
                data-name="Gruppe 11"
                transform="translate(0 16.441)"
                fill={fill}
              >
                <rect
                  id="Rechteck_4"
                  data-name="Rechteck 4"
                  width="14.259"
                  height="12.712"
                  transform="translate(14.259)"
                  fill={fill}
                />
                <rect
                  id="Rechteck_5"
                  data-name="Rechteck 5"
                  width="14.449"
                  height="12.712"
                  fill={fill}
                />
                <rect
                  id="Rechteck_6"
                  data-name="Rechteck 6"
                  width="14.259"
                  height="12.881"
                  transform="translate(14.259 12.542)"
                  fill={fill}
                />
              </g>
              <path
                id="Pfad_5"
                data-name="Pfad 5"
                d="M17.586,0C27.3,0,35.171,7.08,35.171,15.814S27.3,31.629,17.586,31.629,0,24.548,0,15.814,7.873,0,17.586,0Z"
                transform="translate(14.829)"
                fill={fill === '#fff' ? '#000' : '#fff'}
              />
              <g
                id="Gruppe_12"
                data-name="Gruppe 12"
                transform="translate(18.061 2.712)"
                fill={fill}
              >
                <rect
                  id="Rechteck_10"
                  data-name="Rechteck 10"
                  width="14.259"
                  height="14.259"
                  transform="translate(0 0)"
                  fill={fill}
                />
                <path
                  id="Pfad_5-2"
                  data-name="Pfad 5"
                  d="M14.27,0c7.881,0,14.27,5.745,14.27,12.833S22.151,25.665,14.27,25.665,0,19.92,0,12.833,6.389,0,14.27,0Z"
                  transform="translate(0 0)"
                  fill={fill}
                />
              </g>
            </g>
          </g>
          <text
            id="philschmid_blog"
            data-name="philschmid blog"
            transform="translate(-340 1626)"
            fill="#898989"
            font-size="30px"
            font-family="Merriweather-Bold, Merriweather"
            font-weight="700"
            style={{fontSize: 30}}
          >
            <tspan x="0" y="0" fill={fill}>
              philschmid{' '}
            </tspan>

            <tspan
              y="0"
              fill="#898989"
              font-family="Merriweather-Light, Merriweather"
              font-weight="300"
            >
              blog
            </tspan>
          </text>
        </g>
      </svg>
      <svg
        className="Logo__Mobile"
        width="25"
        height="25"
        viewBox="0 0 263 295"
      >
        <g
          id="Gruppe_16"
          data-name="Gruppe 16"
          transform="translate(416 -1574)"
        >
          <g
            id="Rechteck_12"
            data-name="Rechteck 12"
            transform="translate(-416 1844)"
            stroke="#707070"
            stroke-width="1"
          >
            <rect width="254" height="25" stroke="none" fill={fill} />
            <rect x="0.5" y="0.5" width="253" height="24" fill={fill} />
          </g>
          <g id="Gruppe_15" data-name="Gruppe 15">
            <path
              id="Pfad_7"
              data-name="Pfad 7"
              d="M83.4,0c46.061,0,83.4,33.579,83.4,75s-37.339,75-83.4,75S0,116.421,0,75,37.339,0,83.4,0Z"
              transform="translate(-329 1582)"
              fill={fill}
            />
            <g
              id="Gruppe_11"
              data-name="Gruppe 11"
              transform="translate(-923 1422)"
            >
              <rect
                id="Rechteck_4"
                data-name="Rechteck 4"
                width="75"
                height="75"
                transform="translate(582 249)"
                fill={fill}
              />
              <rect
                id="Rechteck_5"
                data-name="Rechteck 5"
                width="76"
                height="75"
                transform="translate(507 249)"
                fill={fill}
              />
              <rect
                id="Rechteck_6"
                data-name="Rechteck 6"
                width="75"
                height="76"
                transform="translate(582 323)"
                fill={fill}
              />
            </g>
            <path
              id="Pfad_5"
              data-name="Pfad 5"
              d="M92.5,0C143.586,0,185,37.243,185,83.183s-41.414,83.183-92.5,83.183S0,129.124,0,83.183,41.414,0,92.5,0Z"
              transform="translate(-338 1574)"
              fill={fill === '#fff' ? '#000' : '#fff'}
            />
            <g
              id="Gruppe_12"
              data-name="Gruppe 12"
              transform="translate(-1299 1416)"
            >
              <rect
                id="Rechteck_10"
                data-name="Rechteck 10"
                width="75"
                height="75"
                transform="translate(978 174)"
                fill={fill}
              />
              <path
                id="Pfad_5-2"
                data-name="Pfad 5"
                d="M75.06,0c41.454,0,75.06,30.221,75.06,67.5S116.514,135,75.06,135,0,104.779,0,67.5,33.606,0,75.06,0Z"
                transform="translate(978 174)"
                fill={fill}
              />
            </g>
          </g>
        </g>
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
