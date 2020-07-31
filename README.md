# Leader Board

This is a simple scene that implements a leader board. It includes a basic game of clicking a dog statues as many times as possible in 10 seconds. The score is then sent to a server.


![](screenshot/screenshot.png)

This scene shows you:

- How to send HTTP requests to an API to store data in a permanent place, so others can then retrieve changes
- How to set up a server on Firebase that uses the Firestore database
- How to parse a JSON response from an API call
- How to arrange text fields into an in-world table
- How to parse a string so that it fits a maximum line length and maximum number of lines
- How to fetch the player's UserId

> TIP: As a placeholder, the scene can use sample data that's packed with the scene to display on the scoreboard.

The server implementation uses [Google Firebase](https://firebase.google.com/). See [this tutorial](https://decentraland.org/blog/tutorials/servers-part-2/) for setting up the server in a similar use case. You could also store the scores somewhere else, like an Amazon S3 server, or any other storage provider.

Bare in mind that this implementation doesn't implement any measures to counter cheating. Since new scores are added to the server via RESTful HTTP calls, these could be easily replicated with fake values.


## Try it out

**Install the CLI**

Download and install the Decentraland CLI by running the following command:

```bash
npm i -g decentraland
```

**Previewing the scene**

Download this example and navigate to its directory, then run:

```
$:  dcl start
```

Any dependencies are installed and then the CLI opens the scene in a new browser tab.

**Setting up the server**

The scene is set up to make use of an existing server. To launch your own server, we recommend you deploy what's in the `/server` folder to your own Firebase account, following the steps in [this tutorial](https://decentraland.org/blog/tutorials/servers-part-2/).

**Scene Usage**

Play the game by clicking franticly on the dog before the time runs out. If your score makes it into the high-scores it will be uploaded to the server and stored there. It will be retrieved next time you load the scene.

Learn more about how to build your own scenes in our [documentation](https://docs.decentraland.org/) site.

If something doesn’t work, please [file an issue](https://github.com/decentraland-scenes/Awesome-Repository/issues/new).

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
