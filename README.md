# HTTP Status API

Want to see test your program to see how it responds to a specific HTTP status code without just mocking a response for some weird reason?

**BOOM!** Now you don't have to.

That's it, that's all it does. Don't expect much from this API, it's barely a step above a Hello, World! API. It's so simple I'm not even going to host it myself.

Clone the repo, run `npm run server [PORT]` and hit it at `http:localhost:[PORT]/[STATUS-CODE]`. That's it.

If no port is provided, it defaults to 6789, and if the status code is outside the range 100..999 it defaults to 999. That's the only error checking it does because it's that simple.
