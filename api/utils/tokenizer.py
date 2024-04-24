import re

def tokenize(data):
    section_regex = r"\n?Keywords:|\n\n"
    sections = re.split(section_regex, data)
    sections = [section.strip() for section in sections if section.strip()]

    paragraphs = []

    if len(sections) == 8:
        for i in range(0, len(sections), 2):
            paragraph = sections[i].strip()
            keywords_string = sections[i + 1].strip()[1:-1]
            keywords = keywords_string.split(", ")
            paragraphs.append({"paragraph": paragraph, "keywords": keywords})
    else:
        for _ in range(4):
            paragraphs.append({"paragraph": "", "keywords": ""})

    return paragraphs

