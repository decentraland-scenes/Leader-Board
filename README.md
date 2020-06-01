# leader-board

This is a simple scene that implements a leader board.

![](screenshot/screenshot.png)

It includes a basic game of clicking a dog statues as many times as possible in 10 seconds. The score is then sent to a server.

The server is only partially implemented, so that you can handle the storage where you prefer.

As a placeholder, the scene uses sample data that's packed with the scene to display on the scoreboard.

The server implementation uses [Google Firebase](https://firebase.google.com/), we recommend using storage on that same server. You could also store the scores somewhere else, like an Amazon S3 server, or any other storage provider.
