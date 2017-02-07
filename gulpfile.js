var gulp = require('gulp')
var fs = require('fs')
var argv = require('yargs').argv
// Jan  Feb    Mar   Apr    May   Jun    July  Aug   Sept  Oct    Nov    Dec
var has31 = [true, false, true, false, true, false, true, true, false, true, false, true]

var generateSequence = (start, end) => {

  var sequence = []

  if (end < start) {
    var temp = end
    end = start
    start = temp
  }

  for ( var i = start; i <= end; i++) {
    var index = i < 10 ? 0 + i.toString() : i
    sequence.push(index)
  }

  return sequence
}

gulp.task('generate-date-list', () => {

  var startYear = parseInt(argv.start)
  var endYear = parseInt(argv.end)

  if (typeof startYear !== 'number' || (startYear % 1) !== 0) return console.log(new Error('End and Start years must be intergers!!'))
  if (typeof endYear !== 'number' || (endYear % 1) !== 0) return console.log(new Error('End and Start years must be intergers!!'))

  var dates = []

  var days = generateSequence(1, 31)
  var months = generateSequence(1, 12)
  var years = generateSequence(startYear, endYear)

  for ( var index_year = 0; index_year < years.length; index_year++) {


    if (years[index_year] % 4 === 0 && years[index_year] % 100 != 0 || years[index_year] % 400 == 0 && years[index_year] % 100 != 0) { // BISEXTO
      for ( var index_month = 0; index_month < months.length; index_month++) {
        if (has31[index_month]) { // 31

          for ( var index_day = 0; index_day < days.length; index_day++) {
            dates.push(days[index_day].toString() + months[index_month].toString() + years[index_year].toString())
          }
        } else if (index_month == 1) { // feb

          for ( var index_day = 0; index_day < days.length; index_day++) {
            dates.push(days[index_day].toString() + months[index_month].toString() + years[index_year].toString())
            if (days[index_day] == 29) index_day = days.length
          }
        } else { // 30

          for ( var index_day = 0; index_day < days.length; index_day++) {
            dates.push(days[index_day].toString() + months[index_month].toString() + years[index_year].toString())
            if (days[index_day] == 30) index_day = days.length
          }
        }
      }
    } else { // NORMAL

      for ( var index_month = 0; index_month < months.length; index_month++) {
        if (has31[index_month]) { // 31

          for ( var index_day = 0; index_day < days.length; index_day++) {
            dates.push(days[index_day].toString() + months[index_month].toString() + years[index_year].toString())
          }
        } else if (index_month == 1) { // feb

          for ( var index_day = 0; index_day < days.length; index_day++) {
            dates.push(days[index_day].toString() + months[index_month].toString() + years[index_year].toString())
            if (days[index_day] == 28) index_day = days.length
          }
        } else { // 30

          for ( var index_day = 0; index_day < days.length; index_day++) {
            dates.push(days[index_day].toString() + months[index_month].toString() + years[index_year].toString())
            if (days[index_day] == 30) index_day = days.length
          }
        }
      }
    }
  }

  console.log(dates.length + ' dates were generated')

  fs.writeFileSync('datelist_' + startYear + '_' + endYear + '.txt', dates.join('\n'))
})
