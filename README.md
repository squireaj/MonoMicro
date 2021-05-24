Add a file called local-importmap.json to the root of the orchestrator application with the following contents

```
{
  "imports": {
    "orchestrator": "http://localhost:5000/main.js",
    "app-one": "http://localhost:8080/app.js",
    "app-two": "http://localhost:8081/app.js"
  }
}
```