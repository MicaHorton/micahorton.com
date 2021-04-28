# JWT Tokens

- [x] on login submit, create token
- [x] store token as cookie (excellent this works)

- [ ] on admin route submit, send token
- [ ] if token ok, authorize. if not, redirect

- don't for get to set http only to true afterword



# Resources

CORS Package Docs
https://www.npmjs.com/package/cors

MERN Tutorial
https://www.youtube.com/watch?v=7CqJlxBYj-M&t=2437s

React Beginner Mistakes Tutorial
https://www.youtube.com/watch?v=oZbTqEmQpDo

React Responsive Github Repository
https://github.com/contra/react-responsive

How To Font Awesome
https://stackoverflow.com/questions/23116591/how-to-include-a-font-awesome-icon-in-reacts-render

Deploy with Google
https://dev.to/ryanmercadante/deploy-your-mern-stack-application-to-google-app-engine-2g2c

CreateError
https://github.com/axios/axios/issues/1414

Google Application Security
https://cloud.google.com/appengine/docs/standard/java/application-security

Another Deploy Tutorial 
https://www.youtube.com/watch?v=PnIjfte7284

Example
https://github.com/joaopedrodcf/blog-merns

Useful Cors Configuration Stuff
https://expressjs.com/en/resources/middleware/cors.html

Preflight
https://dev.to/effingkay/cors-preflighted-requests--options-method-3024

- I think preflight request is triggered because of allow-credentials header. so it is more or less fixed... yay?

How to JWS Verify & Protect Route
https://medium.com/@maison.moa/using-jwt-json-web-tokens-to-authorize-users-and-protect-api-routes-3e04a1453c3e



Deal with Multiple Profiles (maybe should put in package.json or can export AWS_PROFILE beforehand)

https://stackoverflow.com/questions/50832048/credential-not-load-in-claudiajs-hello-word-example-for-aws

Backend Example with Dompurify and Marked

https://github.com/WebDevSimplified/Markdown-Blog

Multiple AWS

https://stackoverflow.com/questions/50832048/credential-not-load-in-claudiajs-hello-word-example-for-aws

## Add To Resume

- foothill honors institute

## Solved Bugs

### API Notes

\- should be /latest for long url

\- but / for custom domain name

\- so problem is internal server error, not cors at this point

- CORS is working
  - solved bug #1: bcrypt package
  - solved bug #2: not logged in
  - why do problems keep disguising themselves as CORS. I should fix that
  - 502 internal serval error, not CORS. forbidden came from not using /latest. err message doesn't make sense not sure why.

### Nodemailer

- solved bug #3. request was ending before email could actually be sent. route /email like rest of stuff and use sendEmail as middleware
- use let for importing middleware not const