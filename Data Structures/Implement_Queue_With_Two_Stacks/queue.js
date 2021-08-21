function Stack() {
    const stack = [];
    return {
        pop() {
            return stack.pop() || null;
        },
        push(e) {
            return stack.push(e);
        },
        isEmpty() {
            return stack.length === 0;
        },
        peek() {
            return stack[stack.length - 1];
        }
    };
}

function Queue() {
    const stack = new Stack();
    const backupStack = new Stack();
    const addAll = (toStack, fromStack) => {
        while (!fromStack.isEmpty()) {
            toStack.push(fromStack.pop());
        }
    };
    return {
        poll() {
            addAll(backupStack, stack);
            const value = backupStack.pop();
            addAll(stack, backupStack);
            return value;
        },
        offer(e) {
            return stack.push(e);
        },
        peek() {
            addAll(backupStack, stack);
            const value = backupStack.peek();
            addAll(stack, backupStack);
            return value;
        },
        isEmpty() {
            return stack.isEmpty();
        }
    };
}

function weave(queue1, queue2) {
    const queue3 = new Queue();
    while (!queue1.isEmpty() || !queue2.isEmpty()) {
        if (!queue1.isEmpty()) {
            queue3.offer(queue1.poll());
        }
        if (!queue2.isEmpty()) {
            queue3.offer(queue2.poll());
        }
    }
    return queue3;
}

function testQueue() {

    const queue = new Queue();

    queue.offer(1);
    queue.offer(2);
    queue.offer(3);
    queue.offer(4);
    queue.offer(5);

    console.log(queue.poll());
    console.log(queue.poll());
    console.log(queue.poll());
    console.log(queue.poll());
    console.log(queue.poll());

}

testQueue();