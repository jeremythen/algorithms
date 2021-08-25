
function Queue() {
    const queue = [];
    return {
        poll() {
            return queue.shift();
        },
        offer(e) {
            queue.push(e);
        },
        isEmpty() {
            return queue.length === 0;
        },
        peek() {
            return queue[0];
        },
        toString() {
            return `[${queue}]`;
        }
    }

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

function testWeave() {

    const queue1 = new Queue();
    const queue2 = new Queue();

    queue1.offer(1);
    queue1.offer(2);
    queue1.offer(3);

    queue2.offer(6);
    queue2.offer(7);
    queue2.offer(8);
    queue2.offer(9);
    queue2.offer(10);

    const queue3 = weave(queue1, queue2);

    console.log("queue3: ", queue3.toString());

    console.log("Printing queue 3 after weave");
    while (!queue3.isEmpty()) {
        console.log(queue3.poll());
    }

}

testWeave();