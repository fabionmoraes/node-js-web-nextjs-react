import React from 'react';
import styled from 'styled-components';

import Link from 'next/Link';
import Head from 'next/head';

import withAnalytics from '~/hocs/withAnalytics';


const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => (
  <>
  <Head>
    <title>Home Page</title>
  </Head>
  <img src="/static/panda.jpg" width="200" />
  <Title>Hellow world</Title>
  <Link href="/users">
    <a>IR Users</a>
  </Link>
  </>
);

export default withAnalytics()(Home);