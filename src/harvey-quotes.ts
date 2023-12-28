const fetchHarveyQuote = async () => {
  const response = await fetch(
    "https://harvey-specter-quotes.vercel.app/quote"
  );
  const data = await response.json();
  const { quote } = data;
  return quote;
};

export default fetchHarveyQuote;
