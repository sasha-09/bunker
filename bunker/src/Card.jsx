import React from "react";

const Card = ({ player }) => {
  return (
    <div className="bg-slate-800 text-[#FFFFFF] border-2 border-sky-500 rounded p-2 mt-10">
      <h3>{player}</h3>
      {/* bg-[#0E1C3D] синий цвет cохранен*/}

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
          <thead class="text-xs text-white uppercase bg-slate-800 border-b border-blue-400 dark:text-white">
            <tr>
              <th scope="col" class="px-6 py-3 font-russo">
                КАТЕГОРИЯ
              </th>
              <th scope="col" class="px-6 py-3 font-russo">
                ОПИСАНИЕ
              </th>
            </tr>
          </thead>
          <tbody className=" font-montserrat">
            <tr class="bg-slate-700 border-b border-blue-400">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                биология
              </th>
              <td class="px-6 py-4">ламинат_23_года</td>
            </tr>
            <tr class="bg-slate-800 border-b border-blue-400">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                профессия
              </th>
              <td class="px-6 py-4">оккультист</td>
            </tr>
            <tr class="bg-slate-700 border-b border-blue-400">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                здоровье
              </th>
              <td class="px-6 py-4">ШИЗА</td>
            </tr>
            <tr class="bg-slate-800 border-b border-blue-400">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                предмет
              </th>
              <td class="px-6 py-4">666_Т_хлеба</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* C2C2C2 серый цвет ты хотел его вставить*/}
    </div>
  );
};

export default Card;
