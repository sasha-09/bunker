import React from "react";

const PlayersCharacteristics = () => {
  return (
    <div>
      <div className="bg-slate-800 text-[#FFFFFF] border-2 border-sky-500 rounded p-2 mt-0">
        <h3>игроки</h3>
        {/* bg-[#0E1C3D] синий цвет cохранен*/}

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
            <thead class="text-xs text-white uppercase bg-slate-800 border-b border-blue-400 dark:text-white">
              <tr>
                <th scope="col" class="px-6 py-3 font-russo">
                  игроки
                </th>
                <th scope="col" class="px-6 py-3 font-russo">
                  биология
                </th>
                <th scope="col" class="px-6 py-3 font-russo">
                  профессия
                </th>
                <th scope="col" class="px-6 py-3 font-russo">
                  здоровье
                </th>
                <th scope="col" class="px-6 py-3 font-russo">
                  предмет
                </th>
              </tr>
            </thead>
            <tbody className=" font-montserrat">
              <tr class="bg-slate-700 border-b border-blue-400">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  игрок 1
                </th>
                <td class="px-6 py-4">ламинат_23_года</td>
                <td class="px-6 py-4">оккультист</td>
                <td class="px-6 py-4">ШИЗА</td>
                <td class="px-6 py-4">666_Т_хлеба</td>
              </tr>
              <tr class="bg-slate-800 border-b border-blue-400">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  игрок 2
                </th>
                <td class="px-6 py-4">рептилоид_?_лет</td>
                <td class="px-6 py-4">шпион</td>
                <td class="px-6 py-4">неопознано</td>
                <td class="px-6 py-4">перевоплащатор</td>
              </tr>
              <tr class="bg-slate-700 border-b border-blue-400">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  игрок 3
                </th>
                <td class="px-6 py-4">мужчина_25_лет</td>
                <td class="px-6 py-4">учитель_Python</td>
                <td class="px-6 py-4">нет_болезни</td>
                <td class="px-6 py-4">компьютер</td>
              </tr>
              <tr class="bg-slate-800 border-b border-blue-400">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  игрок 4
                </th>
                <td class="px-6 py-4">женщина_26_лет</td>
                <td class="px-6 py-4">смотрящий_за_генаратором</td>
                <td class="px-6 py-4">обморожение</td>
                <td class="px-6 py-4">щуба_из_НАСТОЯЩЕГО_МЕХА</td>
              </tr>
              <tr class="bg-slate-700 border-b border-blue-400">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  игрок 5
                </th>
                <td class="px-6 py-4">мужчина_70_лет</td>
                <td class="px-6 py-4">математик</td>
                <td class="px-6 py-4">математическое_помещетельство</td>
                <td class="px-6 py-4">учебник_математики</td>
              </tr>

              <tr class="bg-slate-800 border-b border-blue-400">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  игрок 6
                </th>
                <td class="px-6 py-4">домовой_200_лет</td>
                <td class="px-6 py-4">домовой</td>
                <td class="px-6 py-4">невозможность_покинуть_бункер</td>
                <td class="px-6 py-4">метла_для_изгнания_демонов</td>
              </tr>
              
              <tr class="bg-slate-700 border-b border-blue-400">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  игрок 7
                </th>
                <td class="px-6 py-4">женщина_85_лет</td>
                <td class="px-6 py-4">математик</td>
                <td class="px-6 py-4">математическое_помещетельство</td>
                <td class="px-6 py-4">учебник_математики</td>
              </tr>
              
            </tbody>
          </table>
        </div>

        {/* C2C2C2 серый цвет ты хотел его вставить*/}
      </div>
    </div>
  );
};

export default PlayersCharacteristics;
