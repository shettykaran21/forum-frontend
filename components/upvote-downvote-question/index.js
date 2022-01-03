/** @jsxImportSource @emotion/react */

import { useContext } from 'react'
import { css, ClassNames } from '@emotion/react'
import { Box, Typography, useTheme } from '@mui/material'
import { FaCaretUp, FaCaretDown } from 'react-icons/fa'

import api from '@utils/api'
import { getExistingVoteValue } from '@utils/index'
import { AuthContext } from '@context/auth'

const UpvoteDownvoteQuestion = ({ data, setData }) => {
  const { isAuthenticated, authState } = useContext(AuthContext)

  const { votes, score, _id } = data

  const theme = useTheme()

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
        setData(data.data)
      } catch (err) {
        console.log(err)
      }
    } else {
      let endPoint
      endPoint = vote === 1 ? 'up' : 'down'

      try {
        const { data } = await api.put(`/votes/${endPoint}vote/${_id}`)
        setData(data.data)
      } catch (err) {
        console.log(err)
      }
    }
  }

  const styles = {
    icon: css`
      cursor: pointer;
      font-size: 2.5rem;
    `,
    voted: css`
      color: ${theme.palette.primary.main};
    `,
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ClassNames>
        {({ css, cx }) => (
          <>
            <FaCaretUp
              css={cx(css(styles.icon), vote === 1 && css(styles.voted))}
              onClick={() => handleVote(1)}
            />
            <Typography>{score}</Typography>
            <FaCaretDown
              css={cx(css(styles.icon), vote === -1 && css(styles.voted))}
              onClick={() => handleVote(-1)}
            />
          </>
        )}
      </ClassNames>
    </Box>
  )
}

export default UpvoteDownvoteQuestion
