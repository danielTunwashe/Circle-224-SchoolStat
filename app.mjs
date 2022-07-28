function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!

  // This is a list of table ids. They will be used to get the different tables
  const tables = ['instructor-table', 'track-table', 'gender-table', 'stats-table']

  // get All the sortable buttons
  const sortableBtns = document.querySelectorAll('.sortable');

  // Initialize a toggler. This will be used to switch between sorting in ascending or descending order
  let instructorTableToggle = false;

  // Assign onclick handlers for all sortable buttons
  sortableBtns.forEach((el, id) => {
    el.addEventListener('click', () => sortTable(tables[id]));
  })

  // Table sorting Function.
  // @params: table id (from HTML markup)
  function sortTable(table) {
    // Get a table
    const instructorTable = document.getElementById(table);
    // Get the rows in the table
    const instructorTableRows = instructorTable.querySelectorAll('.table-row');

    // ```
    // Instantiate an array to store the table rows.
    // I did this because I found that the value returned by 
    // 'querySelectorAll' is of type 'NodeList' and does not 
    // come with the sort method which is a crucial part of this function
    // ```
    const instructorTableRowsItemsList = [];

    instructorTableRows.forEach((element, id) => {
      const child = element.children;

      if (id > 0) {
        instructorTableRowsItemsList.push(element)
      }
    })

    for (let i = 1; i < instructorTableRows.length; i++) {
      instructorTableRows[i].remove();
    }

    instructorTableRowsItemsList.sort((a, b) => {
      return instructorTableToggle ?
        (+(b.children[b.children.length - 1].textContent) - +(a.children[a.children.length - 1].textContent)) :
        (+(a.children[a.children.length - 1].textContent) - +(b.children[b.children.length - 1].textContent));
    })


    for (let i = 0; i < instructorTableRowsItemsList.length; i++) {
      instructorTable.appendChild(instructorTableRowsItemsList[i]);
    }

    instructorTableToggle = !instructorTableToggle;
  }

};

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //