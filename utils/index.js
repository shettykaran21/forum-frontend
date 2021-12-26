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
