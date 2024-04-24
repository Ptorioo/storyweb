def getImage(plot, pipe):

    images = []

    for p in plot:
        keywords = p["keywords"]
        prompt = ", ".join(keywords)
        images.append(pipe(prompt).images[0])
    
    for i, image in enumerate(images):
        image.save(f"image_{i}.png")

    return