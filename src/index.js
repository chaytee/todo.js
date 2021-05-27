const onClickAdd = () => {
  const inputText = document.getElementById("add-txt").value;
  //add-btnを押すと初期化
  document.getElementById("add-txt").value = "";

  //liタグ生成
  const li = document.createElement("li");

  //ｐタグ生成
  const todoName = document.createElement("p");
  todoName.className = "todo-name";

  //div生成list-row
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグの子要素に各要素(div.list-row)を設定
  //その中にpタグを作成しinputTextを入れる
  li.appendChild(div);
  div.appendChild(todoName);
  todoName.innerHTML = inputText;

  //buttnタグ(完了)生成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";

  //完了ボタン押したら
  completeBtn.addEventListener("click", () => {
    //押された完了ボタンの親の親タグ(li) を未完了リストから削除
    deleatFromIncompleateList(deleteBtn.parentNode.parentNode);

    //完了リストに追加する要素 div.list-low）
    const addTarget = completeBtn.parentNode;

    //liタグ生成
    const addli = document.createElement("li");
    addli.appendChild(addTarget);

    //todo内容テキストを取得
    const text = addTarget.firstElementChild.innerHTML;

    //addTarget初期化
    addTarget.textContent = null;

    //pタグの生成
    const todoTitle = document.createElement("p");
    addTarget.appendChild(todoTitle);
    todoTitle.innerHTML = text;

    //戻すボタン
    const backBtn = document.createElement("button");
    backBtn.innerHTML = "戻す";
    addTarget.appendChild(backBtn);

    //戻すボタンを押したら
    backBtn.addEventListener("click", () => {
      const deleteTarget = backBtn.parentNode.parentNode;
      //押された戻すボタンの親の親タグ(li) を完了リストから削除
      document.getElementById("compleate-list").removeChild(deleteTarget);
      //テキスト取得
      const text = backBtn.parentNode.firstElementChild.innerHTML;
      console.log(text);
    });
    //完了リストに追加
    document.getElementById("compleate-list").appendChild(addli);
  });

  //buttnタグ（削除）生成
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";

  //削除ボタン押したら
  deleteBtn.addEventListener("click", () => {
    //押された削除ボタンの親の親タグ(li) を未完了リストから削除
    deleatFromIncompleateList(deleteBtn.parentNode.parentNode);
  });

  //未完了リストから指定の要素を削除(共通関数)
  const deleatFromIncompleateList = (target) => {
    document.getElementById("incompleate-list").removeChild(target);
  };

  //未完了リストに追加する（共通関数）
  const createIncompleateList = (text) => {};

  //div(list-row)の子要素に下記を追加
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);

  //未完了のリストに追加
  document.getElementById("incompleate-list").appendChild(li);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
