# slightly-shorter

Currently lives at
http://slightly-shorter.herokuapp.com

# URL Shortener API Microservice
## Example Creation Usage:
`http://slightly-shorter.herokuapp.com/new/https://www.google.com
http://slightly-shorter.herokuapp.com/new/https://foo.com:80`

## Example Creation Output:
`{ "original_url":"http://foo.com:80", "short_url":"https://slightly-shorter.herokuapp.com/8170"}`

## Usage
`https://slightly-shorter.herokuapp.com/1`
### will redirect to...
`http://www.amazon.com`
