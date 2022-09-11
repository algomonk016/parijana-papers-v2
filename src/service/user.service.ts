export const getUser = (count: number) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${count}`).then(res => res.json());
}