let getWeek = function () {
    this.nowTime = new Date();
    // 今天 04-13
    let now = new Date()
    let month = now.getMonth() + 1
    let maxDate = 31
    if (month == 2) {
        maxDate = 28
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        maxDate = 30
    }
    let date = now.getDate()
    this.nextDate = function (n) {
        if (date + n <= maxDate) {
            return month + '-' + (date + n)
        } else {
            return (month + 1) + '-' + (data + n - maxDate)
        }

    }
    let ertian = this.nextDate(1)
    let santian = this.nextDate(2)
    let sitian = this.nextDate(3)
    let wutian = this.nextDate(4)
    let liutian = this.nextDate(5)
    let qitian = this.nextDate(6)

    this.getAll = function () {
        let week = {
            first: date,
            second: ertian,
            third: santian,
            fourth: sitian,
            fifth: wutian,
            sixth: liutian,
            seventh: qitian
        }
        return week
    }
    console.log(this.getAll());



    this.init = function () {
        //     this.dayInWeek = this.nowTime.getDay();
        //     this.dayInWeek == 0 && (this.dayInWeek = 7);
        //     this.thsiWeekFirstDay = this.nowTime.getTime() - (this.dayInWeek - 1) * 86400000;
        //     this.thisWeekLastDay = this.nowTime.getTime() + (7 - this.dayInWeek) * 86400000;
        this.getAll = this.getAll
        return this;
    };

}
export default getWeek
