// получаем доступ к кнопке
let snow = document.getElementById("snow");
// когда кнопка нажата — находим активную вкладку и запускаем нужную функцию
snow.addEventListener("click", async () => {
  // получаем доступ к активной вкладке
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  window.location = "index.html";
  // выполняем скрипт
  //   chrome.scripting.executeScript({
  //     // скрипт будет выполняться во вкладке, которую нашли на предыдущем этапе
  //     target: { tabId: tab.id },
  //     // вызываем функцию, в которой лежит запуск снежинок
  //     function: snowFall(),
});
//   function snowFall() {

//   };
// });
