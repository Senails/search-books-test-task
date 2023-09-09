import express from 'express';
import { dirname, join } from 'path';

const app = express();
console.log(111);
let filepath = join(dirname("./"),'../build/');
console.log(filepath);

app.use(express.static(filepath));

app.get('*',(req,res)=>{
    res.contentType('text/html');
    res.statusCode = 200;
    res.sendFile(filepath+"index.html");
    // res.send("response")
}) 

/////
const port = process.env.PORT||3001;
app.listen(port, function() {
	console.log(`server running on port ${port}`);
});