const app = require('./app');

const PORT = process.env.PORT || 3334;

app.listen(PORT, console.log(`Escutando na porta ${PORT}`));
