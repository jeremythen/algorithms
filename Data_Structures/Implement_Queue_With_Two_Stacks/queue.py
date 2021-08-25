

def add_all(destination, source):
    while not source.is_empty():
        destination.push(source.pop())


class Queue:

    def __init__(self):
        self.stack = Stack()
        self.backing_stack = Stack()

    def offer(self, value):
        self.stack.push(value)

    def poll(self):
        add_all(self.backing_stack, self.stack)
        value = self.backing_stack.pop()
        add_all(self.stack, self.backing_stack)
        return value

    def is_empty(self):
        return self.stack.is_empty()


class Stack:

    def __init__(self):
        self.list = []

    def push(self, value):
        self.list.append(value)

    def pop(self):
        return self.list.pop()

    def is_empty(self):
        return len(self.list) == 0


queue = Queue()

queue.offer(1)
queue.offer(2)
queue.offer(3)
queue.offer(4)
queue.offer(5)
queue.offer(6)

while not queue.is_empty():
    print(queue.poll())
