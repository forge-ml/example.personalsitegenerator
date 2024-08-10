# AI-Powered Personal Site Generator

This application automatically generates personal websites from profile screenshots using AI image analysis.

## How It Works

1. User uploads a profile screenshot
2. Forge AI analyzes the image and extracts relevant information
3. Extracted data is used to generate a personalized website

## Why use Forge?

In this project, Forge acts a middle man between the user and ChatGPT. Forge allows us as the user to specify what data we want to extract from the image rather than ChatGPT returning a generic response. This means we can use this image analysis in a reliable and repeatable way - allowing us to generate personal websites from profile screenshots.

## Try it for yourself

git clone https://github.com/forge-ml/example.personalsitegenerator.git

add your forge key, aws key, aws bucket, aws region and aws secret key to the .env file

npm i

npm run dev
