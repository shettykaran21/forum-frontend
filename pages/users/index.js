import Head from 'next/head'
import { useEffect, useState } from 'react'

import api from '@utils/api'
import Layout from '@components/layout'
import PageTitle from '@components/page-title'
import UsersList from '@components/users-list'
import SearchInput from '@components/search-input'
import ErrorText from '@components/error-text'

const UsersPage = ({ users }) => {
  const [usersData, setUsersData] = useState(users)
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    if (searchTerm !== '') {
      const delayDebounceFn = setTimeout(async () => {
        const { data } = await api.get(
          searchTerm ? `/users/${searchTerm}` : `/users`
        )
        setUsersData(data.data)
      }, 500)

      return () => clearTimeout(delayDebounceFn)
    } else {
      const fetchData = async () => {
        const { data } = await api.get('/users')
        setUsersData(data.data)
      }

      fetchData()
    }
  }, [searchTerm])

  return (
    <>
      <Head>
        <title>Forum | Users {searchTerm && ` - ${searchTerm}`}</title>
      </Head>
      <Layout sx={{ padding: '2rem 0' }}>
        <PageTitle title={searchTerm ? `Users [${searchTerm}]` : 'Users'} />
        <SearchInput handleChange={handleInputChange} value={searchTerm} />
        {users && (
          <>
            <UsersList users={usersData} />
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
