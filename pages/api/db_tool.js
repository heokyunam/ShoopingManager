
import mariadb from 'mariadb';

export default mariadb.createPool({
    host: 'localhost', port:'3306',
    user: 'user', password: 'user1234',
    connectionLimit: 5
});