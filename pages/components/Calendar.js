import style from '../../styles/Calendar.module.scss';
import {useEffect} from "react";

const Calendar = ({weeks}) => {
    const getDayClass = (day) => {
        if(day.active) {
            return style.active;
        } else if (day.month != new Date().getMonth()) {
            return style.prevmonth;
        } else {
            return "";
        }
    }

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
                                <tr key={week[0].date}>
                                    {
                                        week.map(day => day.day != 0 ? (
                                            <td key={day.date} className={getDayClass(day)}>
                                                <div className={style.day}>{day.day}</div>
                                                <div className={style.markers}>
                                                    <div className={`${style.red} ${style.marker}`}></div>
                                                    <div className={`${style.blue} ${style.marker}`}></div>
                                                </div>
                                            </td>
                                        ) : (<td></td>))
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