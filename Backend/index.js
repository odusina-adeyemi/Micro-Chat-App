// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors({origin: true}));


// app.post('authenticate', async(req, res) => {
//     const {username} = req.body;
//     return res.json({username:username, secret: 'sha256...' 
// });

// app.listen(3001);

// })

const express = require("express");
const cors = require("cors");
const {default:axios} = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
try {
    const r = await axios.put(  
        'https://api.chatengine.io/users/' ,
        { username: username, secret: username, first_name: username}, 
        {headers: {"private-key": "92a658c9-3643-4f19-9f9c-5eb9e20da4a1"}}
    )

    return res.status(r.status).json(r.data)
    
} catch (error) {
    return res.status(error.response.status).json(error.response.data)
} 

});


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

