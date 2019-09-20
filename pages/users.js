import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import api from '~/services/api';
import withAnalytics from '~/hocs/withAnalytics';

const User = ({ users }) => (
  <div>
    <Head>
    <title>User Page</title>
    </Head>
    <ul>
      {users.map(user => (
        <li key={user.id}>
        { user.login }
        <Link href={user.login}><a>Ver user</a></Link>
        </li>
      ))}
    </ul>
    <Link href="/">
      <a>Voltar</a>
    </Link>
  </div>
);

User.getInitialProps = async () => {
  const response = await api.get(`/orgs/rocketseat/members`);

  console.log(response.data);

  return { users: response.data };
}

export default withAnalytics()(User);
