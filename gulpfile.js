var gulp = require('gulp')
var fs = require('fs')
var argv = require('yargs').argv


var generateSequence = (start, end) => {

  var sequence = []

  if( end < start ){
    var temp = end
    end = start
    start = temp
  }

  for (var i = start; i<=end; i++) {
    var index = i<10? 0 + i.toString() : i
    sequence.push(index)
  }

  return sequence
}

gulp.task('generate-date-list', () => {

  var startYear = parseInt(argv.start)
  var endYear = parseInt(argv.end)

  console.log(startYear)

  if( typeof startYear !== 'number' || (startYear%1) !== 0 ) return console.log( new Error('End and Start years must be intergers!!') )
  if( typeof endYear !== 'number' || (endYear%1) !== 0 ) return console.log( new Error('End and Start years must be intergers!!') )

  var dates = []

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

  console.log(dates.length + " dates were generated.\n")

  fs.writeFileSync('datelist_'+startYear+'_'+endYear+'.txt', dates.join('\n'))

})
