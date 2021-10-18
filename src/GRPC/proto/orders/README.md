# Nugget packaging the order protocols

- Install nuget.exe
  
- Change the version of the package to an upper one in the `orders-proto.nuspec` file

- Open shell in the `orders.proto` directory:
  
  - Execute `./nuget.exe pack`, a nuget packa should be created in the directory

  - Execute `./nuget.exe push -Source "PROEP-Packages" -ApiKey az PROEPOrdersProtobufDefinitions.version.nupkg` where `version` is the new version of the file
  