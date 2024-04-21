const express = require("express");
const cors = require("cors");
const Anthropic = require("@anthropic-ai/sdk").default;
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

function tokenize(data) {
  const sectionRegex = /\n?Keywords:|\n\n/g;
  const sections = data.split(sectionRegex).filter((element) => element);
  const paragraphs = [];

  for (let i = 0; i < sections.length; i += 2) {
    const paragraph = sections[i].trim();
    const keywordsString = sections[i + 1].trim().slice(1, -1);
    const keywords = keywordsString.split(", ");

    paragraphs.push({ paragraph, keywords });
  }

  return paragraphs;
}

app.post("/generate-plot", async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await anthropic.messages.create({
      max_tokens: 1024,
      model: "claude-3-opus-20240229",
      system:
        "Generate a story with four paragraphs based on user prompts. After each paragraph, include keywords describing the visual scene from the previous paragraph in the format of Keywords: [keyword1, keyword2], so that it could be treated as the prompt for another picture-generating AI.",
      messages: [{ role: "user", content: prompt.toString() }],
    });

    const plot = tokenize(response.content[0].text);
    res.json({ plot: plot });
  } catch (error) {
    console.error("Error generating plot:", error);
    res.status(500).json({ error: "Failed to generate plot" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
