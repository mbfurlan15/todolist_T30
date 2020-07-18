const express = require("express")
let app = express();
app.use(express.static('public'));
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port);