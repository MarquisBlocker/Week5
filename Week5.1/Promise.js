// const myPromise = 
//   (new Promise(myExecutorFunc))
//   .then(handleFulfilledA,handleRejectedA)
//   .then(handleFulfilledB,handleRejectedB)
//   .then(handleFulfilledC,handleRejectedC);

// // or, perhaps better ...

// // const myPromise =
// //   (new Promise(myExecutorFunc))
// //   .then(handleFulfilledA)
// //   .then(handleFulfilledB)
// //   .then(handleFulfilledC)
// //   .catch(handleRejectedAny);

// <script>
// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }

async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200){
    await response.json()
    return response.json()
    
    }
    throw new Error(response.status);

}

loadJson('http://httpstat.us/500')
  .catch(alert); // Error: 500
