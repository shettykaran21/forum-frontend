import Head from 'next/head'

import Layout from '@components/layout'
import api from '@utils/api'
import PageTitle from '@components/page-title'
import UsersList from '@components/users-list'
import UserItem from '@components/user-item'

const UsersPage = ({ users }) => {
  return (
    <>
      <Head>
        <title>Forum | Users</title>
      </Head>
      <Layout sx={{ padding: '2rem 0' }}>
        <PageTitle title="Users" />
        {users && (
          <>
            <UsersList>
              {users?.map((user) => (
                <UserItem key={user._id} userData={user} />
              ))}
            </UsersList>

            {users.length == 0 && (
              <p className="not-found">No users matched your search.</p>
            )}
          </>
        )}
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const { data } = await api.get('/users')

  return {
    props: {
      users: data.data,
    },
  }
}

export default UsersPage
