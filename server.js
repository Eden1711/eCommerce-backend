const app = require("./src/app");

const PORT = 1337

const server = app.listen( PORT, () => {
    console.log(`Ecommerce run on port ${PORT}`);
})

process.on('SIGINT', () => {
    server.close(() => console.log('Exit server'))
})