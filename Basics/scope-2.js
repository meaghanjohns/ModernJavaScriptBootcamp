// Practice Exercise: Scope Tree

// Global
    // Local 
        // Local (name)
    // Local

// let name = "Meaghan";

if (true) {
    // let name = "Mike";
    if(true) {
        let name = "Jen";
        console.log(name);
    }
}

if (true) {
    console.log(name);
}