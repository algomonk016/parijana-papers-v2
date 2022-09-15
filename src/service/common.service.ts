import { API } from "@/constants";
const basePath = API;

export const Regex = {
  id: /^[a-z0-9]+$/,
  mobile: /^([0-9]{10})$/,
  latitude: /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/,
  longitude: /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/
};

export interface APIOptions {
  basePath?: string,
  sendTokenInUrl?: boolean,
  sendTokenInHeader?: boolean,
  body?: any,
  headers?: any,
  usePutMethod?: boolean,
  autoContentType?: boolean;
}

export async function handleErrors(response: Response) {
  if (!response.ok) {
    const err = await response.json();
    throw Error(err.error.message);
  }
  return response.status === 200 ? response.json() : undefined;
}

function getAccessToken(): string {
  // TODO: fix me later
  return sessionStorage.getItem('access_token') as string;
}

export function setAccessToken(access_token: string) {
  localStorage.setItem('access_token', access_token);
}

export function clearAccessToken() {
  localStorage.removeItem('access_token');
}

function addAccessToken(url: string): string {
  const qsSeperator = url.includes('?') ? '&' : '?';
  return url.concat(qsSeperator + 'access_token=' + getAccessToken());
}

export async function getData(url = '', options: APIOptions = {}) {
  const tokenRequiredInUrl = !!options.sendTokenInUrl;
  if (tokenRequiredInUrl) {
    url = addAccessToken(url);
  }
  const finalUrl = `${basePath}${url}`;
  const finalOptions: any = { method: 'get' };
  if (options.headers) {
    finalOptions.headers = options.headers;
  }
  const tokenRequiredInHeader = !!options.sendTokenInHeader;
  if (tokenRequiredInHeader) {
    finalOptions.headers = finalOptions.headers || {};
    finalOptions.headers['Authorization'] = `Bearer ${getAccessToken()}`
  }
  return fetch(finalUrl, finalOptions);
}

export async function postData(url = '', options: APIOptions = {}) {

  const tokenRequiredInUrl = !!options.sendTokenInUrl;
  const autoContentType = !!options.autoContentType;
  if (tokenRequiredInUrl) {
    url = addAccessToken(url);
  }
  const finalUrl = `${basePath}${url}`;
  const finalOptions: any = { method: options.usePutMethod ? 'put' : 'post', headers: {} };
  if (options.headers) {
    finalOptions.headers = options.headers;
  }
  if (!finalOptions.headers.hasOwnProperty('content-type') && !autoContentType) {
    finalOptions.headers['content-type'] = 'application/json; charset=utf-8';
  }
  const tokenRequiredInHeader = !!options.sendTokenInHeader;
  if (tokenRequiredInHeader) {
    finalOptions.headers = finalOptions.headers || {};
    finalOptions.headers['Authorization'] = `Bearer ${getAccessToken()}`
  }
  if (options.body) {
    finalOptions.body = JSON.stringify(options.body);
  }
  return fetch(finalUrl, finalOptions);
}

export const toInputLowercase = (e: any) => {
  e.target.value = ('' + e.target.value).toLowerCase();
};