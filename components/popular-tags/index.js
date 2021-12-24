import { useContext } from 'react'
import { Box, Typography } from '@mui/material'

import Tag from '@components/tag'
import { TagContext } from '@context/popularTags'

const PopularTags = () => {
  const { popularTags } = useContext(TagContext)

  return (
    <Box sx={{ flexBasis: '30%', paddingTop: '1rem' }}>
      <Typography variant="h2" sx={{ fontSize: '1.25rem', fontWeight: '400' }}>
        Popular Tags
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '.25rem',
          padding: '1rem 0',
        }}
      >
        {popularTags?.map((tag) => (
          <Tag key={tag._id} count={tag.count}>
            {tag._id}
          </Tag>
        ))}
      </Box>
    </Box>
  )
}

export default PopularTags
