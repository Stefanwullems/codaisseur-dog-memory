import request from "superagent";

export function getOverall(func) {
  request.get("//api.jsonbin.io/b/5bb67332a97c597b3c5f99a0").then(response => {
    func(response.body);
  });
}
