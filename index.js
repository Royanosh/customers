import express from 'express';

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).json(
    { 
      'type': 'success',
      'data': 'Hello from cusomters' 
    }
    )
})

app.listen(6001, () => {
  console.log("Customers server is running on port number: 6001")
})
