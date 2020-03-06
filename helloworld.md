# Tutorial on NodeJS Hello World on GCP
<walkthrough-author name="Daniel King" tutorialName="NodeJS Hello World"></walkthrough-author>
<walkthrough-tutorial-duration duration=10></walkthrough-tutorial-duration>
                                                     
## Deploying NodeJS Hello World
We shall use the Google Cloud Functions to demonstrate how easy it is to get started with NodeJS and GCP.
<walkthrough-project-setup></walkthrough-project-setup>

### Prerequisites

 -  You have a Google Cloud Platform account and a Google Project (note the Google Project Id).
 -  You have enabled the Google Cloud Functions API for the above project. To do that, go to the Cloud Console, click on the main menu, then APIs and Services --> Library. Type in Cloud Functions API and select + enable it.

## Google Cloud Function deployment

Use the following `gcloud` commands to deploy our hello world application as shown below:

```bash
gcloud functions deploy hello-world --runtime nodejs8 --trigger-http --entry-point app
```
## Use npm to install dependencies

Now, let us install the Node.js library for Google Natural Language API via the command given below:

```bash
npm install --save @google-cloud/language
```

## Source Code

Let us go through the JavaScript file to understand the source code. 

Click here: `walkthrough editor-open-file "Google-Cloud-Shell-Walkthrough/index.js" "Open index.js"`

The code is taken from the official Github project present over [here](https://github.com/googleapis/nodejs-language).

## Run the application

We are ready to run our application and see the results. 

Run the `index.js` file via the command below:

```bash
node index.js
```

You should see both a score and magnitude provided for the sentence. You can change the sentence in the code file and try the API again, if you like. 

## Conclusion

<walkthrough-conclusion-trophy></walkthrough-conclusion-trophy>

Thanks for completing this tutorial. I hope you enjoyed the power of the Google Cloud Functions API

### Next Steps:

 - Check out more information on classes available [Google Cloud Classes](https://axalon.io/classes/) 



