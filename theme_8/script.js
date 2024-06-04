const url = "./theme_8.json";
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`error -> ${error}`);
  }
}
let errorsAnswers = [];
let j = 0;
const dataLists = await fetchData(url);
dataLists.forEach((element) => {
  errorsAnswers[j] = element.id;
  j++;
});
const mainTasks = document.querySelector(".main__tasks");
j = 0;
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
  if (dataLists[i].answer1) {
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
  if (dataLists[i].answer2) {
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
  if (dataLists[i].answer3) {
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
  if (dataLists[i].answer4) {
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
  if (dataLists[i].answer5) {
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
  if (dataLists[i].answer6) {
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
    if (errorsAnswers.length > j) {
      checkAnswer();
      backLight();
    }
    if (errorsAnswers.length == j) {
      alert("Вы закончили курс");
      window.location = "../index.html";

      return;
    }
  });
  backQuest.addEventListener("click", () => {
    if (j > 0) {
      j--;
      i--;
      checkTheme();
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
  if (dataLists[i].answer1) {
    const inputAnswer1 = document.querySelector('input[id="answer_01"]');
    const divMainAnswer1 = document.querySelector(".main__answer_1");

    if (inputAnswer1.checked) {
      if (dataLists[i].var === 1) {
        j++;
        i = errorsAnswers[j];
        if (errorsAnswers.length !== j) {
          checkTheme();
        }

        return;
      } else {
        divMainAnswer1.classList.add("main__color_false");
        errorsAnswers.push(dataLists[i].id);
      }
    } else {
      if (dataLists[i].var === 1) {
        divMainAnswer1.classList.add("main__color_true");
      }
    }
  }
  if (dataLists[i].answer2) {
    const inputAnswer2 = document.querySelector('input[id="answer_02"]');
    const divMainAnswer2 = document.querySelector(".main__answer_2");
    if (inputAnswer2.checked) {
      if (dataLists[i].var === 2) {
        j++;
        i = errorsAnswers[j];
        if (errorsAnswers.length !== j) {
          checkTheme();
        }
        return;
      } else {
        divMainAnswer2.classList.add("main__color_false");
        errorsAnswers.push(dataLists[i].id);
      }
    } else {
      if (dataLists[i].var === 2) {
        divMainAnswer2.classList.add("main__color_true");
      }
    }
  }
  if (dataLists[i].answer3) {
    const inputAnswer3 = document.querySelector('input[id="answer_03"]');
    const divMainAnswer3 = document.querySelector(".main__answer_3");
    if (inputAnswer3.checked) {
      if (dataLists[i].var === 3) {
        j++;
        i = errorsAnswers[j];
        if (errorsAnswers.length !== j) {
          checkTheme();
        }
        return;
      } else {
        divMainAnswer3.classList.add("main__color_false");
        errorsAnswers.push(dataLists[i].id);
      }
    } else {
      if (dataLists[i].var === 3) {
        divMainAnswer3.classList.add("main__color_true");
      }
    }
  }
  if (dataLists[i].answer4) {
    const inputAnswer4 = document.querySelector('input[id="answer_04"]');
    const divMainAnswer4 = document.querySelector(".main__answer_4");
    if (inputAnswer4.checked) {
      if (dataLists[i].var === 4) {
        j++;
        i = errorsAnswers[j];
        if (errorsAnswers.length !== j) {
          checkTheme();
        }
        return;
      } else {
        divMainAnswer4.classList.add("main__color_false");
        errorsAnswers.push(dataLists[i].id);
      }
    } else {
      if (dataLists[i].var === 4) {
        divMainAnswer4.classList.add("main__color_true");
      }
    }
  }
  if (dataLists[i].answer5) {
    const inputAnswer5 = document.querySelector('input[id="answer_05"]');
    const divMainAnswer5 = document.querySelector(".main__answer_5");
    if (inputAnswer5.checked) {
      if (dataLists[i].var === 5) {
        j++;
        i = errorsAnswers[j];
        if (errorsAnswers.length !== j) {
          checkTheme();
        }
        return;
      } else {
        divMainAnswer5.classList.add("main__color_false");
        errorsAnswers.push(dataLists[i].id);
      }
    } else {
      if (dataLists[i].var === 5) {
        divMainAnswer5.classList.add("main__color_true");
      }
    }
  }
}
