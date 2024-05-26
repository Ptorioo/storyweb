const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post(
  "/save",
  upload.fields([
    { name: "image1" },
    { name: "image2" },
    { name: "image3" },
    { name: "image4" },
  ]),
  (req, res) => {
    try {
      const title = req.body.title;
      const images = [
        req.files.image1,
        req.files.image2,
        req.files.image3,
        req.files.image4,
      ]
        .flat()
        .filter(Boolean);
      const texts = [
        req.body.text1,
        req.body.text2,
        req.body.text3,
        req.body.text4,
      ];

      const story = {
        title: title,
        entries: images.map((image, index) => ({
          image: image.filename,
          text: texts[index],
        })),
        timestamp: new Date().toISOString(),
      };

      fs.readFile("log.json", (err, data) => {
        let logs = [];
        if (!err) {
          logs = JSON.parse(data);
        }
        logs.push(story);
        fs.writeFile("log.json", JSON.stringify(logs, null, 2), (err) => {
          if (err) {
            console.error("Error writing log file:", err);
          }
        });
      });

      res.status(200).json({
        message: "Story saved successfully",
        story: story,
      });
    } catch (error) {
      console.error("Error while saving story:", error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

app.get("/", (req, res) => {
  fs.readFile("log.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading log.json");
      return;
    }
    res.send(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
