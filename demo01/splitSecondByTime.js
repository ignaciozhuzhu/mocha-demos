//时间去秒
function splitSecondByTime(timeInsecond) {
	var begin = timeInsecond.substr(0, 5)
	var end = timeInsecond.substr(8, 6)
	return begin + end;
}

module.exports = splitSecondByTime;