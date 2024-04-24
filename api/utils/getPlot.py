from utils.tokenizer import tokenize

def getPlot(client, prompt):
    response = client.messages.create(
        model="claude-3-opus-20240229",
        max_tokens=1000,
        temperature=0.0,
        system="Generate a story with four paragraphs based on user prompts. After each paragraph, include keywords describing the visual scene from the previous paragraph in the format of Keywords: [keyword1, keyword2], so that it could be treated as the prompt for another picture-generating AI.",
        messages=[
            {"role": "user", "content": str(prompt)}
        ]
    )

    plot = tokenize(response.content[0].text)
    return plot