import express from 'express';
// import { dirname, join } from 'path';

const app = express();
// let filepath = join(dirname,'../../frontend/build/');

// app.use(express.static(filepath));

app.get('*',(req,res)=>{
    res.contentType('text/plain');
    res.statusCode = 200;
    res.send("response")
}) 

/////
const port = process.env.PORT||3001;
app.listen(port, function() {
	console.log(`server running on port ${port}`);
});