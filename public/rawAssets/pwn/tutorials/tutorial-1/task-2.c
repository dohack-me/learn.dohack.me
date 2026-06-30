void task2() {
    char changeme[9] = "changeme"; // "changeme" is an array of 9 characters
    char hackme[7] = "hacked"; // "hackme" is an array of 7 characters

    printf("Your next task: Try changing changeme from \"changeme\" to \"pwnedlol\"!\n");
    printf("The arrows (\"vv\") denote what part is \"hackme\".\n");
    dump(hackme); // Shows the contents of hackme

    printf("Enter your payload:\n");
    gets(hackme); // Sets "hackme" to whatever you input

    dump(hackme); // Shows the contents of hackme
}