import React from 'react';

import Head from 'next/head';

import api from '~/services/api';
import withAnalytics from '~/hocs/withAnalytics';

const Detail = ({ user }) => (
  <div>
    <Head>
      <title>Detalhes users</title>
    </Head>
    <h1>{user.login}</h1>
    <img src={user.avatar_url} width="200" />
  </div>
);

Detail.getInitialProps = async ({ query }) => {
  const response = await api.get(`/users/${query.user}`);

  return { user: response.data };
};

export default withAnalytics()(Detail);