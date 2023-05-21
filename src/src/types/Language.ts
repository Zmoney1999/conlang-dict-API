// Define a class called "Language"
class Language {
    // Define properties for the class, including a string called "Name" that is initially an empty string,
    // a number called "Id" that is initially set to -1, and a string called "Type" that must be either "ConLang" or "ProtoLang".
    Name: string = "";
    Id: Number = -1;
    Type: "ConLang" | "ProtoLang" = "ConLang";

    // Define a constructor function for the Language class that takes in three parameters: "name", "id", and "type".
    // The function sets the Name, Id, and Type properties of the Language instance to the corresponding values passed as arguments.
    constructor(name: string, id: number, type: "ConLang" | "ProtoLang") {
        this.Name = name;
        this.Id = id;
        this.Type = type;
    }

};

// Export the Language class as the default export of the module.
export default Language;
