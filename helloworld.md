# Tutorial on NodeJS Hello World on GCP
<walkthrough-author name="Daniel King">Author name</walkthrough-author>
<walkthrough-author tutorialName="NodeJS Hello World">Tutorial name here</walkthrough-author>
<walkthrough-tutorial-duration duration=10></walkthrough-tutorial-duration>
<walkthrough-footnote>Footnote text here</walkthrough-footnote>

                                                     
## Deploying NodeJS Hello World
We shall use the Google Cloud Functions to demonstrate how easy it is to get started with NodeJS and GCP.
<walkthrough-project-setup></walkthrough-project-setup>

### Prerequisites

 -  You have a Google Cloud Platform account and a Google Project (note the Google Project Id).
 -  You have enabled the Google Cloud Functions API for the above project. To do that, go to the Cloud Console, click on the main menu, then APIs and Services --> Library. Type in Cloud Functions API and select + enable it.

```bash
gcloud config set project {{project-id}}
```
## Install NPM

### Initialize npm

Now, let us install the Node.js library for Google Natural Language API via the command given below:

```bash
npm init -y
```

### Use npm to install dependencies

Now, let us install the Node.js library for Google Natural Language API via the command given below:

```bash
npm install --save express
```

## Source Code

Let us go through the JavaScript file to understand the source code. 

Click here: <walkthrough-editor-open-file filePath="Google-Cloud-Shell-Walkthrough/index.js">Click</walkthrough-editor-open-file>

<walkthrough-editor-select-line filePath="Google-Cloud-Shell-Walkthrough/index.js" startLine=4 endline=7>wow</walkthrough-editor-select-line>


The code is taken from the official Express project present over [here](https://expressjs.com/en/starter/hello-world.html).

## Run the application

We are ready to run our application and see the results. 

Run the `index.js` file via the command below:

```bash
node index.js
```

<walkthrough-spotlight-pointer spotlightId=devshell-web-preview-button>Open the web page</walkthrough-spotlight-pointer>

You should see a "Hello World from Google" web page.

## Google Cloud Function deployment

Use the following `gcloud` commands to deploy our hello world application as shown below:

```bash
gcloud functions deploy hello-world --runtime nodejs8 --trigger-http --entry-point app
```

## Conclusion

<walkthrough-conclusion-trophy></walkthrough-conclusion-trophy>

Thanks for completing this tutorial. I hope you enjoyed the power of the Google Cloud Functions API

### Next Steps:

 - Check out more information on classes available [Google Cloud Classes](https://axalon.io/classes/) 



