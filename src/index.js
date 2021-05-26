const onClickAdd = () => {
  const inputText = document.getElementById("add-txt").value;
  //add-btnを押すと初期化
  document.getElementById("add-txt").value = "";

  //liタグ生成
  const li = document.createElement("li");

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  div.innerHTML = inputText;

  //liタグの子要素に各要素(list-row)を設定
  li.appendChild(div);

  //buttnタグ(完了)生成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    alert("完了");
  });

  //buttnタグ（削除）生成
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    alert("完了");
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
