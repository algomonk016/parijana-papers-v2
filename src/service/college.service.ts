import { API } from "@/constants";
import { getData, postData } from "./common.service";

export const getColleges = () => {
  const url = API + '/colleges';
  return fetch(url).then(res => res.json());
}

export const getCollegeById = (id: string) => {
  const url = `/colleges/${id}`;
  return getData(url, {
    sendTokenInHeader: true
  }).then(res => res.json());
}

export const postCollege = (payload: any) => {
  return postData('/colleges', {
    body: payload
  }).then(res => res.json());
}