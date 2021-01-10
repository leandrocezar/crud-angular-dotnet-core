# Web Api CRUD with .NET Core 5.0 

This project provides an Web Api to Create, Retrieve, Update and Delete users from database.



### Tech

The project use:

* [.NET Core] - Microsoft framework to develop Web Api (as well)!
* [Visual Studio Code] - awesome IDE for develop
* [SQL Server] - microsoft solution to databases
* [Nuget] - all dependencies of this project threre are here!

### Installation

Before start the WebApi we neeed to prepare the database that we wil use!

Open the project in your IDE (I use Visual Studio Code).
Change the `DefaultConnection` property in appsettings.Development.json with the infos of your SQL Server Instance:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=LMOREIRA;Database=challenge;Trusted_Connection=True;"
  },
  ...
}
```


Open a terminal and apply migrations to create all tables. (In this example I ude dotnet cli for do that)
```sh
$ cd Api
$ dotnet ef update
```
Start the server:
```sh
$ dotnet watch run 
```

The watch parameter will open the swagger page of the project:

![swagger](https://user-images.githubusercontent.com/2894734/104135872-5953b500-5371-11eb-8068-94d39b69834d.png)

### Todos

 - Refining the Error Handling process
 - Create and use modules

License
----

MIT

   [.NET Core]: <https://dotnet.microsoft.com/download>
   [Visual Studio Code]: <https://code.visualstudio.com/>
   [SQL Server]: <https://www.microsoft.com/pt-br/sql-server/sql-server-downloads/>
   [Nuget]: <https://www.nuget.org//>
