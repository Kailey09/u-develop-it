const express = require('express');
const PORT  = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json);









app.listen(PORT, () => {
    console.log(`Serverrunning on port ${PORT}`);
})