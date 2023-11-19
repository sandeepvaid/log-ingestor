# Log-Ingestor

Log-ingestor is an express-based server that is responsible for ingesting logs of high volumes. Right now we are using indexing to make our server fast to give quick response.

- Right now we are accepting the following types of log requests.
```
{
	"level": "error",
	"message": "Failed to connect to DB",
    "resourceId": "server-1234",
	"timestamp": "2023-09-15T08:00:00Z",
	"traceId": "abc-xyz-123",
    "spanId": "span-456",
    "commit": "5e5342f",
    "metadata": {
        "parentResourceId": "server-0987"
    }
}
```
- You can query your logs with the help of full-text-based searching.
- Log-ingestor can work for both single-field queries and multiple-field queries. Try the following example:-
- Single-field query.
```
Find all logs with the level set to "error".
``` 
- Multiple-field query.
```
Find all logs with the level set to "error" and parentResourceId is "server-0987". 
```
##### Note:- ``` In case of multiple-field query you have to follow a standard where in the search you need to pass the fieldName and then its value in the double quote and then you need to pass next keyword and its value ``` 
## Installation
- Simply clone the repository and I am using node version [18].

- Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install Log-Ingestor.

```bash
npm install 
```

## Usage

```javascript
nodemon index.js
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
