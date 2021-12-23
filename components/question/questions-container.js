import { useState } from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'
import { useTheme, lighten } from '@mui/material/styles'

import QuestionCard from './question-card'

const QuestionsContainer = ({ questions }) => {
  const [sortType, setSortType] = useState('Votes')

  const theme = useTheme()

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
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ alignSelf: 'flex-end', marginTop: '1rem' }}>
        <ButtonGroup>
          {buttons.map((button, i) => (
            <Button
              key={i}
              size="small"
              sx={
                sortType === button && {
                  backgroundColor: lighten(theme.palette.primary.main, 0.8),
                }
              }
              onClick={() => setSortType(button)}
            >
              {button}
            </Button>
          ))}
        </ButtonGroup>
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
