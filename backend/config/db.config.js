
module.exports = {
  HOST: "127.0.0.1",
  USER: 'postgres',
  PASSWORD: 1234,
  DB: "groupmania",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
