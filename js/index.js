var send = document.querySelector('.chatbox__input svg');
var body = document.querySelector('.chatbox__body')
var input = document.querySelector('input');

var messageController = (function(){

  var starkQuotes = [
    "Being happy all the time is kind of boring.",
    "Love is magic. The more we hide it, the more it shows; the more you suppress it, the more it grows.",
    "Born Free. . . . .Taxed to Death.",
    "Out of my mind. Back in five minutes.",
    "Love and stars are similar in one way. They keep you looking up every night.",
    "GENIUS, BILLIONAIRE, PLAYBOY, PHILANTHROPIST.",
    "I AM Vishvajeet"
  ];

  return {
    sendMessage: function(){
      var message_container = document.createElement("div");
      var message = `<img src="user2.png"/>
      <div class="message_text"> ${input.value} </div>`;
      message_container.className = "message sender";
      message_container.innerHTML = message;
      body.insertBefore(message_container, body.firstChild);
      input.value = "";
    },
    starkReply: function(){
      var reply = starkQuotes[Math.floor(Math.random() * starkQuotes.length-1) + 1];
      var message_container = document.createElement("div");
      var message = `<img src="vishva.jpg"/>
      <div class="message_text"> ${reply} </div>`;
      message_container.className = "message receive";
      message_container.innerHTML = message;
      body.insertBefore(message_container, body.firstChild);
    }
  }
})();

var init = (function(messageController){
  ['click', 'keyup'].forEach(event => document.addEventListener(event, handler));

  function handler(e){
      if(e.target == send  || e.keyCode == 13 ){
      messageController.sendMessage();
      setTimeout(messageController.starkReply, 1000);
    }
  }
})(messageController);


var today = new Date();
var year = today.getFullYear();

var copyright = document.getElementById("copyright");
copyright.innerHTML = '© Vishvajeet '+ year;
