import style from '../../styles/Calendar.module.scss';

const Calendar = () => {
    let weeks = [];
    let week = [];

    for(var i = 1; i < 30; i++) {  
        week.push({
            "date": `2021-02-${i}`,
            "day": i,
            "active": i == 25,
            "menu": [
                {
                    "type": "blue",
                    "text": "",
                },
                {
                    "type": "red",
                    "text": ""
                }
            ]
        })

        if(i % 7 == 0) {
            weeks.push(week);
            week = [];
        }
    }

    weeks.push(week);

    return (
        <div className={style.calendar}>
            <div>
                <table>
                    <colgroup>
                        <col width="14%"/>
                        <col width="14%"/>
                        <col width="14%"/>
                        <col width="14%"/>
                        <col width="14%"/>
                        <col width="14%"/>
                        <col width="14%"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>S</th>
                            <th>M</th>
                            <th>T</th>
                            <th>W</th>
                            <th>T</th>
                            <th>F</th>
                            <th>S</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            weeks.map(week => (
                                <tr key={week[0].day}>
                                    {
                                        week.map(day => (
                                            <td key={day.day} className={day.active? style.active: ""}>
                                                <div className={style.day}>{day.day}</div>
                                                <div className={style.markers}>
                                                    <div className={`${style.red} ${style.marker}`}></div>
                                                    <div className={`${style.blue} ${style.marker}`}></div>
                                                </div>
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Calendar;