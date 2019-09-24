/* This script sends a slack message composed of google form responses */
/* e is an event. the event here is a form submit. this event is only enabled when the script is bound to a form. Therefore, you need to have a trigger created with an onFormSubmit event and it triggers the handleSubmit() function.
*/

/*this function takes the event e (which is a google form in this case), accesses its responses and sends the the responses as a slack message to a specified channel through the postResponse funciton*/
function handleSubmit(e) {  

  var formResponse = e.response;
  var itemResponses = formResponse.getItemResponses();  
  var items = formResponse.getItemResponses();
  postResponse(items); 
}

function postResponse(items) {
  /*
 each array index in "items"  corresponds to an answer by the order the question was asked.
NOTE: an alternative way of saving responses in the message variable is to loop through the items array and concatenate responses to the message variable one at a time
  */
  var response1 = items[0].getResponse();
  var response2 = items[1].getResponse();
  var response3 = items[2].getResponse();
//etc. however many questions you have in your form
   
   var message = "first response: " + response1 + "\nsecond response: " + response2 + "\nthird response: " + response3;
    
  var payload = {
    "text" : message,  
  };
  
  
  //put your slack app incoming webhook url below.
  var url = "https://hooks.slack.com/services/xxxxxxxx/xxxxxxxxx/xxxxxxxxxxxxxxxxxxxxxx"

  var options = {
    "method" : "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload),
  };
  var response = UrlFetchApp.fetch(url, options);
}
