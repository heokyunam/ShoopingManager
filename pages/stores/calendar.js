import {observable} from 'mobx';

const calendar = observable({
    selectedDay: null,
    days: [],
    setSelectedDay(day) {
        this.selectedDay = day;
    },
    setDays(days) {
        this.days = days;
    }
})

export {calendar};