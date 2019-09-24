/*
This script takes a google form response on form submit and creates a trello card
in a known board (known board id) and inside of a known list (known list id)
*/
function getFromForm(e) {

  var formResponse = e.response;
  var itemResponses = formResponse.getItemResponses();  
  var items = formResponse.getItemResponses();
  
  var title = itemResponses[0].getResponse();
  var details = itemResponses[1].getResponse();
  var due = itemResponses[2].getResponse();

  
    var payload = {"name":title, 
                  "desc": details,
                  "pos":"top", 
                  "due": due, 
                  "idList":"xxxxxxxxxxxxxxxxxxxxxxxx",
                 };

   var url = 'https://api.trello.com/1/cards?key=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&token=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
   var options = {"method" : "post",
                  "payload" : payload};

   UrlFetchApp.fetch(url, options);
}
