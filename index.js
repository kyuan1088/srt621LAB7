const port = 8989;
const http = require("http");
const httpStatus = require("http-status-codes");

const app = http.createServer((request, response) => {
  console.log("received an incoming request!");
  response.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });
  let responseMessage = "Time is " + updateTime();
  response.write(responseMessage);
  response.end();
  console.log(`Sent a response : ${responseMessage}`);
});
app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);

function updateTime() {
  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate(),
    time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
    dateTime = date + " " + time;
  return dateTime;
}
