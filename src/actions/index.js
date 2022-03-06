// Coloque aqui suas actions
export const logType = 'LOGIN'; // sem isso o lint fica trabando o projeto...pedindo export default

export const userDataEmail = (email) => ({
  type: 'LOGIN',
  email,
});
