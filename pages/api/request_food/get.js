import pool from "../db_tool";
import {format, util} from "../../util";

export default async (req, res) => {
    let conn;
    try{
        const {
            query: { year, month },
        } = req

        conn = await pool.getConnection();
        conn.query('USE shopping_manager');
        const rows = await conn.query(`
        select id, date, text 
        from request_food
        where date >= '${year}-${month}-1'
        and date <= '${year}-${month}-31'`);

        res.send({
            "code": "success",
            "rows": rows.map(row => {
                return {
                    id: row.id,
                    date: format(row.date, "yyyy-MM-dd"),
                    text: row.text,
                }
            })
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