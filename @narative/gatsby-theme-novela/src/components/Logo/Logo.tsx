import React from 'react';
import styled from '@emotion/styled';

import mediaqueries from '@styles/media';

const Logo = ({fill = '#fff'}: {fill?: string}) => {
  console.log(fill);
  return (
    <LogoContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="69"
        viewBox="0 0 505 69"
        className="Logo__Desktop"
      >
        <g
          id="Gruppe_14"
          data-name="Gruppe 14"
          transform="translate(1235 -194)"
        >
          <text
            id="philschmid_blog"
            data-name="philschmid blog"
            fill="#898989"
            font-size="30px"
            font-family="Merriweather-Bold, Merriweather"
            font-weight="700"
            style={{fontSize: 35}}
            transform="translate(-1174 248)"
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
          <g
            id="Gruppe_11"
            data-name="Gruppe 11"
            transform="translate(-290 -185)"
          >
            <rect
              id="Rechteck_8"
              data-name="Rechteck 8"
              width="14.881"
              height="14.881"
              transform="translate(-927.937 391)"
              fill={fill}
            />
            <rect
              id="Rechteck_4"
              data-name="Rechteck 4"
              width="14.881"
              height="14.881"
              transform="translate(-930.119 407.468)"
              fill={fill}
            />
            <rect
              id="Rechteck_5"
              data-name="Rechteck 5"
              width="15.079"
              height="14.881"
              transform="translate(-945 407.468)"
              fill={fill}
            />
            <rect
              id="Rechteck_6"
              data-name="Rechteck 6"
              width="14.881"
              height="15.079"
              transform="translate(-930.119 422.349)"
              fill={fill}
            />
            <g
              id="Rechteck_11"
              data-name="Rechteck 11"
              transform="translate(-945 438.817)"
              stroke="#707070"
              stroke-width="1"
              fill={fill}
            >
              <rect width="50" height="4.96" fill={fill} />
              <rect x="0.5" y="0.5" width="49" height="3.96" fill="none" />
            </g>
            <path
              id="Pfad_3"
              data-name="Pfad 3"
              d="M0,0C0,9.512,6.662,17.222,14.881,17.222S29.762,9.512,29.762,0"
              transform="translate(-913.254 420.762) rotate(-90)"
              fill={fill}
            />
          </g>
        </g>
      </svg>
      <svg
        className="Logo__Mobile"
        width="30"
        height="30"
        viewBox="0 0 50 52.778"
      >
        <g id="Gruppe_13" data-name="Gruppe 13" transform="translate(945 -391)">
          <rect
            id="Rechteck_8"
            data-name="Rechteck 8"
            width="14.881"
            height="14.881"
            transform="translate(-927.937 391)"
            fill={fill}
          />
          <rect
            id="Rechteck_4"
            data-name="Rechteck 4"
            width="14.881"
            height="14.881"
            fill={fill}
            transform="translate(-930.119 407.468)"
          />
          <rect
            id="Rechteck_5"
            data-name="Rechteck 5"
            width="15.079"
            height="14.881"
            fill={fill}
            transform="translate(-945 407.468)"
          />
          <rect
            id="Rechteck_6"
            data-name="Rechteck 6"
            width="14.881"
            height="15.079"
            fill={fill}
            transform="translate(-930.119 422.349)"
          />
          <g
            id="Rechteck_11"
            data-name="Rechteck 11"
            transform="translate(-945 438.817)"
            fill={fill}
            stroke-width="1"
          >
            <rect width="50" height="4.96" fill={fill} />
            <rect x="0.5" y="0.5" width="49" height="3.96" fill="none" />
          </g>
          <path
            id="Pfad_3"
            data-name="Pfad 3"
            fill={fill}
            d="M0,0C0,9.512,6.662,17.222,14.881,17.222S29.762,9.512,29.762,0"
            transform="translate(-913.254 420.762) rotate(-90)"
          />
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
