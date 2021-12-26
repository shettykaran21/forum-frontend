import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'

import useStickyState from '@hooks/useStickyState'
import QuestionCard from '@components/question-card'
import QuestionsContainer from '@components/questions-container'

const QuestionsList = ({ questions }) => {
  const [sortType, setSortType] = useStickyState('Votes', 'sortType')

  const buttons = ['Votes', 'Views', 'Newest', 'Oldest']

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

  return (
    <QuestionsContainer>
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
    </QuestionsContainer>
  )
}

export default QuestionsList
