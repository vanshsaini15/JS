// create a promise and resolve it when button is clicked!
const promise = new Promise((resolve, reject) => {
  const resolveButton = document.createElement("button");
  resolveButton.textContent = "Resolve";
  document.body.appendChild(resolveButton);

  const rejectButton = document.createElement("button");
  rejectButton.textContent = "Reject";
  document.body.appendChild(rejectButton);

  resolveButton.onclick = () => {
    resolve("resolved");
    consumePromise();
  };
  rejectButton.onclick = () => {
    reject("rejected");
    consumePromise();
  };
});

//once the promise is either resolved or rejected, it cannot be resolved or rejected again. This is the expected behavior of promises in JavaScript.

promise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error));

const consumePromise = async () => {
  try {
    const response = await promise;
    console.log("response: ", response);
  } catch (error) {
    console.log("error: ", error);
  }
};

console.log(consumePromise());
consumePromise();

// Task1: Image Loading Utility
// Design and implement a JavaScript utility function called loadImage that:

// Takes a URL string as input
// Returns a Promise that resolves with the loaded image element
// Handles both successful image loading and potential loading errors
// Provides a clean, predictable way to load images asynchronously

// Requirements:

// The function should create an Image object
// Resolve the Promise when the image successfully loads
// Reject the Promise if the image fails to load
// Include appropriate error handling
// Demonstrate understanding of Promise lifecycle and image loading mechanics

// Evaluation Criteria:

// Correct Promise implementation
// Proper error handling
// Clean and concise code
// Handling of different image loading scenarios

const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image(); //create html img tag
    image.onload = () => {
      resolve(image);
    };

    image.onerror = () => {
      reject(new Error(`Failed to load image from ${url}`));
    };
    image.src = url;
  });
};

loadImage("https://www.google.com/logos/2024/moon/novr2/cta.png")
  .then((img) => document.body.appendChild(img))
  .catch((error) => {
    console.log("error: ", error);
  });
