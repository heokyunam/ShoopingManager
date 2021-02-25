import pool from "../db_tool";

export default async (req, res) => {
    let conn;
    try{
        const {
            query: { year, month },
        } = req

        conn = await pool.getConnection();
        conn.query('USE shopping_manager');
        const rows = await conn.query(`
        select date, text 
        from request_food
        where date >= '${year}-${month}-1'
        and date <= '${year}-${month}-31'`);

        res.send({
            "code": "success",
            rows
        });
    }
    catch(err){
        console.log("err", err);
        res.send({
            "code": "error"
        });
    }
    finally{
        if (conn) conn.end();
    }
}