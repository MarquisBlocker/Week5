function getRandomNumber() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const rand = Math.floor(Math.random() * 1000);
        console.log(rand);
        resolve(rand);
      }, 500);
    });
  }
 
  async function newFunction() {
    let random = await getRandomNumber();
    console.log("Your number is: " + random);
  }
 
  newFunction();
 