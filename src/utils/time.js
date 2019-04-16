export const getWeek = () => {
  // 今天
  let now = new Date()
  // now.setDate(30)
  let month = now.getMonth() + 1
  let date = now.getDate()
  let weekday = now.getDay()
  // console.log(month, date, weekday)

  // 逻辑判断日子
  let maxDate = 31
  if (month == 2) {
    maxDate = 28
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    maxDate = 30
  }

  let week = ['日', '一', '二', '三', '四', '五', '六']
  let nextDate = function(n) {
    let nowWeekDay = weekday + n
    if (nowWeekDay > 6) {
      nowWeekDay = nowWeekDay - 7
    }
    // console.log(nowWeekDay)

    if (date + n <= maxDate) {
      return month + '-' + (date + n) + `  （星期${week[nowWeekDay]}）`
    } else {
      let nextmonth = month + 1
      if (nextmonth > 12) {
        nextmonth = 1
      }
      return (
        nextmonth + '-' + (date + n - maxDate) + `  （星期${week[nowWeekDay]}）`
      )
    }
  }
  // 返回七天日期
  let getAll = {
    first: nextDate(0),
    second: nextDate(1),
    third: nextDate(2),
    fourth: nextDate(3),
    fifth: nextDate(4),
    sixth: nextDate(5),
    seventh: nextDate(6)
  }
  return getAll
}
