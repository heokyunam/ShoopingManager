import {observable} from 'mobx';

const calendar = observable({
    selectedDay: null,
    setSelectedDay(day) {
        this.selectedDay = day;
    }
})

export {calendar};