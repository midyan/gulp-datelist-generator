# gulp-datelist-generator
Simples datelist generator that generates every possible date between two given years.<br>
Now it months have the correct number of days, including leap years

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
