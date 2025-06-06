const url = "./theme_2.json";
async function fetchData(url) {
  try {
    const response = await fetch(url);
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
const dataLists = await fetchData(url);
dataLists.forEach((element) => {
  arrayOld[j] = element.id;
  j++;
});
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
    if (errorsAnswers.length > j) {
      checkAnswer();
      backLight();
    }
    if (errorsAnswers.length == j) {
      alert("Вы закончили эту тему");
      window.location = "../index.html";
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
        if (dataLists[i].var.one) {
          //если первый варриант правильный
          divMainAnswer1.classList.add("main__color_true");
        } else {
          // если этот варриант не правильный
          divMainAnswer1.classList.add("main__color_false");
          errorsAnswers.push(dataLists[i].id);
        }
      } else {
        //если это не checkbox, а радио кнопка
        if (dataLists[i].var === 1) {
          // если варриант правильный
          j++;
          i = errorsAnswers[j];
          if (errorsAnswers.length !== j) {
            checkTheme();
          }
          return;
        } else {
          // если этот варриант не правильный
          divMainAnswer1.classList.add("main__color_false");
          errorsAnswers.push(dataLists[i].id);
        }
      }
    } else {
      //если этот вариант ответа не выбран
      if (dataLists[i].var === 1) {
        divMainAnswer1.classList.add("main__color_true");
      }
      if (dataLists[i].var.one) {
        divMainAnswer1.classList.add("main__color_true");
      }
    }
  }
  const inputAnswer2 = document.querySelector('input[id="answer_02"]');
  const divMainAnswer2 = document.querySelector(".main__answer_2");
  if (dataLists[i].answer2) {
    if (inputAnswer2.checked) {
      if (dataLists[i].check) {
        check_2 = true;
        if (dataLists[i].var.two) {
          divMainAnswer2.classList.add("main__color_true");
        } else {
          divMainAnswer2.classList.add("main__color_false");
          errorsAnswers.push(dataLists[i].id);
        }
      } else {
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
      }
    } else {
      if (dataLists[i].var === 2) {
        divMainAnswer2.classList.add("main__color_true");
      }
      if (dataLists[i].var.two) {
        divMainAnswer2.classList.add("main__color_true");
      }
    }
  }
  const inputAnswer3 = document.querySelector('input[id="answer_03"]');
  const divMainAnswer3 = document.querySelector(".main__answer_3");
  if (dataLists[i].answer3) {
    if (inputAnswer3.checked) {
      if (dataLists[i].check) {
        check_3 = true;
        if (dataLists[i].var.three) {
          divMainAnswer3.classList.add("main__color_true");
        } else {
          divMainAnswer3.classList.add("main__color_false");
          errorsAnswers.push(dataLists[i].id);
        }
      } else {
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
      }
    } else {
      if (dataLists[i].var === 3) {
        divMainAnswer3.classList.add("main__color_true");
      }
      if (dataLists[i].var.three) {
        divMainAnswer3.classList.add("main__color_true");
      }
    }
  }
  const inputAnswer4 = document.querySelector('input[id="answer_04"]');
  const divMainAnswer4 = document.querySelector(".main__answer_4");
  if (dataLists[i].answer4) {
    if (inputAnswer4.checked) {
      if (dataLists[i].check) {
        check_4 = true;
        if (dataLists[i].var.four) {
          divMainAnswer4.classList.add("main__color_true");
        } else {
          divMainAnswer4.classList.add("main__color_false");
          errorsAnswers.push(dataLists[i].id);
        }
      } else {
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
      }
    } else {
      if (dataLists[i].var === 4) {
        divMainAnswer4.classList.add("main__color_true");
      }
      if (dataLists[i].var.four) {
        divMainAnswer4.classList.add("main__color_true");
      }
    }
  }
  const inputAnswer5 = document.querySelector('input[id="answer_05"]');
  const divMainAnswer5 = document.querySelector(".main__answer_5");
  if (dataLists[i].answer5) {
    if (inputAnswer5.checked) {
      if (dataLists[i].var === 5) {
        console.log(inputAnswer5.checked);

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
  const inputAnswer6 = document.querySelector('input[id="answer_06"]');
  const divMainAnswer6 = document.querySelector(".main__answer_6");
  if (dataLists[i].answer6) {
    if (inputAnswer6.checked) {
      if (dataLists[i].var === 6) {
        console.log(inputAnswer6.checked);

        j++;
        i = errorsAnswers[j];
        if (errorsAnswers.length !== j) {
          checkTheme();
        }
        return;
      } else {
        divMainAnswer6.classList.add("main__color_false");
        errorsAnswers.push(dataLists[i].id);
      }
    } else {
      if (dataLists[i].var === 6) {
        divMainAnswer6.classList.add("main__color_true");
      }
    }
  }
  if (
    (dataLists[i].id === 7 && !check_1 && check_2 && check_3 && check_4) ||
    (dataLists[i].id === 50 && check_1 && check_2 && !check_3)
  ) {
    j++;
    i = errorsAnswers[j];
    if (errorsAnswers.length !== j) {
      checkTheme();
    }
    return;
  }
}
