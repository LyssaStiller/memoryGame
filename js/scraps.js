function addToOpen(card) {


  if(openCards.length <=1){
      openCards.push(card)
  }

  if(openCards.length === 2){
      lookForMatch()

  }
}

function lookForMatch(){

  console.log("check it again", openCards)
      // if(openCards[1].firstChild.className === openCards[0].firstChild.className){
      //     matchedCards.push(openCards[0], openCards[1])
      //     setMatch()
      // }
      // else{
      //     removeFromOpen()
      // }
//  }

}
