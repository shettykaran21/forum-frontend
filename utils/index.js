export const formatDate = (date) => {
  return new Date(date)
    .toLocaleTimeString('en-IN', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
    .replace(',', ' at')
}

export const getExistingVoteValue = (isAuth, votes, authState) => {
  if (isAuth()) {
    const existingUserVote = votes.filter(
      (vote) => vote.user === authState.userInfo.id
    )[0]

    if (existingUserVote) {
      return existingUserVote.vote
    }
  }
  return 0
}
