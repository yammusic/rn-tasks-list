import axios from 'axios'

export const getData = async () => {
  const url = 'https://6172cfe5110a740017222e2b.mockapi.io/elements'
  const response = await axios.get(url)
  return response.data
}