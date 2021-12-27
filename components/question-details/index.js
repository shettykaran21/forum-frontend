import { Box, Divider, Typography } from '@mui/material'

import PageTitle from '@components/page-title'
import Tag from '@components/tag'
import TagsContainer from '@components/tags-container'
import { formatDate } from '@utils/index'
import CommentsList from '@components/comments-list'
import UpvoteDownvote from '@components/upvote-downvote'

const QuestionDetails = ({ question, setQuestionData }) => {
  const { comments, created, tags, text, title } = question

  const formattedDate = formatDate(created)

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <UpvoteDownvote data={question} setData={setQuestionData} />
        <Box sx={{ flexGrow: 1 }}>
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
      <Divider />
    </Box>
  )
}

export default QuestionDetails
