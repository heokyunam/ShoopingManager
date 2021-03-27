import style from "../../styles/FoodList.module.scss";

const FoodList = () => {
    let datas = [{
        "text": "치킨",
        "active": true
    }, {
        "text": "피자",
        "active": false
    }, {
        "text": "닭다리살",
        "active": false
    },{
        "text": "치킨2",
        "active": false
    }, {
        "text": "피자2",
        "active": false
    }, {
        "text": "닭다리살2",
        "active": false
    },{
        "text": "치킨3",
        "active": false
    }, {
        "text": "피자3",
        "active": false
    }, {
        "text": "닭다리살3",
        "active": false
    }];

    return (
    <div className={style.foodpage}>
        <div className={style.foodlist}>
            {
                datas.map(value => (
                    <div className={style.fooditem + (value.active? ` ${style.active}`: "")} key={value.text}>
                        {value.text}
                    </div>
                ))
            }
        </div>
        <div className={style.btnadd}>
            +
        </div>
    </div>
    )
}

export default FoodList;