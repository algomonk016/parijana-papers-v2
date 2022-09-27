import { Option, Options } from '@/constants'
import { store } from '@/redux/store';
import Router from 'next/router';

const pureData = ['string', 'number', 'Date'];
type storageType = 'local' | 'session';
export interface CheckLoggedInUser {
  isLoggedIn: boolean;
  isAdmin: boolean;
}


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
  if (typeof array[0] === 'string') {
    options = array.map((element: string) => {
      let op: Option = {
        label: element,
        value: element
      }

      return op;
    })
  } else {
    options = array.map((element: any) => {
      const { id, name } = element;
      let op: Option = {
        label: name,
        value: id
      }
      return op;
    })
  }

  return options
}

export const getStorageData = (key: string, storage: storageType = 'local'): any => {
  if (typeof window !== 'undefined') {
    let data = (storage === 'local') ? localStorage.getItem(key) : sessionStorage.getItem(key);

    if (!data) {
      return undefined;
    }

    return JSON.parse(data);
  }

  return undefined;

}

export const setStorageData = (key: string, storage: storageType = 'local', data: any): any => {
  data = JSON.stringify(data);
  storage === 'session' ? sessionStorage.setItem(key, data) : localStorage.setItem(key, data);
}

export const getReduxStateData = (key: string = '') => {
  const data: any = store.getState()
  if (key.length !== 0) {
    return data[key];
  }

  return undefined;
}

export const checkLoggedInUser = (): CheckLoggedInUser => {
  const user = getStorageData('user', 'session');
  if (!!user) {
    const { isAdmin } = user;
    return {
      isAdmin: isAdmin,
      isLoggedIn: true
    }
  }
  return {
    isAdmin: false,
    isLoggedIn: false
  }
}

export const changeRoute = (path: string) => {
  typeof window !== 'undefined' && Router.push(path);
}

export const logoutUser = () => {
  if(typeof window !== 'undefined'){
    sessionStorage.clear();
  }
  changeRoute('/login');
}