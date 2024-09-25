const env = {
  database: 'basexamen',
  username: 'basexamen_user',
  password: 'R3Y8swGNJ2LsshvUvIFiuj5jFXFTqQym',
  host: 'dpg-crofvlhu0jms73c8vg6g-a.oregon-postgres.render.com',
  dialect: 'postgres',
  ssl: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;
