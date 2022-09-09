import { API } from "@/constants";
import { postData } from "./common.service";

export const getColleges = () => {
  const url = API + '/colleges';
  return fetch(url).then(res => res.json());
}

export const postCollege = (payload: any) => {
  return postData('/colleges', {
    body: payload
  }).then(res => res.json());
}