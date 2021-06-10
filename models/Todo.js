const todos = [];

let nextId = 1;

class Todo {
  constructor(title, body) {
    this.id = nextId++;
    this.title = title;
    this.body = body;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

for (let i = 0; i < 5; i++) {
  const index = i + 1;
  const todo = new Todo({
    title: "タイトル" + (i + 1),
    body: "ボディ" + index
  });

  todos.push(todo);
}

// メソッドを実装していく
module.exports = {
  findAll: () => {
    return todos.slice();
  },

  create: ({ title, body }) => {
    if (!title) {
      throw new Error("titleは必須です");
    }
    if (!body) {
      throw new Error("bodyは必須です");
    }
    const todo = new Todo({
      title: title,
      body: body
    });
    todos.push(todo);
    return todo;
  }
};

