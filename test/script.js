const url_1 = "../theme_1/theme_1.json";
async function fetchData_1(url_1) {
  try {
    const response = await fetch(url_1);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`error -> ${error}`);
  }
}
const url_2 = "../theme_2/theme_2.json";
async function fetchData_2(url_2) {
  try {
    const response = await fetch(url_2);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`error -> ${error}`);
  }
}
const url_3 = "../theme_3/theme_3.json";
async function fetchData_3(url_3) {
  try {
    const response = await fetch(url_3);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`error -> ${error}`);
  }
}
const url_4 = "../theme_4/theme_4.json";
async function fetchData_4(url_4) {
  try {
    const response = await fetch(url_4);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`error -> ${error}`);
  }
}
const url_5 = "../theme_5/theme_5.json";
async function fetchData_5(url_5) {
  try {
    const response = await fetch(url_5);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`error -> ${error}`);
  }
}
const url_6 = "../theme_6/theme_6.json";
async function fetchData_6(url_6) {
  try {
    const response = await fetch(url_6);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`error -> ${error}`);
  }
}
const url_7 = "../theme_7/theme_7.json";
async function fetchData_7(url_7) {
  try {
    const response = await fetch(url_7);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`error -> ${error}`);
  }
}
const url_8 = "../theme_8/theme_8.json";
async function fetchData_8(url_8) {
  try {
    const response = await fetch(url_8);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`error -> ${error}`);
  }
}
const url_9 = "../theme_9/theme_9.json";
async function fetchData_9(url_9) {
  try {
    const response = await fetch(url_9);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`error -> ${error}`);
  }
}
function Shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
let arrayOld = [];
let errorsAnswers = [];
let j = 0;
const dataLists_1 = await fetchData_1(url_1);
const dataLists_2 = await fetchData_2(url_2);
const dataLists_3 = await fetchData_3(url_3);
const dataLists_4 = await fetchData_4(url_4);
const dataLists_5 = await fetchData_5(url_5);
const dataLists_6 = await fetchData_6(url_6);
const dataLists_7 = await fetchData_7(url_7);
const dataLists_8 = await fetchData_8(url_8);
const dataLists_9 = await fetchData_9(url_9);

let i_0 = Math.floor(Math.random() * dataLists_1.length);
let i_1 = Math.floor(Math.random() * dataLists_1.length);
let i_2 = Math.floor(Math.random() * dataLists_2.length);
let i_3 = Math.floor(Math.random() * dataLists_3.length);
let i_4 = Math.floor(Math.random() * dataLists_4.length);
let i_5 = Math.floor(Math.random() * dataLists_5.length);
let i_6 = Math.floor(Math.random() * dataLists_6.length);
let i_7 = Math.floor(Math.random() * dataLists_7.length);
let i_8 = Math.floor(Math.random() * dataLists_8.length);
let i_9 = Math.floor(Math.random() * dataLists_9.length);
let listSurvey = [];
let answerList = [];
let dataLists = [
  dataLists_1[i_1],
  dataLists_2[i_2],
  dataLists_3[i_3],
  dataLists_4[i_4],
  dataLists_1[i_0],
  dataLists_5[i_5],
  dataLists_6[i_6],
  dataLists_7[i_7],
  dataLists_8[i_8],
  dataLists_9[i_9],
];
for (let i = 0; i < dataLists.length; i++) {
  arrayOld[j] = i;
  j++;
}

const mainTasks = document.querySelector(".main__tasks");
j = 0;
errorsAnswers = Shuffle(arrayOld);
let i = errorsAnswers[j];
checkTheme();
backLight();
function checkTheme() {
  const mainInsertEl = document.querySelector(".main__insert");
  if (mainInsertEl) {
    mainInsertEl.remove();
  }
  const mainInsert = document.createElement("div");
  mainInsert.classList.add("main__insert");
  mainTasks.insertAdjacentElement("beforeend", mainInsert);
  mainInsert.insertAdjacentHTML(
    "beforeend",
    `    
  <div class="main__question"><p>${dataLists[i].question}</p></div>
`
  );
  const numberCount = [1, 2, 3, 4, 5, 6];
  let displayEl = Shuffle(numberCount);
  displayEl.forEach((element) => {
    if (element === 1) {
      if (dataLists[i].answer1) {
        if (dataLists[i].check) {
          mainInsert.insertAdjacentHTML(
            "beforeend",
            `
    <div class="main__radio_1">
    <input type="checkbox" name="answer" id="answer_01" />
   <label for="answer_01"
     ><div class="main__answer_1 main__radio_joint">
       <p>${dataLists[i].answer1}</p>
     </div></label>
    `
          );
        } else {
          mainInsert.insertAdjacentHTML(
            "beforeend",
            `
  <div class="main__radio_1">
  <input type="radio" name="answer" id="answer_01" />
 <label for="answer_01"
   ><div class="main__answer_1 main__radio_joint">
     <p>${dataLists[i].answer1}</p>
   </div></label>
  `
          );
        }
      }
    }
    if (element === 2) {
      if (dataLists[i].answer2) {
        if (dataLists[i].check) {
          mainInsert.insertAdjacentHTML(
            "beforeend",
            `
    </div>
    <div class="main__radio_2">  
    <input type="checkbox" name="answer" id="answer_02" />
    <label for="answer_02"
      ><div class="main__answer_2 main__radio_joint">
        <p>${dataLists[i].answer2}</p>
      </div></label>
  
    `
          );
        } else {
          mainInsert.insertAdjacentHTML(
            "beforeend",
            `
  </div>
  <div class="main__radio_2">  
  <input type="radio" name="answer" id="answer_02" />
  <label for="answer_02"
    ><div class="main__answer_2 main__radio_joint">
      <p>${dataLists[i].answer2}</p>
    </div></label>

  `
          );
        }
      }
    }
    if (element === 3) {
      if (dataLists[i].answer3) {
        if (dataLists[i].check) {
          mainInsert.insertAdjacentHTML(
            "beforeend",
            `
      </div>
      <div class="main__radio_3">
       <input type="checkbox" name="answer" id="answer_03" />
      <label for="answer_03"
        ><div class="main__answer_3 main__radio_joint">
          <p>${dataLists[i].answer3}</p>
        </div></label>  
      `
          );
        } else {
          mainInsert.insertAdjacentHTML(
            "beforeend",
            `
      </div>
      <div class="main__radio_3">
       <input type="radio" name="answer" id="answer_03" />
      <label for="answer_03"
        ><div class="main__answer_3 main__radio_joint">
          <p>${dataLists[i].answer3}</p>
        </div></label>  
      `
          );
        }
      }
    }
    if (element === 4) {
      if (dataLists[i].answer4) {
        if (dataLists[i].check) {
          mainInsert.insertAdjacentHTML(
            "beforeend",
            ` </div>
        <div class="main__radio_4">
         <input type="checkbox" name="answer" id="answer_04" />
        <label for="answer_04"
          ><div class="main__answer_4 main__radio_joint">
            <p>${dataLists[i].answer4}</p>
          </div></label>
        </div>       
        `
          );
        } else {
          mainInsert.insertAdjacentHTML(
            "beforeend",
            ` </div>
      <div class="main__radio_4">
       <input type="radio" name="answer" id="answer_04" />
      <label for="answer_04"
        ><div class="main__answer_4 main__radio_joint">
          <p>${dataLists[i].answer4}</p>
        </div></label>
      </div>       
      `
          );
        }
      }
    }
    if (element === 5) {
      if (dataLists[i].answer5) {
        if (dataLists[i].check) {
          mainInsert.insertAdjacentHTML(
            "beforeend",
            ` </div>
     <div class="main__radio_5">
      <input type="checkbox" name="answer" id="answer_05" />
     <label for="answer_05"
       ><div class="main__answer_5 main__radio_joint">
         <p>${dataLists[i].answer5}</p>
       </div></label>
     </div>       
     `
          );
        } else {
          mainInsert.insertAdjacentHTML(
            "beforeend",
            ` </div>
       <div class="main__radio_5">
        <input type="radio" name="answer" id="answer_05" />
       <label for="answer_05"
         ><div class="main__answer_5 main__radio_joint">
           <p>${dataLists[i].answer5}</p>
         </div></label>
       </div>       
       `
          );
        }
      }
    }
    if (element === 6) {
      if (dataLists[i].answer6) {
        if (dataLists[i].check) {
          mainInsert.insertAdjacentHTML(
            "beforeend",
            ` </div>
     <div class="main__radio_6">
      <input type="checkbox" name="answer" id="answer_06" />
     <label for="answer_06"
       ><div class="main__answer_6 main__radio_joint">
         <p>${dataLists[i].answer6}</p>
       </div></label>
     </div>       
     `
          );
        } else {
          mainInsert.insertAdjacentHTML(
            "beforeend",
            ` </div>
       <div class="main__radio_6">
        <input type="radio" name="answer" id="answer_06" />
       <label for="answer_06"
         ><div class="main__answer_6 main__radio_joint">
           <p>${dataLists[i].answer6}</p>
         </div></label>
       </div>       
       `
          );
        }
      }
    }
  });
  mainInsert.insertAdjacentHTML(
    "beforeend",
    ` <div class="buttuns">
     <button class="btnEl">Проверить</button>
    <button class="back_quest btnEl">Назад</button>  
    <button class="back btnEl">К списку тем</button>      

    </div>
   
    
    `
  );

  const checkBtnEl = document.querySelector(".btnEl");
  const backQuest = document.querySelector(".back_quest");
  const backBtnEl = document.querySelector(".back");
  checkBtnEl.addEventListener("click", () => {
    if (errorsAnswers.length >= j) {
      checkAnswer();
      backLight();
    }
    if (errorsAnswers.length == j) {
      alert("Завершить тест");
      resultTest(dataLists, listSurvey, answerList);
      return;
    }
  });
  backQuest.addEventListener("click", () => {
    if (j > 0) {
      j--;
      i = errorsAnswers[j];
      checkTheme();
    } else {
      alert("Вы достигли начала темы");
    }
  });
  backBtnEl.addEventListener("click", () => {
    window.location = "../index.html";
  });
}
function backLight() {
  const divMainAnswer1 = document.querySelector(".main__answer_1");
  const divMainAnswer2 = document.querySelector(".main__answer_2");
  const divMainAnswer3 = document.querySelector(".main__answer_3");
  const divMainAnswer4 = document.querySelector(".main__answer_4");
  const divMainAnswer5 = document.querySelector(".main__answer_5");
  if (divMainAnswer1) {
    divMainAnswer1.addEventListener("click", () => {
      if (dataLists[i].answer1) {
        divMainAnswer1.classList.add("main__color_check");
      }
      if (dataLists[i].answer2) {
        divMainAnswer2.classList.remove("main__color_check");
      }
      if (dataLists[i].answer3) {
        divMainAnswer3.classList.remove("main__color_check");
      }
      if (dataLists[i].answer4) {
        divMainAnswer4.classList.remove("main__color_check");
      }
      if (dataLists[i].answer5) {
        divMainAnswer5.classList.remove("main__color_check");
      }
    });
  }
  if (divMainAnswer2) {
    divMainAnswer2.addEventListener("click", () => {
      if (dataLists[i].answer1) {
        divMainAnswer1.classList.remove("main__color_check");
      }
      if (dataLists[i].answer2) {
        divMainAnswer2.classList.add("main__color_check");
      }
      if (dataLists[i].answer3) {
        divMainAnswer3.classList.remove("main__color_check");
      }
      if (dataLists[i].answer4) {
        divMainAnswer4.classList.remove("main__color_check");
      }
      if (dataLists[i].answer5) {
        divMainAnswer5.classList.remove("main__color_check");
      }
    });
  }
  if (divMainAnswer3) {
    divMainAnswer3.addEventListener("click", () => {
      if (dataLists[i].answer1) {
        divMainAnswer1.classList.remove("main__color_check");
      }
      if (dataLists[i].answer2) {
        divMainAnswer2.classList.remove("main__color_check");
      }
      if (dataLists[i].answer3) {
        divMainAnswer3.classList.add("main__color_check");
      }
      if (dataLists[i].answer4) {
        divMainAnswer4.classList.remove("main__color_check");
      }
      if (dataLists[i].answer5) {
        divMainAnswer5.classList.remove("main__color_check");
      }
    });
  }
  if (divMainAnswer4) {
    divMainAnswer4.addEventListener("click", () => {
      if (dataLists[i].answer1) {
        divMainAnswer1.classList.remove("main__color_check");
      }
      if (dataLists[i].answer2) {
        divMainAnswer2.classList.remove("main__color_check");
      }
      if (dataLists[i].answer3) {
        divMainAnswer3.classList.remove("main__color_check");
      }
      if (dataLists[i].answer4) {
        divMainAnswer4.classList.add("main__color_check");
      }
      if (dataLists[i].answer5) {
        divMainAnswer5.classList.remove("main__color_check");
      }
    });
  }

  if (divMainAnswer5) {
    divMainAnswer5.addEventListener("click", () => {
      if (dataLists[i].answer1) {
        divMainAnswer1.classList.remove("main__color_check");
      }
      if (dataLists[i].answer2) {
        divMainAnswer2.classList.remove("main__color_check");
      }
      if (dataLists[i].answer3) {
        divMainAnswer3.classList.remove("main__color_check");
      }
      if (dataLists[i].answer4) {
        divMainAnswer4.classList.remove("main__color_check");
      }
      if (dataLists[i].answer5) {
        divMainAnswer5.classList.add("main__color_check");
      }
    });
  }
}
function checkAnswer() {
  let check_1 = false;
  let check_2 = false;
  let check_3 = false;
  let check_4 = false;
  let check_5 = false;
  let check_6 = false;
  const inputAnswer1 = document.querySelector('input[id="answer_01"]');
  const divMainAnswer1 = document.querySelector(".main__answer_1");

  if (dataLists[i].answer1) {
    // если есть первый вопрос
    if (inputAnswer1.checked) {
      // если он выбран
      if (dataLists[i].check) {
        //если это checkbox
        check_1 = true;
      } else {
        //если это не checkbox, а радио кнопка
        if (dataLists[i].var === 1) {
          // если варриант правильный
          j++;
          if (errorsAnswers.length !== j) {
            listSurvey.push("Правильно");
            answerList.push(dataLists[i].answer1);

            i = errorsAnswers[j];
            checkTheme();
          }

          return;
        } else {
          // если этот варриант не правильный
          j++;
          if (errorsAnswers.length !== j) {
            listSurvey.push("Неправильно");
            answerList.push(dataLists[i].answer1);

            i = errorsAnswers[j];
            checkTheme();
          }

          return;
        }
      }
    }
  }
  const inputAnswer2 = document.querySelector('input[id="answer_02"]');
  const divMainAnswer2 = document.querySelector(".main__answer_2");
  if (dataLists[i].answer2) {
    if (inputAnswer2.checked) {
      if (dataLists[i].check) {
        check_2 = true;
      } else {
        if (dataLists[i].var === 2) {
          j++;
          if (errorsAnswers.length !== j) {
            answerList.push(dataLists[i].answer2);
            listSurvey.push("Правильно");

            i = errorsAnswers[j];
            checkTheme();
          }

          return;
        } else {
          j++;
          if (errorsAnswers.length !== j) {
            listSurvey.push("Неправильно");
            answerList.push(dataLists[i].answer2);

            i = errorsAnswers[j];
            checkTheme();
          }

          return;
        }
      }
    }
  }
  const inputAnswer3 = document.querySelector('input[id="answer_03"]');
  const divMainAnswer3 = document.querySelector(".main__answer_3");
  if (dataLists[i].answer3) {
    if (inputAnswer3.checked) {
      if (dataLists[i].check) {
        check_3 = true;
      } else {
        j++;
        if (dataLists[i].var === 3) {
          if (errorsAnswers.length !== j) {
            listSurvey.push("Правильно");
            answerList.push(dataLists[i].answer3);

            i = errorsAnswers[j];
            checkTheme();
          }

          return;
        } else {
          j++;
          if (errorsAnswers.length !== j) {
            listSurvey.push("Неправильно");
            answerList.push(dataLists[i].answer3);

            i = errorsAnswers[j];
            checkTheme();
          }

          return;
        }
      }
    }
  }
  const inputAnswer4 = document.querySelector('input[id="answer_04"]');
  const divMainAnswer4 = document.querySelector(".main__answer_4");
  if (dataLists[i].answer4) {
    if (inputAnswer4.checked) {
      if (dataLists[i].check) {
        check_4 = true;
      } else {
        j++;
        if (dataLists[i].var === 4) {
          if (errorsAnswers.length !== j) {
            listSurvey.push("Правильно");
            answerList.push(dataLists[i].answer4);

            i = errorsAnswers[j];
            checkTheme();
          }

          return;
        } else {
          j++;
          if (errorsAnswers.length !== j) {
            listSurvey.push("Неправильно");
            answerList.push(dataLists[i].answer4);

            i = errorsAnswers[j];
            checkTheme();
          }

          return;
        }
      }
    }
  }
  const inputAnswer5 = document.querySelector('input[id="answer_05"]');
  const divMainAnswer5 = document.querySelector(".main__answer_5");
  if (dataLists[i].answer5) {
    if (inputAnswer5.checked) {
      if (dataLists[i].var === 5) {
        j++;
        if (errorsAnswers.length !== j) {
          listSurvey.push("Правильно");
          answerList.push(dataLists[i].answer5);

          i = errorsAnswers[j];
          checkTheme();
        }

        return;
      } else {
        j++;
        if (errorsAnswers.length !== j) {
          listSurvey.push("Неправильно");
          answerList.push(dataLists[i].answer5);

          i = errorsAnswers[j];
          checkTheme();
        }

        return;
      }
    }
  }
  const inputAnswer6 = document.querySelector('input[id="answer_06"]');
  const divMainAnswer6 = document.querySelector(".main__answer_6");
  if (dataLists[i].answer6) {
    if (inputAnswer6.checked) {
      if (dataLists[i].var === 6) {
        j++;
        if (errorsAnswers.length !== j) {
          listSurvey.push("Правильно");
          answerList.push(dataLists[i].answer6);

          i = errorsAnswers[j];
          checkTheme();
        }

        return;
      } else {
        j++;
        if (errorsAnswers.length !== j) {
          listSurvey.push("Неправильно");
          answerList.push(dataLists[i].answer6);

          i = errorsAnswers[j];
          checkTheme();
        }

        return;
      }
    }
  }
  if (
    (dataLists[i].id === 7 && !check_1 && check_2 && check_3 && check_4) ||
    (dataLists[i].id === 50 && check_1 && check_2 && !check_3)
  ) {
    j++;
    if (errorsAnswers.length !== j) {
      listSurvey.push("Правильно");

      i = errorsAnswers[j];
      checkTheme();
    }
    return;
  } else {
    j++;
    if (errorsAnswers.length !== j) {
      listSurvey.push("Неправильно");

      i = errorsAnswers[j];
      checkTheme();
    }
    return;
  }
}
function resultTest(dataLists, listSurvey, answerList) {
  const mainInsertEl = document.querySelector(".main__insert");
  if (mainInsertEl) {
    mainInsertEl.remove();
  }
  const mainInsert = document.createElement("div");
  mainInsert.classList.add("main__insert");
  const mainTasks = document.querySelector(".main__tasks");
  mainTasks.insertAdjacentElement("beforeend", mainInsert);

  for (let i = 0; i < dataLists.length; i++) {
    mainInsert.insertAdjacentHTML(
      "beforeend",
      `
    <div class="question">Вопрос: ${dataLists[i].question}</div>
    <div class="answer">Ваш ответ: ${answerList[i]}</div>
    <div class="result">Резуьтат: ${listSurvey[i]}</div>
    
`
    );
  }
}
