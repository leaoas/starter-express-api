function configJson(req) {
    const host = req.headers.host; // It can be heroku or ngrok host

    // key and applicationExtensionKey will be added automatically. Checked
    return {
        "workflowApiVersion": "1.1",
        "metaData": {
          "icon": "images/icon.png",
          "category": "message"
        },
        "type": "REST",
        "lang": {
          "en-US": {
            "name": "Test Custom Activity (v1.1)",
            "description": "An example custom activity."
          }
        },
        "arguments": {
          "execute": {
            "inArguments": [],
            "outArguments": [],
            "url": "https://thoughtful-lime-scorpion.cyclic.app/api/execute"
          }
        },
        "configurationArguments": {
          "applicationExtensionKey": "4fea0a11-3ef2-437d-af35-f2064b9e785d",
          "publish": {
            "url": "https://thoughtful-lime-scorpion.cyclic.app/api/publish"
          },
          "validate": {
            "url": "https://thoughtful-lime-scorpion.cyclic.app/api/validate"
          },
        },
        "wizardSteps": [
            { "label": "Step 1", "key": "step1" },
            { "label": "Step 2", "key": "step2" },
            { "label": "Step 3", "key": "step3" },
            { "label": "Step 4", "key": "step4", "active": false }
        ],
        "userInterfaces": {
          "configModal": {
            "height": 200,
            "width": 300,
            "fullscreen": true
          }
        },
        "schema": {
          "arguments": {
            "execute": {
              "inArguments": [],
              "outArguments": []
            }
          }
        }
    };
}
