const assert = require("power-assert");
const Todo = require("../../../models/Todo");

describe("Todo.createメソッドのテスト", () => {
  it("Todo.createはメソッドである", () => {
    assert.equal(typeof Todo.create === "function", true);
  });

  it("メソッド実行時、引数にtitleプロパティを含むオブジェクトがないとエラーになる", () => {
    const dataList = [{}, { body: "詳細文" }];
    dataList.forEach(data => {
      try {
        Todo.create(data);
        assert.fail();
      } catch (error) {
        assert.equal(error.message, "titleは必須です");
      }
    });
  });
  // 準正常系
  it("メソッド実行時、引数にbodyプロパティを含むオブジェクトがないとエラーになる", () => {
    try {
      Todo.create({ title: "タイトル" });
      assert.fail();
    } catch (error) {
      assert.equal(error.message, "bodyは必須です");
    }
  });

  // 正常系
});
