import { FaCaretUp, FaCaretDown } from 'react-icons/fa'
import { Box, Typography } from '@mui/material'

import PageTitle from '@components/page-title'
import Tag from '@components/tag'
import TagsContainer from '@components/tags-container'
import { formatDate } from '@utils/index'

const QuestionDetails = ({ question }) => {
  const {
    answers,
    author,
    comments,
    created,
    score,
    tags,
    text,
    title,
    views,
    votes,
    _id,
  } = question

  const formattedDate = formatDate(created)

  return (
    <Box sx={{ display: 'flex', gap: '1rem' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <FaCaretUp
          fontSize="2.5rem"
          style={{
            cursor: 'pointer',
          }}
          onClick={() => handleVote(1)}
        />
        <Typography>{score}</Typography>
        <FaCaretDown
          fontSize="2.5rem"
          style={{
            cursor: 'pointer',
          }}
          onClick={() => handleVote(-1)}
        />
      </Box>
      <Box>
        <PageTitle title={title} />
        <Typography sx={{ margin: '1rem 0' }}>{text}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <TagsContainer>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsContainer>
          <Typography
            variant="body2"
            sx={{ color: '#777', fontSize: '.875rem' }}
          >
            {formattedDate}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default QuestionDetails
