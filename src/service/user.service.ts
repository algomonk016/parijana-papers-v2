import { changeRoute, getStorageData, setStorageData } from "@/utils";
import { getData, postData } from "./common.service";
import { store } from "@/redux/store";
import { fetchUserDetails } from "@/redux/store/slices/userSlice";

export interface LoginUser{
  email: string;
  password: string;
}

export const getUser = () => {
  const url = '/whoAmI';
  return getData(url, {
    sendTokenInHeader: true
  })
    .then(res => res.json());
}

export const loginUser = (payload: LoginUser) => {
  const url = '/users/login';
  return postData(url, {
    body: payload
  })
    .then(res => res.json())
}

export const afterLogin = (token: string) => {
  setStorageData('access_token', 'session', token);
  store.dispatch(fetchUserDetails())
  changeRoute('/admin/profile');
}