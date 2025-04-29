const express = require('express');
const app = express();
const PORT = 3000;


function hello(name) {
  return "Hello World from " + name + "!";
}

app.get('/', (req, res) => {
res.json({"text": hello("Martin")});
});

if (require.main === module) {
app.listen(PORT, () => {
console.log(`App listening at http://localhost:${PORT}`);
});
}
module.exports = { app, hello };
