import { Option, Options } from '@/constants'

export const isDevelopment: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const generateDropDownOptions = (array: any[]): Options => {
  let options: Options = [];
  if(typeof array[0] === 'string'){
    options = array.map((element: string) => {
      let op: Option = {
        label: element,
        value: element
      }

      return op;
    })
  } else{
    options = array.map((element: any) => {
      const {id, name} = element;
      let op: Option = {
        label: name,
        value: id
      }
      return op;
    })
  }

  return options
}

type storageType = 'local' | 'session';
export const getStorageData = (key: string, storage: storageType = 'local'): any => {
  const pureData = ['string', 'number', 'Date'];
  let data = storage === 'session' ? sessionStorage.getItem(key) : localStorage.getItem(key) ;

  if(!data){
    return undefined;
  }

  if(pureData.includes(typeof data)){
    return data;
  }

  data = JSON.parse(data);

  return data;
}