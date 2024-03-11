function shout(str){
  return str.toUpperCase()
}

function whisper(str){
  return str.toLowerCase()
}

function logShout(str){
  console.log(str.toUpperCase())
}

function logWhisper(str){
  console.log(str.toLowerCase())
}

function sayHiToHeadphonedRoommate(str){
  if(str === str.toLowerCase()){
    return "I can't hear you!"
  }
  
  if(str === str.toUpperCase()){
    return "YES INDEED!"
  }

  if(str === "Let's have dinner together!"){
    return "I would love to!"
  }
}