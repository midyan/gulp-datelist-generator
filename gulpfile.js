var gulp = require('gulp')
var fs = require('fs')
var argv = require('yargs').argv


var generateSequence = (start, end) => {

  var sequence = []

  for (var i = start; i<=end; i++) {
    var index = i<10? 0 + i.toString() : i
    sequence.push(index)
  }

  return sequence
}

gulp.task('generate-date-list', () => {

  var dates = []

  var startYear = argv.start
  var endYear = argv.end

  var days = generateSequence(1, 31)
  var months = generateSequence(1, 12)
  var years = generateSequence(startYear, endYear)

  for(var index_ano = 0; index_ano<years.length; index_ano++) {
    for(var index_mes = 0; index_mes<months.length; index_mes++) {
      for(var index_dia = 0; index_dia<days.length; index_dia++) {

        dates.push( days[index_dia].toString() + months[index_mes].toString() + years[index_ano].toString() )

      }
    }
  }

  fs.writeFileSync('datelist_'+startYear+'_'+endYear+'.txt', dates.join('\n'))

})
