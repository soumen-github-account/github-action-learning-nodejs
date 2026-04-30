import express from "express"

const app = express();
const PORT = process.env.PORT ?? 8000

app.get('/', (req, res)=>{
    return res.json({msg: "Hello from the server"})
})

// app.get("/", (req, res) => {
//   res.send(Hell); // ❌ undefined variable
// });

app.listen(PORT, ()=>{
    console.log(`server is running on port : ${PORT}`);
})

