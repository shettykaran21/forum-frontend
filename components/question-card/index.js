import { useState } from 'react'
import { Card, CardContent, Divider, Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material'

import Link from '@components/link'
import Tag from '@components/tag'
import TagsContainer from '@components/tags-container'
import { formatDate } from '@utils/index'
import UpvoteDownvote from '@components/upvote-downvote'

const QuestionCard = ({ question }) => {
  const [questionData, setQuestionData] = useState(question)

  const { author, title, text, tags, created, _id } = questionData

  const formattedDate = formatDate(created)

  const theme = useTheme()

  return (
    <Card
      sx={{
        borderRadius: '10px',
        padding: '0.875rem',
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
        '&:first-of-type': {
          marginTop: '1rem',
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <UpvoteDownvote data={questionData} setData={setQuestionData} />
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
                {text.length > 300 ? text.slice(0, 300).concat('...') : text}
              </Typography>
            </Box>
            <TagsContainer>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagsContainer>
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
