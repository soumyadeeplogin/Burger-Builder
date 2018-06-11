import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://burger-builder-67398.firebaseio.com/'
})

export default instance