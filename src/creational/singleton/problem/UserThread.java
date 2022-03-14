// 경합 조건: 메모리와 같은 동일한 자원을 2개 이상의 스레드가 이요하려고 경합하려는 현상
package creational.singleton.problem;

public class UserThread extends Thread {
  public UserThread(String name) {
    super(name);
  }

  public void run() {
    Printer printer = Printer.getPrinter();
    printer.print(Thread.currentThread().getName() + printer.toString());
  }
}