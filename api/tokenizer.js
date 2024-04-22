function tokenize(data) {
  const sectionRegex = /\n?Keywords:|\n\n/g;
  const sections = data.split(sectionRegex).filter((element) => element);
  const paragraphs = [];

  if (sections.length == 8) {
    for (let i = 0; i < sections.length; i += 2) {
      const paragraph = sections[i].trim();
      const keywordsString = sections[i + 1].trim().slice(1, -1);
      const keywords = keywordsString.split(", ");

      paragraphs.push({ paragraph, keywords });
    }
  } else {
    for (let i = 0; i < 4; i++) {
      paragraphs.push({ paragraph: "", keywords: "" });
    }
  }

  return paragraphs;
}

module.exports = {
  tokenize: tokenize,
};
