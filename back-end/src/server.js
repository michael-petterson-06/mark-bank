require('dotenv').config();
const app = require('./api/app');

const PORT = process.env.API_PORT || 8080;

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));