const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');
const path = require('path');

async function migrate() {
  try {
    const db = await sqlite.open({
      filename: path.join('./dataCompany.sqlite'),
      driver: sqlite3.Database,
    });

    await db.migrate({
      force: 'last',
      migrationsPath: path.join(__dirname, '/migrations'),
    });
  } catch (err) {
    console.log(err);
  }
}
migrate();
