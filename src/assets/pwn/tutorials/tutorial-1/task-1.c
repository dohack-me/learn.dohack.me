void task1() {
    char hackme[11] = "helloworld"; // "hackme" is an array of 11 characters

    printf("Your first task: Try changing hackme from \"helloworld\" to \"hacked\"!\n");
    dump(hackme); // Shows the contents of hackme

    printf("Enter your payload:\n");
    gets(hackme); // Sets "hackme" to whatever you input

    dump(hackme); // Shows the contents of hackme
}