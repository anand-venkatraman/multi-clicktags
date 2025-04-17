### Purpose
Purpose of this tool is to be able to see the original and modified creatives, with multi-clicktags.
And ensuring that the clicks have been modified correctly.

### Getting Started
- Clone this repo
- Run `npm install` on terminal (Requires nodejs/npm)
- Run `npm run start` on terminal
- The preview tool should get started on default port 3030.

### Folder structure
- The creatives need to be placed under the `creatives` folder.
- Under the `creatives` folder, create a new folder with a random name (lets call it creative-name).
- Under this `creative-name` folder, create `original` and `modified` folders.
- Under `original` folder, place the original creative assets received from client.
- Under `modified` folder, place the modified files.
- Both these folders should have the `index.html` file, that will the starting point of the creative.

### Previewing
- Start the preview process (refer `Getting Started` section)
- Open the browser, and go to `http://localhost:3000/`
- Enter the number of click tags on the creative and the name of the creative (`creative-name` from the previous section).
- Click the Preview button should enable you to see the original and modified creative.
- Ensure the original and modified creatives look and has the same animations.
- Ensure the clicks of the original and modified creatives behave the same way.
- Modified creative click should take you to a `landing page`, which will tell you where the click will eventually land.
- The above task will help confirm that the click tag is inserted correctly and the landing page is interpreted correctly.
