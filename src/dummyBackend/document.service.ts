import { getData } from '@/service/common.service';
import { getStorageData } from '@/utils'

export const getDocuments = async (): Promise<any> => {
  const { id } = getStorageData('user', 'session');
  const url = `/admins/${id}/documents`
  
  return getData(url, {
    sendTokenInHeader: true
  }).then(res => res.json());
}