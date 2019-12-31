#Heroes admin panel backend
This is the backend of [Heroes Game Control Panel](https://github.com/alirezaft/HeroesAdminPanel). It's developed using node.js, Express and Socket.io. This project is NOT finished and you might encounter some bugs. It's a representation of the progress of our game's development.
##Installation
```
#Clone the repo
$ git clone https://github.com/alirezaft/HeroesAdminPanelBackend.git myproject
$ cd myproject

$npm install
```
##Important note
This project retrieves system status using [iostat](https://github.com/temsa/node-iostat). Hence in order to work properly you need to have [iostat package](http://sebastien.godard.pagesperso-orange.fr/man_iostat.html) installed on your server. After installing iostat on your server, it will work properly.