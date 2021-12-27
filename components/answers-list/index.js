import AnswerItem from '@components/answer-item'

const AnswersList = ({ answers }) => {
  return (
    <>
      {answers.map((answer) => (
        <AnswerItem key={answer._id} answer={answer} />
      ))}
    </>
  )
}

export default AnswersList
