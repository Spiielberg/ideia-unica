function tempo(req, res) {
  const dynamicDate = new Date();

  response.json({
    date: dynamicDate.toUTCString(),
  });
}

export default tempo;
