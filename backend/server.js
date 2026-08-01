const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const path = require("path");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.log("❌ Database Connection Failed");
        console.log(err);
    } else {
        console.log("✅ Database Connected Successfully");
    }
});

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Get All Districts
app.get("/districts", (req, res) => {
    const sql = "SELECT * FROM districts";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database Error",
                error: err
            });
        }

        res.json({
            success: true,
            data: results
        });
    });
});

// Start Server
const PORT = process.env.PORT || 3000;


app.get("/district/:id", (req, res) => {

    const sql = "SELECT * FROM districts WHERE id=?";

    db.query(sql,[req.params.id],(err,result)=>{

        if(err){
            return res.status(500).json(err);
        }

        res.json(result[0]);

    });

});

app.get("/places/:id",(req,res)=>{

    const sql="SELECT * FROM tourist_places WHERE district_id=?";

    db.query(sql,[req.params.id],(err,result)=>{

        if(err){
            return res.status(500).json(err);
        }

        res.json(result);

    });

});

app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});