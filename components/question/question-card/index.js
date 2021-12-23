import { useState, useContext, useEffect } from 'react'
import { Card, CardContent, Divider, Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material'
import { FaCaretUp, FaCaretDown } from 'react-icons/fa'

import Link from '@components/link'
import Tag from '@components/tag'
import api from '@utils/api'
import { AuthContext } from '@context/auth'

const QuestionCard = ({ question }) => {
  const [questionData, setQuestionData] = useState(question)

  const { author, title, text, tags, score, created, votes, _id } = questionData

  const { isAuthenticated, authState } = useContext(AuthContext)

  const formattedDate = new Date(created)
    .toLocaleTimeString('en-IN', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
    .replace(',', ' at')

  const theme = useTheme()

  const isVoted = () => {
    if (isAuthenticated()) {
      if (
        votes.filter((vote) => vote.user === authState.userInfo.id).length > 0
      ) {
        return true
      }
      return false
    }
  }

  const getVoteValue = () => {
    if (isAuthenticated()) {
      const userVote = votes.filter(
        (vote) => vote.user === authState.userInfo.id
      )[0]

      if (userVote) {
        return userVote.vote
      }
    }
    return 0
  }

  const handleUpvote = async () => {
    if (getVoteValue() === 1) {
      try {
        const { data } = await api.put(`/votes/unvote/${_id}`)
        setQuestionData(data.data)
      } catch (err) {
        console.log(err)
      }
    } else {
      try {
        const { data } = await api.put(`/votes/upvote/${_id}`)
        setQuestionData(data.data)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <Card
      sx={{
        borderRadius: '10px',
        padding: '0.875rem',
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
        '&:first-of-type': {
          marginTop: '2rem',
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <FaCaretUp
              fontSize="1.75rem"
              style={{ cursor: 'pointer' }}
              onClick={handleUpvote}
            />
            <Typography>{score}</Typography>
            <FaCaretDown fontSize="1.75rem" />
          </Box>
          <Box>
            <Box>
              <Link
                href={`/questions/${_id}`}
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: '#333',
                  }}
                >
                  {title}
                </Typography>
              </Link>
              <Typography
                variant="body2"
                sx={{ marginBottom: '1rem', color: '#777' }}
              >
                {text}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Box>
          </Box>
        </Box>

        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1rem',
          }}
        >
          <Box>
            <Typography variant="body2" sx={{ fontSize: '.75rem' }}>
              Posted by{' '}
              <Box component="span">
                <Link
                  href={`/users/${author.username}`}
                  style={{
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                  }}
                >
                  <span>{author.username}</span>
                </Link>
              </Box>
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              sx={{ color: '#777', fontSize: '.75rem' }}
            >
              {formattedDate}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default QuestionCard
