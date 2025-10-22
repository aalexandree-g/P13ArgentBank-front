import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const loginUser = async (email, password) =>
  (await api.post('/user/login', { email, password })).data

export const getUserProfile = async (token) =>
  (
    await api.post(
      '/user/profile',
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
  ).data

export const updateUserProfile = async (token, userData) =>
  (
    await api.put('/user/profile', userData, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ).data

export default api
