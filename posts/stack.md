---
title: 'Explain "Stack" vs. "Queue"'
date: '2'
---


# | ELI5  
## Stack
Stack is just like a Pringles can. The last chip you placed, is the first chip to be removed. 
This concept is called **Last In First Out (LIFO)**.
![Pringles Can](/pringles.jpg)

## Queue
Queue is like a real-world queue at the cinema. The first customer to arrive gets to buy the tickets first. 
This is called **First In First Out (FIFO)**.

![Queue Example](/queue.png)


# | Data Structure Talk
## Stack
A `stack` is a one-ended linear data structure that models a real-world stack. 
Stacks have the following characteristics:  
1. Having **2** primary operations: 
- **push()** - adds to the top of the stack. 
- **pop()** - remove the most top element.
2. Only **1** pointer is used: `top`

![Stack Operations](/stack-operations.png)

### Where is it used
- Undo mechanism in text editors.
- Compiler syntax checking for matching brackets and braces.
- Support recursion by keeping track of previous function calls.
- Used to do Depth First Search (DFS) on a graph.

### Complexity Analysis

![Stack Time Complexity](/selection(2).png)

## Queue
A `queue` is a linear data structure that models a real-life queue. 
Queues have the following characteristics: 
1. Having **2** primary characteristics: 
- **enqueue()** = adding to the back of the queue.
- **dequeue()** = polling the front of the queue.
2. **Two** pointers are used:
- `front`
- `back/rear`

![Queue Operationns](/queue-operations.gif)

### Where is it used
- Model a real world queue.
- Efficiently keep track of the x most recently added elements.
- When you require "First Come First Serve" functionality.
- BFS graph traversal.

### Complexity Analysis

![Queue Time Complexity](/queue-time.png)

