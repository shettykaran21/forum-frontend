/** @jsxImportSource @emotion/react */

import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Typography } from '@mui/material'

import FormTextArea from '@components/form/form-textarea'
import Button from '@components/button'
import api from '@utils/api'

const CommentForm = ({
  setShowAddComment,
  setQuestionData,
  questionId,
  answerId,
}) => {
  const [loading, setLoading] = useState(false)

  const {
    values,
    errors,
    touched,
    status,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: { text: '' },

    onSubmit: async (values, { setStatus, resetForm }) => {
      setLoading(true)
      try {
        const { data } = await api.post(
          `/comments/${questionId}/${answerId ? answerId : ''}`,
          values
        )
        setQuestionData(data.data)

        resetForm({})
        setShowAddComment(false)
        console.log(values)
      } catch (err) {
        setStatus(err.response.data.message)
      }
      setLoading(false)
    },

    validationSchema: Yup.object({
      text: Yup.string()
        .required('Comment is required.')
        .min(5, 'Comment must be at least 5 characters.')
        .max(1000, 'Comment must be at most 1000 characters.'),
    }),
  })

  return (
    <form onSubmit={handleSubmit}>
      <FormTextArea
        label="Comment"
        type="text"
        name="text"
        autoComplete="off"
        value={values.text}
        variant="outlined"
        onChange={handleChange}
        onBlur={handleBlur}
        hasError={touched.comment && errors.comment}
        errorMsg={errors.comment && errors.comment}
      />
      {status && (
        <Typography sx={{ color: lighten('#ff0000', 0.8) }}>
          {status}
        </Typography>
      )}
      <Button
        type="submit"
        isLoading={loading}
        disabled={isSubmitting}
        secondary
      >
        Add Comment
      </Button>
    </form>
  )
}

export default CommentForm
