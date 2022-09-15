import { API } from "@/constants";
import { getStorageData } from "@/utils";
import { getData, postData } from "./common.service";

export const uploadPdf = (selectedFile: File) => {
  const url = API + '/pdf';

  const formData = new FormData();
  formData.append('file', selectedFile);

  return fetch(url, {
    method: 'post',
    headers: {
      'Authorization': 'Bearer ' + getStorageData('access_token', 'session')
    },
    body: formData
  })
    .then(res => res.json());
}

export const postDocumentData = (payload: any) => {
  const url = '/documents';
  return postData(url, {
    sendTokenInHeader: true,
    body: payload
  }).then(res => res.json())
}