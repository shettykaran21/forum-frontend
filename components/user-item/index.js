const UserItem = ({ userData }) => {
  const { username, created } = userData

  return (
    <div>
      <p>{username}</p>
    </div>
  )
}

export default UserItem
