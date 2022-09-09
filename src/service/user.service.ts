// export const userLogin = async (): Promise<any> => {}

import { fetchUserFailure, fetchUserStart, fetchUserSuccess } from "@/redux/store/slices/userSlice"
import { API } from "@/constants"
import { getStorageData } from "@/utils"
import { postData } from "./common.service"

export const fetchUser = () => {
  return async (dispatch: any) => {
    dispatch(fetchUserStart())

    try {
      const url = API + '/admins/' + getStorageData('user-id', 'local');
      console.log('url', url);
      const response = await fetch(url)
      // const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data = await response.json()
      dispatch(fetchUserSuccess(data))
    } catch (error) {
      dispatch(fetchUserFailure(error))
    }
  }

}

export const postAdmin = (payload: any) => {
  const url = '/admins';
  return postData(url, {
    body: payload
  }).then(res => res.json());
}