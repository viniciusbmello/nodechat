import express from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Hello NLW #5"
    })
})

app.post("/", (request, response) => {
    return response.json({
        message: "Post in NLW #5"
    })
})

app.listen(3333, () => console.log("Server is running on port 3333..."))