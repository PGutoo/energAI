const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 80;

app.listen(port, host, () => {
  console.log(`Servidor rodando em http://${host}:${port}`);
});
