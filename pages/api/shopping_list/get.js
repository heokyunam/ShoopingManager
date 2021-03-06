import pool from "../db_tool";
import {format} from "../../util";

export default async (req, res) => {
    let conn;
    try{
        conn = await pool.getConnection();
        conn.query('USE shopping_manager');
        const rows = await conn.query(`
        select date, text 
        from request_food
        where date <= '${format(new Date(), 'yyyy-MM-dd')}'`);

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