function highlight(table) {
  // ваш код...let rows = table.getElementsByTagName("tr");

  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    let status = row.cells[3].getAttribute("data-available");

    if (status === "true") {
      row.classList.add("available");
    } else if (status === "false") {
      row.classList.add("unavailable");
    }

    if (!row.cells[3].hasAttribute("data-available")) {
      row.hidden = true;
    }

    let sex = row.cells[2].textContent;

    if (sex === "m") {
      row.classList.add("male");
    } else if (sex === "f") {
      row.classList.add("female");
    }

    let age = Number(row.cells[1].textContent);

    if (age < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}
