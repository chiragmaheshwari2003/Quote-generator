  let ele = document.getElementById("quote");

  function generateQuote(){
      console.log('clicked');
  fetch('https://api.quotable.io/random?maxLength=110')
  .then((response) => 
    response.json()
  ).then( (quoteObject) =>{
    ele.innerHTML = `"${quoteObject.content}"`;
    })
    
  .catch((error) => {

    console.log(error);
  });
  }
  
