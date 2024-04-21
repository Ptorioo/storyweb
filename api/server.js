const express = require("express");
const cors = require("cors");
const Anthropic = require("@anthropic-ai/sdk").default;
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

app.post("/generate-plot", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await anthropic.messages.create({
      max_tokens: 1024,
      model: "claude-3-opus-20240229",
      system:
        "Generate a story with four paragraphs based on user prompts. After each paragraph, include keywords describing the visual scene from the previous paragraph.",
      messages: [{ role: "user", content: prompt.toString() }],
    });

    const plot = response.content[0].text;
    res.json({ plot });
  } catch (error) {
    console.error("Error generating plot:", error);
    res.status(500).json({ error: "Failed to generate plot" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
