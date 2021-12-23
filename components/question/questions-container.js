import { useRouter } from 'next/router'
import {
  Box,
  Button as MUIButton,
  ButtonGroup,
  Typography,
} from '@mui/material'
import { useTheme, lighten } from '@mui/material/styles'

import QuestionCard from './question-card'
import useStickyState from '@hooks/useStickyState'
import Button from '@components/button'

const QuestionsContainer = ({ questions }) => {
  const [sortType, setSortType] = useStickyState('Votes', 'sortType')

  const router = useRouter()

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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '1rem',
        }}
      >
        <Typography sx={{ fontSize: '1.25rem', fontWeight: '600' }}>
          {router.query.tag
            ? `Questions tagged [${router.query.tag}]`
            : 'All Questions'}
        </Typography>
        <Button>Ask Question</Button>
      </Box>
      <Box sx={{ alignSelf: 'flex-end' }}>
        <ButtonGroup>
          {buttons.map((button, i) => (
            <MUIButton
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
            </MUIButton>
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
