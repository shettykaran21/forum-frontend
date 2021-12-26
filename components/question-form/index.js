import { useRouter } from 'next/router'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Typography, Box } from '@mui/material'
import { lighten } from '@mui/material/styles'

import api from '@utils/api'
import FormInput from '@components/form/form-input'
import Form from '@components/form'
import FormTextArea from '@components/form/form-textarea'
import Button from '@components/button'

const QuestionForm = () => {
  const router = useRouter()

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
    initialValues: { title: '', text: '', tags: [] },

    onSubmit: async (values, { setStatus, resetForm }) => {
      setLoading(true)
      try {
        await api.post('/questions/question', values)
        resetForm({})
        router.push('/')
      } catch (err) {
        setStatus(err.response.data.message)
      }
      setLoading(false)
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .required('Title is required.')
        .min(10, 'Title must be at least 10 characters.')
        .max(180, 'Title must be at most 180 characters.'),
      text: Yup.string()
        .required('Body is required.')
        .min(20, 'Body must be at least 20 characters.')
        .max(20000, 'Body must be at most 20000 characters.'),
      tags: Yup.array()
        .required('Please enter at least one tag.')
        .max(5, 'Maximum 5 tags can be entered.')
        .of(Yup.string().max(20, 'Tag cannot be longer than 20 characters.')),
    }),
  })

  return (
    <Form onSubmit={handleSubmit} width="50rem">
      <FormInput
        label="Title"
        type="text"
        name="title"
        autoComplete="off"
        value={values.title}
        variant="outlined"
        onChange={handleChange}
        onBlur={handleBlur}
        hasError={touched.title && errors.title}
        errorMsg={errors.title && errors.title}
        placeholder="e.g. Can you force a React component to rerender without calling setState?"
      />
      <FormTextArea
        label="Body"
        type="text"
        name="text"
        autoComplete="off"
        value={values.text}
        variant="outlined"
        onChange={handleChange}
        onBlur={handleBlur}
        hasError={touched.text && errors.text}
        errorMsg={errors.text && errors.text}
      />
      {status && (
        <Typography sx={{ color: lighten('#ff0000', 0.8) }}>
          {status}
        </Typography>
      )}
      <Box sx={{ marginTop: '1rem' }}>
        <Button type="submit" isLoading={loading} disabled={isSubmitting}>
          Post Question
        </Button>
      </Box>
    </Form>
  )
}

export default QuestionForm
