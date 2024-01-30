/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement("table");
    this.Table();
  }
  Table() {
    this.elem.insertAdjacentHTML(
      "afterBegin",
      `<thead>
      <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
      </tr>
  </thead>`
    );

    let tbody = document.createElement("tbody");
    this.elem.append(tbody);

    this.rows.forEach((obj) => {
      tbody.insertAdjacentHTML(
        "beforeEnd",
        `<tr>
      <td>${obj.name}</dh>
      <td>${obj.age}</dh>
      <td>${obj.salary}</dh>
      <td>${obj.city}</dh>
      <th><button>X</button></th>
  </tr>`
      );
    });

    let buttonsClose = this.elem.querySelectorAll("button");
    for (let button of buttonsClose) {
      button.addEventListener("click", (event) =>
        event.target.closest("tr").remove()
      );
    }
  }
}
