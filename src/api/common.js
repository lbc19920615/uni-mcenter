import axios from '@/utils/request/index'

export function getCourseProducts() {
  return axios.get('/admin_api/v1/course/product/')
}