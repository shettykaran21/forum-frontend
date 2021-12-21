/** @jsxImportSource @emotion/react */

import { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Box, Typography } from '@mui/material'
import { css } from '@emotion/react'

import FormInput from '@components/form-input'
import Button from '@components/button'
import api from 'utils/api'
import { AuthContext } from '@context/auth'
import { useRouter } from 'next/router'

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

  const styles = {
    container: css`
      position: absolute;
      top: 50%;
      left: 50%;
      width: 25rem;
      padding: 2.5rem;
      transform: translate(-50%, -50%);
      box-shadow: 0 10px 20px 0 rgba(153, 153, 153, 0.25);
      border-radius: 10px;
    `,
  }

  return (
    <Box sx={styles.container}>
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
        <FormInput
          label="Password"
          type="password"
          name="password"
          autoComplete="off"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={touched.password && errors.password}
          errorMsg={errors.password && errors.password}
        />
        {status && <Typography sx={{ color: 'red' }}>{status}</Typography>}
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
    </Box>
  )
}

export default LoginForm
