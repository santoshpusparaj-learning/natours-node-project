const express = require('express');

const app = express();

const PORT = 3000;

// Can use res.send() to send a response to the client
// app.get("/", (req,res) => {
//     res.send("Hello World !")
// })

app.get("/api/v1/tour", (req,res) => {
    res.status(200).json({
        status: "success",
        results : tours.length,
        data : {
            tours
        }

    })
})

app.post("/", (req,res) => {
    res.status(200).json({
        message: "Data received successfully!"
    })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});