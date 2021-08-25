package Data_Structures.Implement_Queue_With_Two_Stacks;

import java.util.LinkedList;

public class Queue<T> {

    private Stack<T> stack = new Stack<>();
    private Stack<T> backingStack = new Stack<>();

    public static void main(String... args) {

        Queue<Integer> queue = new Queue<>();

        queue.offer(1);
        queue.offer(2);
        queue.offer(3);
        queue.offer(4);
        queue.offer(5);
        queue.offer(6);

        while (!queue.isEmpty()) {
            System.out.println(queue.poll());
        }

    }

    private void addAll(Stack<T> destination, Stack<T> source) {
        while (!source.isEmpty()) {
            destination.push(source.pop());
        }
    }

    public void offer(T value) {
        stack.push(value);
    }

    public T poll() {
        addAll(backingStack, stack);
        T value = backingStack.pop();
        addAll(stack, backingStack);
        return value;
    }

    public T peek() {
        return stack.peek();
    }

    public boolean isEmpty() {
        return stack.isEmpty();
    }

}

class Stack<T> {
    private LinkedList<T> list = new LinkedList<T>();

    public void push(T value) {
        list.add(value);
    }

    public T pop() {
        return list.removeLast();
    }

    public boolean isEmpty() {
        return list.isEmpty();
    }

    public int size() {
        return list.size();
    }

    public T peek() {
        return list.getLast();
    }
}