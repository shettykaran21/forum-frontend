/** @jsxImportSource @emotion/react */

import { useRouter } from 'next/router'
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'
import QuestionCard from './question-card'

import useStickyState from '@hooks/useStickyState'
import Button from '@components/button'
import Link from '@components/link'
import PageTitle from '@components/page-title'

const QuestionsContainer = ({ questions }) => {
  const [sortType, setSortType] = useStickyState('Votes', 'sortType')

  const router = useRouter()

  const handleSorting = () => {
    switch (sortType) {
      case 'Votes':
        return (a, b) => b.score - a.score
      case 'Views':
        return (a, b) => b.views - a.views
      case 'Newest':
        return (a, b) => new Date(b.created) - new Date(a.created)
      case 'Oldest':
        return (a, b) => new Date(a.created) - new Date(b.created)
      default:
        break
    }
  }

  const buttons = ['Votes', 'Views', 'Newest', 'Oldest']

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '1rem',
        }}
      >
        <PageTitle
          title={
            router.query.tag
              ? `Questions tagged [${router.query.tag}]`
              : 'All Questions'
          }
        />
        <Button>
          <Link href={'/questions/ask'} style={{ color: 'inherit' }}>
            Ask Question
          </Link>
        </Button>
      </Box>
      <Box sx={{ alignSelf: 'flex-end' }}>
        <ToggleButtonGroup
          exclusive
          value={sortType}
          onChange={(e, newSortType) => setSortType(newSortType)}
        >
          {buttons.map((button, i) => (
            <ToggleButton key={i} size="small" color="primary" value={button}>
              {button}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
        {questions?.sort(handleSorting()).map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </Box>
    </Box>
  )
}

export default QuestionsContainer
