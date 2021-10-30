import Head from 'next/head'
import { Box } from '@mui/material'

import Layout from '@components/layout'
import QuestionsContainer from '@components/question/questions-container'

const questions = [
  {
    _id: 1,
    author: {
      name: 'Karan Shetty',
      username: 'shettykaran21',
    },
    title: 'What does the fox say?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa sapiente commodi saepe quo repellat officiis ad nostrum necessitatibus quisquam eum eaque harum debitis voluptates alias expedita, officia nemo. Dolores odio quo perspiciatis iure explicabo, vel odit nobis atque voluptatum aperiam qui repudiandae eligendi aliquid dolore earum delectus officia asperiores.',
    tags: ['javascript', 'react'],
    score: 12,
    created: new Date(),
    views: 10,
  },
  {
    _id: 2,
    author: {
      name: 'Atharva Shembade',
      username: 'atharvashembae',
    },
    title: 'How is this done?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa sapiente commodi saepe quo repellat officiis ad nostrum necessitatibus quisquam eum eaque harum debitis voluptates alias expedita, officia nemo. Dolores odio quo perspiciatis iure explicabo, vel odit nobis atque voluptatum aperiam qui repudiandae eligendi aliquid dolore earum delectus officia asperiores.',
    tags: ['javascript', 'react'],
    score: -2,
    created: new Date(),
    views: 10,
  },
  {
    _id: 3,
    author: {
      name: 'Rajat Shetty',
      username: 'rajatshetty10',
    },
    title: 'Ok, so now, how to do this?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa sapiente commodi saepe quo repellat officiis ad nostrum necessitatibus quisquam eum eaque harum debitis voluptates alias expedita, officia nemo. Dolores odio quo perspiciatis iure explicabo, vel odit nobis atque voluptatum aperiam qui repudiandae eligendi aliquid dolore earum delectus officia asperiores.',
    tags: ['javascript', 'react'],
    score: 10,
    created: new Date(),
    views: 10,
  },
]

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Forum</title>
      </Head>
      <Layout>
        <Box component="main" sx={{ flexBasis: '65%' }}>
          <QuestionsContainer questions={questions} />
        </Box>
        <Box sx={{ flexBasis: '35%' }}>Content 2</Box>
      </Layout>
    </>
  )
}

export default HomePage
