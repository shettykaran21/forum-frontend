import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Box, Typography } from '@mui/material'
import { lighten } from '@mui/material/styles'

import FormInput from '@components/form/form-input'
import FormPasswordInput from '@components/form/form-password-input'
import Button from '@components/button'
import api from 'utils/api'
import { AuthContext } from '@context/auth'
import FormContainer from '@components/form/form-container'

const LoginForm = () => {
  const { setAuthState, isAuthenticated } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/')
    }
  }, [isAuthenticated, router])

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
    initialValues: { username: '', password: '' },

    onSubmit: async (values, { setStatus, resetForm }) => {
      setLoading(true)

      try {
        const { data } = await api.post('/auth/login', JSON.stringify(values), {
          headers: {
            'Content-Type': 'application/json',
          },
        })
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
        .max(16, 'Must be at most 16 characters long')
        .matches(/^[a-zA-Z0-9_-]+$/, 'Contains invalid characters'),
      password: Yup.string()
        .required('Required')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
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
        {status && (
          <Typography sx={{ color: lighten('#ff0000', 0.5) }}>
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
            Log in
          </Button>
        </Box>
      </form>
    </FormContainer>
  )
}

export default LoginForm
