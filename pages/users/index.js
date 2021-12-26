import { useEffect, useState } from 'react'
import Head from 'next/head'
import { lighten, Typography } from '@mui/material'

import Layout from '@components/layout'
import api from '@utils/api'
import PageTitle from '@components/page-title'
import UsersList from '@components/users-list'
import UserItem from '@components/user-item'
import SearchInput from '@components/search-input'
import ErrorText from '@components/error-text'

const UsersPage = ({ users }) => {
  const [usersData, setUsersData] = useState(users)
  const [searchTerm, setSearchTerm] = useState(null)

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    if (searchTerm !== null) {
      const delayDebounceFn = setTimeout(async () => {
        const { data } = await api.get(
          searchTerm ? `/users/${searchTerm}` : `/users`
        )
        setUsersData(data.data)
      }, 500)

      return () => clearTimeout(delayDebounceFn)
    }
  }, [searchTerm])

  return (
    <>
      <Head>
        <title>Forum | Users</title>
      </Head>
      <Layout sx={{ padding: '2rem 0' }}>
        <PageTitle title="Users" />
        <SearchInput handleChange={handleInputChange} value={searchTerm} />
        {users && (
          <>
            <UsersList>
              {usersData?.map((user) => (
                <UserItem key={user._id} userData={user} />
              ))}
            </UsersList>
            {usersData?.length === 0 && <ErrorText msg="No users found" />}
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
