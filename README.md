# Leader Board

This is a simple scene that implements a leader board.

![](screenshot/screenshot.png)

It includes a basic game of clicking a dog statues as many times as possible in 10 seconds. The score is then sent to a server.

As a placeholder, the scene can use sample data that's packed with the scene to display on the scoreboard.

The server implementation uses [Google Firebase](https://firebase.google.com/), we recommend using storage on that same server. You could also store the scores somewhere else, like an Amazon S3 server, or any other storage provider.

Bare in mind that this implementation doesn't implement any measures to counter cheating. Since new scores are added to the server via RESTful HTTP calls, these could be easily replicated with fake values.

**Install the CLI**

Download and install the Decentraland CLI by running the following command

```bash
npm i -g decentraland
```

For a more details, follow the steps in the [Installation guide](https://docs.decentraland.org/documentation/installation-guide/).

**Previewing the scene**

Once you've installed the CLI, download this example and navigate to its directory from your terminal or command prompt.

_from the scene directory:_

```
$:  dcl start
```

Any dependencies are installed and then the CLI will open the scene in a new browser tab automatically.

Learn more about how to build your own scenes in our [documentation](https://docs.decentraland.org/) site.

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
