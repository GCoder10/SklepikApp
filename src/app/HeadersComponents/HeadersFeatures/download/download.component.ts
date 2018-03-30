import { JsonService } from './../../../json/json.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Http, Response, ResponseOptions } from '@angular/http';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})


export class DownloadComponent implements OnInit {

backgroundImagePath: string;
dataOfDownloadedJson: any;
decision = '0';


  constructor(public jsonService: JsonService,
              public http: Http
  ) { }



  ngOnInit() {
    this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
  }



  onDownload() {

    this.jsonService.getJson();
    this.decision = '1';

  }



  onDownloadFile() {

    this.dataOfDownloadedJson = this.jsonService.newJsonObj;
    this.decision = '2';

    var blob = new Blob([ this.dataOfDownloadedJson ], { type : 'json' });

        var fileName = 'ALLdataOfWORKERS.json';
        var a = document.createElement('a');
        var fileURL = window.URL.createObjectURL(blob);
                a.href = fileURL;
                a.download = fileName;
                a.click();

  }



  onStartWatsonConversation() {
    var prompt = require('prompt-sync')();
    var ConversationV1 = require('watson-developer-cloud/conversation/v1');


// Set up Conversation service wrapper.
var conversation = new ConversationV1({
  username: '5881236b-859f-4c98-8e8b-21e29ece64ee', // replace with service username
  password: 'mnc1RMmQ6o6I', // replace with service password
  version_date: '2017-05-26'
});

var workspace_id = 'f2efe4e1-bb59-4c1b-abe7-b27384bbfb15'; // replace with workspace ID



// Start conversation with empty message.


// res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');

conversation.message({
  workspace_id: workspace_id
}, processResponse);
/*

            conversation.Response.Headers.Add("Access-Control-Allow-Origin", new[] { (string)context.Request.Headers['Origin'] });
            conversation.Response.Headers.Add('Access-Control-Allow-Headers', new[] { 'Origin, X-Requested-With, Content-Type, Accept, Authorization' });
            conversation.Response.Headers.Add('Access-Control-Allow-Methods', new[] { 'GET, POST, PUT, DELETE, OPTIONS' });
            conversation.Response.Headers.Add('Access-Control-Allow-Credentials', new[] { 'true' });
*/


// conversation.Response.Headers.Add.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');

// Process the conversation response.
function processResponse(err, response) {



  if (err) {
    console.error(err); // something went wrong
    return;
  }

  var endConversation = false;

  // Check for action flags.
  if (response.output.action === 'display_time') {
    // User asked what time it is, so we output the local system time.
    console.log('The current time is ' + new Date().toLocaleTimeString());
  } else if (response.output.action === 'end_conversation') {
    // User said goodbye, so we're done.
    console.log(response.output.text[0]);
    endConversation = true;
  } else {
    // Display the output from dialog, if any.
    if (response.output.text.length != 0) {
        console.log(response.output.text[0]);
    }
  }

  // If we're not done, prompt for the next round of input.
  if (!endConversation) {
    var newMessageFromUser = prompt('>> ');
    conversation.message({
      workspace_id: workspace_id,
      input: { text: newMessageFromUser },
      // Send back the context to maintain state.
      context : response.context,
    }, processResponse);
  }

}

  }


}
