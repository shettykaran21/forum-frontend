import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Box, Typography } from '@mui/material'
import { lighten } from '@mui/material/styles'

import FormInput from '@components/form/form-input'
import FormPasswordInput from '@components/form/form-password-input'
import Button from '@components/button'
import api, { setAuthHeader } from '@utils/api'
import { AuthContext } from '@context/auth'
import Form from '@components/form'
import CustomAlert from '@components/alert'

const SignupForm = () => {
  const { setAuthState, isAuthenticated } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

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
    initialValues: { username: '', password: '', passwordConfirmation: '' },

    onSubmit: async (values, { setStatus, resetForm }) => {
      setLoading(true)

      try {
        const { data } = await api.post(
          '/auth/signup',
          JSON.stringify(values),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        const { token, expiresAt, userInfo } = data
        setAuthState({ token, expiresAt, userInfo })
        setAuthHeader(token)
        setIsOpen(true)
        resetForm({})
      } catch (err) {
        setStatus(err.response.data.message)
      }

      setLoading(false)
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .required('Required')
        .min(5, 'Min 5 characters long')
        .max(16, 'Max 16 characters long')
        .matches(/^[a-zA-Z0-9_-]+$/, 'Contains invalid characters'),
      password: Yup.string()
        .required('Required')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          'Must Contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Character'
        ),
      passwordConfirmation: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
  })

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/')
    }
  }, [isAuthenticated, router])

  return (
    <>
      <CustomAlert
        title={'Signed up successfully'}
        alertMsg={'Redirecting...'}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Form onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          type="text"
          name="username"
          autoComplete="off"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={touched.username && errors.username}
          errorMsg={errors.username && errors.username}
        />
        <FormPasswordInput
          label="Password"
          name="password"
          autoComplete="off"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={touched.password && errors.password}
          errorMsg={errors.password && errors.password}
        />
        <FormPasswordInput
          label="Confirm Password"
          name="passwordConfirmation"
          autoComplete="off"
          value={values.passwordConfirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={touched.passwordConfirmation && errors.passwordConfirmation}
          errorMsg={errors.passwordConfirmation && errors.passwordConfirmation}
        />
        {status && (
          <Typography
            sx={{ color: lighten('#ff0000', 0.5), marginTop: '1rem' }}
          >
            {status}
          </Typography>
        )}
        <Box sx={{ marginTop: '2rem' }}>
          <Button
            type="submit"
            isLoading={loading}
            disabled={isSubmitting}
            style={{ width: '100%' }}
          >
            Sign Up
          </Button>
        </Box>
      </Form>
    </>
  )
}

export default SignupForm
