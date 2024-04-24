FROM python:3.11-slim
WORKDIR /app
COPY . .
RUN pip3 install --default-timeout=100 -r requirements.txt
EXPOSE 5000
CMD ["python3", "main.py"]