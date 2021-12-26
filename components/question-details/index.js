import { useContext } from 'react'
import { FaCaretUp, FaCaretDown } from 'react-icons/fa'
import { Box, Typography, useTheme } from '@mui/material'

import api from '@utils/api'
import PageTitle from '@components/page-title'
import Tag from '@components/tag'
import TagsContainer from '@components/tags-container'
import { formatDate, getExistingVoteValue } from '@utils/index'
import CommentsList from '@components/comments-list'
import { AuthContext } from '@context/auth'

const QuestionDetails = ({ question, setQuestionData }) => {
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

  const theme = useTheme()

  const formattedDate = formatDate(created)

  const { isAuthenticated, authState } = useContext(AuthContext)

  const vote = getExistingVoteValue(isAuthenticated, votes, authState)

  const handleVote = async (vote) => {
    const existingVoteValue = getExistingVoteValue(
      isAuthenticated,
      votes,
      authState
    )

    if (existingVoteValue === 1 || existingVoteValue === -1) {
      try {
        const { data } = await api.put(`/votes/unvote/${_id}`)
        setQuestionData(data.data)
      } catch (err) {
        console.log(err)
      }
    } else {
      let endPoint
      endPoint = vote === 1 ? 'up' : 'down'

      try {
        const { data } = await api.put(`/votes/${endPoint}vote/${_id}`)
        setQuestionData(data.data)
      } catch (err) {
        console.log(err)
      }
    }
  }

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
            color: vote === 1 && theme.palette.primary.main,
          }}
          onClick={() => handleVote(1)}
        />
        <Typography>{score}</Typography>
        <FaCaretDown
          fontSize="2.5rem"
          style={{
            cursor: 'pointer',
            color: vote === -1 && theme.palette.primary.main,
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
        <CommentsList comments={comments} />
      </Box>
    </Box>
  )
}

export default QuestionDetails
