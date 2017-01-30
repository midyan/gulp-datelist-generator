# gulp-datelist-generator
Simples datelist generator that generates every possible date between two given years.<br>
It does assume that every month has 31 days because, lets be honest, it will make no difference.

#How to use it:

Just run
```sh
$ npm install
$ gulp generate-date-list --start START_YEAR --end END_YEAR
```

It will create a datelist_START_YEAR_END_YEAR.txt file with all the dates inside.


##Example:

```sh
$ npm install
$ gulp generate-date-list --start 1900 --end 2017
```
will output datelist_1900_2017.txt to the root folder of the project
