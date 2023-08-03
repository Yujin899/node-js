const { readFile, writeFile, read } = require("fs");

var test, first, second;

console.log("start")
readFile("./content/child/test.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    test = result;
    console.log(test);
    readFile("./content/first.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        first = result;
        console.log(first);
        readFile("./content/second.txt", "utf8", (err, result) => {
          if (err) {
            console.log(err);
            return;
          } else {
            second = result;
            console.log(second);
            writeFile(
              "./content/result.txt",
              `test : ${test} , first: ${first} , second: ${second}`,
              (err, result) => {
                if (err) {
                  console.log(err);
                  return;
                } else {
                  console.log(result);
                  console.log("Done :)");
                }
              }
            );
          }
          console.log("done :)")
        });
      }
    });
  }
});


console.log("starting with new task...")
