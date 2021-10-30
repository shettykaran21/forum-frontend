import {
  Card,
  CardContent,
  Divider,
  Typography,
  Box,
  useTheme,
} from '@mui/material'
import { FaCaretUp, FaCaretDown } from 'react-icons/fa'

import Link from '@components/link'

const QuestionCard = ({ question }) => {
  const { author, title, text, tags, score, created, views } = question
  const theme = useTheme()

  return (
    <Card
      sx={{
        borderRadius: '10px',
        padding: '0.875rem',
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <FaCaretUp fontSize="1.75rem" />
            <Typography>{score}</Typography>
            <FaCaretDown fontSize="1.75rem" />
          </Box>
          <Box>
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
            <Typography
              variant="body2"
              sx={{ marginBottom: '1rem', color: '#777' }}
            >
              {text}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Typography
          variant="body2"
          sx={{ marginTop: '1rem', fontSize: '.75rem' }}
        >
          Posted by{' '}
          <Box component="span">
            <Link href={`/users/${author.username}`}>
              <a
                style={{
                  color: theme.palette.primary.main,
                }}
              >
                <span>{author.name}</span>
              </a>
            </Link>
          </Box>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default QuestionCard
