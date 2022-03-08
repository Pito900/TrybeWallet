// essas duas funções puxam, da API, as moedas (currenciesFromAPI) e os seus dados (exchangeRatesFromAPI);

export const exchangeRatesFromAPI = async () => {
  const moedas = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await moedas.json();
  return data;
};

export const currenciesFromAPI = async () => {
  const req = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await req.json();
  // vamos criar o array correto sem a criptomoeda USDT
  const currencyObj = Object.keys(data).filter((m) => m !== 'USDT');
  // como já fiz em outros projetos, estou usando o filter para excluir o USDT
  return currencyObj;
};
