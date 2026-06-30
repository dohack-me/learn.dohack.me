void func4() {
    printf("Function 4 called")
}

void func3() {
    printf("Function 3 called")
    func4();
}

void func2() {
    printf("Function 2 called")
}

void func1() {
    printf("Function 1 called")
    func2();
    func3();
}

int main() {
    func1();
}