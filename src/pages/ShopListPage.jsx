import { Button, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@material-ui/core";
import { useState } from "react";
import { v4 } from "uuid";
import classes from "./ShopListPage.module.scss"


const ShopListPage = () => {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState('');

    const add = async () => {
        await setItems([
            ...items,
            {id: v4(), state: "wait", text: item}
        ])
        await setItem('');
    }

    const remove = async (id) => {
        setItems(items.filter(value => value.id !== id));
    }

    const changeState = async(id, state) => {
        items.filter(value => value.id === id)[0].state = state;
        setItems(items);
    }

    return (
        <TableContainer component={Paper}>
            <div className={classes.insertArea}>
                <TextField value={item} onChange={e=>setItem(e.target.value)}/>
                <Button variant="contained" color="primary" onClick={add}>추가</Button>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>상태</TableCell>
                        <TableCell>항목</TableCell>
                        <TableCell>삭제</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(value => (
                        <TableRow key={value.id}>
                            <TableCell>
                                <Select value={value.state} onChange={e=>changeState(value.id, e.target.value)}>
                                    <MenuItem value="wait">대기</MenuItem>
                                    <MenuItem value="complete">완료</MenuItem>
                                </Select>
                            </TableCell>
                            <TableCell>{value.text}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={() => remove(value.id)}>삭제</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </TableContainer>
    )
}

export default ShopListPage;