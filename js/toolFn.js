let $myTool = {
    // 定义一个方法，用于判断指定的年份是否是闰年，是闰年返回true，否则返回false
    isLeapYear: year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0,

    // 定义一个补零方法，用于给个位数字前面补0
    additional0: value => (value + "").length > 1 ? "" + value : "0" + value,

    // 翻转字符串  先分割字符串，然后翻转后，再拼接字符串
    strReverse: str => str.split('').reverse().join(''),

    // 定义一个方法，用于将一个日期返回一个短日期格式，2021年11月24日
    getMiniDate: (date = new Date()) => {
        // 箭头函数this 指向
        let additional0 = value => (value + "").length > 1 ? "" + value : "0" + value;
        let year = date.getFullYear();
        let month = additional0(date.getMonth() + 1); // 因为月份计算机是从0-11
        let day = additional0(date.getDate());
        let year_month_day = [year, month, day].join('-');
        let hours = additional0(date.getHours());
        let minutes = additional0(date.getMinutes());
        let seconds = additional0(date.getSeconds());
        let hours_minutes_seconds = [hours, minutes, seconds].join(':');
        let week = '星期' + '日一二三四五六'.charAt(date.getDay()); // charAt() 方法会返回指定下标的值
        return [year_month_day, hours_minutes_seconds, week].join(' ');
    },

    // 分页方法
    getPageData: function (arr, pageIndex, pageSize) {
        // 起始位置
        let start = (pageIndex - 1) * pageSize;
        // 结束位置
        let end = pageSize + start;
        // 获取分页数据
        let data = arr.slice(start, end);
        // 计算出总页数  向上取整
        let totalPage = Math.ceil(arr.length / pageSize);
        // 返回一个对象
        return {
            // 一份数据
            data: data,
            // 总页数
            totalPage: totalPage
        }
    },
}