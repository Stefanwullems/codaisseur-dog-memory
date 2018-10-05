import request from "superagent";

export function getOverall(func) {
  request
    .get("https://api.jsonbin.io/b/5bb722f6a97c597b3c600828/latest")
    .then(response => {
      func(response.body);
    });
}

export function addToOverall(obj) {
  request
    .get("https://api.jsonbin.io/b/5bb722f6a97c597b3c600828/latest")
    .then(({ body }) => {
      request
        .put("https://api.jsonbin.io/b/5bb722f6a97c597b3c600828")
        .set("Content-type", "application/json")
        .set("versioning", "false")
        .send({
          "0": {
            key: "correct",
            value: body[0].value + obj[0].value
          },
          "1": {
            key: "incorrect",
            value: body[1].value + obj[1].value
          }
        })
        .then(console.log);
    });
}
