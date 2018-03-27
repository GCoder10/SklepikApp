// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebase: {
      apiKey: 'AIzaSyDVuKIfeknL-msuguakxrjIwLO0ohj_o0Q',
      authDomain: 'sklepikapp-32f5b.firebaseapp.com',
      databaseURL: 'https://sklepikapp-32f5b.firebaseio.com/',
      storageBucket: 'gs://sklepikapp-32f5b.appspot.com',
  }
    /*
#WATSON
# Set CONVERSATION_URL to correct gateway
# US-South
CONVERSATION_URL=https://gateway.watsonplatform.net/conversation/api
# Germany
#CONVERSATION_URL=https://gateway-fra.watsonplatform.net/conversation/api
CONVERSATION_USERNAME=username
CONVERSATION_PASSWORD=password
WORKSPACE_ID=your_workspace_id

SLACK_TOKEN=your_slack_bot_token
*/
};

