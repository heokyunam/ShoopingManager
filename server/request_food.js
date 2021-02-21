

export const getFoodRequest = async (pool, year, month) => {
    let conn, rows;
    try{
        conn = await pool.getConnection();
        conn.query('USE shopping_manager');
        rows = await conn.query(`
        select date, text 
        from request_food
        where date >= '${year}-${month}-1'
          and date <= '${year}-${month}-31'`);
    }
    catch(err){
        throw err;
    }
    finally{
        if (conn) conn.end();
        return rows;
    }
  }

export const insertFoodRequest = async(pool, date, text) => {
    let conn, rows;
    try{
        conn = await pool.getConnection();
        conn.query('USE shopping_manager');
        await conn.query(`
        insert into request_food(date, text)
        values('${date}', '${text}')`);
    }
    catch(err){
        return false;
    }
    finally{
        if (conn) conn.end();
        return true;
    }
  }