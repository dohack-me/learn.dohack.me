int main(){
  char buf[100];
  gets(buf);
  ((void (*)()) buf)();
}