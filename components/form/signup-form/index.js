import { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Box, Typography } from '@mui/material'
import { lighten } from '@mui/material/styles'

import FormInput from '@components/form/form-input'
import Button from '@components/button'
import api from 'utils/api'
import { AuthContext } from '@context/auth'
import FormContainer from '@components/form/form-container'
import FormPasswordInput from '../form-password-input'

const SignupForm = () => {
  const { setAuthState } = useContext(AuthContext)

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
          'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
        ),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
      ),
    }),
  })

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
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
      </form>
    </FormContainer>
  )
}

export default SignupForm
