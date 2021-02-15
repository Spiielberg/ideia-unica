async function tempo(req, res) {
  const apiSecret = process.env.API_SECRET;
  const dynamicDate = new Date();

  const subscribersResponse = await fetch(
    `https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`
  );
  const subscribersResponseJson = await subscribersResponse.json();
  const inscritos = subscribersResponseJson.total_subscribers;

  console.log(inscritos);

  res.json({
    date: dynamicDate.toUTCString(),
    inscritos: inscritos,
  });
}

export default tempo;
