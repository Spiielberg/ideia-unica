function tempo(req, res) {
  const dynamicDate = new Date();

  res.json({
    date: dynamicDate.toUTCString(),
  });
}

export default tempo;
