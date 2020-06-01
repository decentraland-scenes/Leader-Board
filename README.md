# leader-board

This is a simple scene that implements a leader board.

![](screenshot/screenshot.png)

The scene includes a basic game of clicking a dog statue as many times as possible within 10 seconds. The score is then sent to a server for storage.

The server is only partially implemented, so that you can handle the storage where you prefer.

As a placeholder to display on the scoreboard, the scene uses sample data from a file that's packed with the scene.

The server implementation uses [Google Firebase](https://firebase.google.com/), we recommend using storage on that same server. You could also store the scores somewhere else, like an Amazon S3 server, or any other storage provider.
