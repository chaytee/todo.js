const onClickAdd = () => {
  const inputText = document.getElementById("add-txt").value;
  //add-btnを押すと初期化
  document.getElementById("add-txt").value = "";
  //未完了リストに追加するを実行
  createIncompleateList(inputText);
};

//------未完了リストから指定の要素を削除(共通関数)
const deleatFromIncompleateList = (target) => {
  document.getElementById("incompleate-list").removeChild(target);
};

//------未完了リストに追加する（共通関数）
//li>.list-low>p.todo-name+button*2
const createIncompleateList = (text) => {
  //liタグ生成
  const li = document.createElement("li");

  //div生成list-row
  const div = document.createElement("div");
  div.className = "list-row";

  //ｐタグ生成
  const todoName = document.createElement("p");
  todoName.className = "todo-name";

  //liタグの子要素に各要素(div.list-row)を設定
  //その中にpタグを作成しinputTextを入れる
  li.appendChild(div);
  div.appendChild(todoName);
  todoName.innerHTML = text;

  //buttnタグ(完了)生成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";

  //完了ボタン押したら--未完了から削除して完了リストへ
  completeBtn.addEventListener("click", () => {
    //押された完了ボタンの親の親タグ(li) を未完了リストから削除
    deleatFromIncompleateList(deleteBtn.parentNode.parentNode);

    //完了リストに追加する要素 div.list-low）を使いまわし
    const addTarget = completeBtn.parentNode;

    //liタグ生成
    const li = document.createElement("li");
    li.appendChild(addTarget);

    //todo内容テキストを取得(.todo-name)
    const text = addTarget.firstElementChild.innerHTML;

    //addTarget初期化
    addTarget.textContent = null;

    //pタグの生成
    const todoTitle = document.createElement("p");
    todoName.className = "todo-name";
    addTarget.appendChild(todoTitle);
    todoTitle.innerHTML = text;

    //戻すボタンの生成--完了リストから削除し未完了リストへ
    const backBtn = document.createElement("button");
    backBtn.innerHTML = "戻す";
    addTarget.appendChild(backBtn);

    //完了リストに追加--場所を明記
    document.getElementById("compleate-list").appendChild(li);

    //戻すボタンを押したら
    backBtn.addEventListener("click", () => {
      const deleteTarget = backBtn.parentNode.parentNode;
      //押された戻すボタンの親の親タグ(li) を完了リストから削除
      document.getElementById("compleate-list").removeChild(deleteTarget);
      //テキスト取得
      const text = backBtn.parentNode.firstElementChild.innerHTML;
      //未完了リストに追加の関数を実行
      createIncompleateList(text);
    });
  });

  //buttnタグ（削除）生成
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";

  //削除ボタン押したら
  deleteBtn.addEventListener("click", () => {
    //押された削除ボタンの親の親タグ(li) を未完了リストから削除
    deleatFromIncompleateList(deleteBtn.parentNode.parentNode);
  });

  //div(list-row)の子要素に下記を追加
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);

  //未完了のリストに追加
  document.getElementById("incompleate-list").appendChild(li);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
