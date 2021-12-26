import { Box } from '@mui/material'

import TagItem from '@components/tag-item'

const TagsList = ({ tags }) => {
  return (
    <Box
      sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '1rem 0' }}
    >
      {tags?.map((tag) => (
        <TagItem key={tag._id} tagData={tag}>
          {tag.count}
        </TagItem>
      ))}
    </Box>
  )
}

export default TagsList
