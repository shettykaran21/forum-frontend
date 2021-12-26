import Head from 'next/head'
import { useState, useEffect } from 'react'

import api from '@utils/api'
import Layout from '@components/layout'
import PageTitle from '@components/page-title'
import SearchInput from '@components/search-input'
import ErrorText from '@components/error-text'
import TagsList from '@components/tags-list'

const TagsPage = ({ tags }) => {
  const [tagsData, setTagsData] = useState(tags)
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    if (searchTerm !== '') {
      const delayDebounceFn = setTimeout(async () => {
        const { data } = await api.get(
          searchTerm ? `/tags/${searchTerm}` : `/tags`
        )
        setTagsData(data.data)
      }, 500)

      return () => clearTimeout(delayDebounceFn)
    }
  }, [searchTerm])

  return (
    <>
      <Head>
        <title>Forum | Tags {searchTerm && ` - ${searchTerm}`}</title>
      </Head>
      <Layout sx={{ padding: '2rem 0' }}>
        <PageTitle title="Tags" />
        <SearchInput handleChange={handleInputChange} value={searchTerm} />
        {tagsData && (
          <>
            <TagsList tags={tagsData} />
            {tags?.length === 0 && <ErrorText msg="No tags found"></ErrorText>}
          </>
        )}
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const { data } = await api.get('/tags')

  return {
    props: {
      tags: data.data,
    },
  }
}

export default TagsPage
