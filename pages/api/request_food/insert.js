import pool from "../db_tool";

export default async (req, res) => {
    let conn;
    try{
        const {
            query: { date, text },
        } = req

        conn = await pool.getConnection();
        conn.query('USE shopping_manager');
        const rows = await conn.query(`
        insert into request_food(date, text)
        values('${date}', '${text}')`);

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