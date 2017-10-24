# ireal-parse

This is a script that selectively parses charts from the [ireal pro 1300 jazz standards](https://www.irealb.com/forums/showthread.php?12753-Jazz-1300-Standards) into a convenient JSON format, with the intention of inserting them into the rtrb database.

![Alt Text](https://github.com/realtimerealbook/ireal-parse/raw/master/demo.gif)

A good portion of the code here is adapted from pianosnake's [ireal-reader](https://www.npmjs.com/package/ireal-reader).

## Usage

First create the directory `data_out/` in your home folder, then configure `list.txt` to contain the list of file names we want to parse and test. To *parse all 1300 charts*, simply leave `list.txt` blank.

The complete list of available charts in `1300.txt` can be found [here](http://www.irealb.com/forums/showthread.php?4522-Jazz-1300-Standards-Individual-Songs).

File names should be separated by a new line, with spaces replaced by underscores, and special characters escaped. For example
```
Fly_Me_To_The_Moon
Got_A_Match\?
Here\'s_That_Rainy_Day
So_Nice_\(Summer_Samba\)
St\._Thomas
Tell_me_a_bedtime_story
```

Ensure that `data_in/1300.txt` is available, then simply run
```js
node parse
```

Your output should now be in `data_out/<filename>.json`.

## Testing

To test that your output matches the expected output, create the directory `data_out_test/` in your home folder and ensure that the correctly parsed files are in `data_out_test/<filename>.json`. Then simply run
```js
node test
```

## Inserting into RethinkDB

First make sure that the [`RethinkDB javascript driver`](https://www.rethinkdb.com/docs/install-drivers/javascript/) is installed.
```js
npm install rethinkdb
```

Launch the [`rtrb-api`](https://github.com/realtimerealbook/rtrb-api) rethinkdb instance from the `rtrb-api` directory.
```js
rethinkdb
```

Then simply run
```js
node insert
```