import { documents } from './dummyData'
export const getDocuments = async (): Promise<any> => {
  
  const promise =  new Promise((resolve, reject) => {
    resolve({
      data: documents
    })
  })

  return promise
}