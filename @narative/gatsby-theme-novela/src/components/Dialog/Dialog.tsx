import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, {useState} from 'react';

import Section from '@components/Section';
import Headings from '@components/Headings';
import {useLocalStorage} from '../../hooks/localStorage';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const Dialog: React.FunctionComponent<{}> = (props: any) => {
  const [state, setState]: any = useLocalStorage('Privacy', null);

  return state !== null ? null : (
    <DialogContainer>
      <SubscriptionContainer>
        <Content>
          <Heading>Privacy Preference</Heading>
          <Text>
            I use cookies on my website. Some of them are essential, while
            others help me to improve this website and your experience.
          </Text>
          <Button
            onClick={params => {
              setState(true);
            }}
          >
            Accept
          </Button>
          <Button
            onClick={params => {
              setState(true);

              // localStorage.setItem('Privacy', 'false');
            }}
          >
            Decline
          </Button>
        </Content>
      </SubscriptionContainer>
    </DialogContainer>
  );
};

export default Dialog;

const DialogContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: red;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  /* filter: blur(4px); */
`;

const SubscriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 55px;
  margin: 10px auto 100px;
  background: ${p => p.theme.colors.card};
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  z-index: 1;

  ${mediaqueries.tablet`
    padding: 50px 0 0;
    text-align: center;
  `}

  ${mediaqueries.phablet`
    margin: -20px auto 80px;
  `}
`;

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 640px;

  ${mediaqueries.tablet`
    h3 {
      padding: 0 50px;
    }
  `}

  ${mediaqueries.phone`
    h3 {
      padding: 0 24px;
    }
  `}
`;

const Heading = styled(Headings.h3)`
  margin-bottom: 20px;

  ${mediaqueries.tablet`
    margin-bottom: 15px;
  `}
`;

const Text = styled.p`
  margin: 0 auto 30px;
  color: ${p => p.theme.colors.grey};
  line-height: 1.75;

  ${mediaqueries.tablet`
    padding: 0 26px;
    margin: 0 auto 25px;
  `}
`;

const Button = styled.button`
  width: 161px;
  height: 38px;
  border: 1px solid ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.accent};
  background: transparent;
  font-weight: 600;
  border-radius: 35px;
  letter-spacing: 0.42px;
  margin: 0px 16px 4px 0px;
  transition: border-color 0.2s var(--ease-in-out-quad),
    background 0.2s var(--ease-in-out-quad), color 0.2s var(--ease-in-out-quad);

  &:hover {
    background: ${p =>
      p.hasError ? p.theme.colors.error : p.theme.colors.accent};
    color: ${p => p.theme.colors.background};
  }

  &[disabled] {
    cursor: not-allowed;
  }

  svg * {
    fill: ${p => p.theme.colors.background};
  }

  ${p => mediaqueries.tablet`
    position: relative;
    height: 60px;
    width: 100%;
    top: 0;
    left: 0;
    border: none;
    border-radius: 0;
    border-top: 1px solid ${p.theme.colors.horizontalRule};

    &:hover {
      color: initial;
      background: initial;
    }
  `}
`;

const Error = styled.div`
  position: absolute;
  left: 35px;
  bottom: -20px;
  color: ${p => p.theme.colors.error};
  font-size: 12px;

  a {
    color: ${p => p.theme.colors.error};
    text-decoration: underline;
  }

  ${mediaqueries.tablet`
    left: 50px;
    top: 50px;
  `}
`;
