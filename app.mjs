function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!

  sortTables();
  hamburgerLogic();

};


function hamburgerLogic() {
  let toggle = true;

  const menuBtn = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");

  menuBtn.addEventListener('click', () => {
    if (toggle) {
      sidebar.style.transform = "translateX(0)"

      toggle = !toggle;
    } else {
      sidebar.style.transform = "translateX(100%)"
      toggle = !toggle;
    }
  });
}

function sortTables() {

  // This is a list of table ids. They will be used to get the different tables
  const tables = ['instructor-table', 'track-table', 'gender-table', 'stats-table']

  // get All the sortable buttons
  const sortableBtns = document.querySelectorAll('.sortable');

  // Initialize a toggler. This will be used to switch between sorting in ascending or descending order
  let tableToggle = false;

  // Assign onclick handlers for all sortable buttons
  sortableBtns.forEach((el, id) => {
    el.addEventListener('click', () => sortTable(tables[id]));
  })

  // Table sorting Function.
  // @params: table id (from HTML markup)
  function sortTable(tableID) {
    // Get a table
    const table = document.getElementById(tableID);
    // Get the rows in the table
    const tableRows = table.querySelectorAll('.table-row');

    // ```
    // Instantiate an array to store the table rows.
    // I did this because I found that the value returned by 
    // 'querySelectorAll' is of type 'NodeList' and does not 
    // come with the sort method which is a crucial part of this function
    // ```
    const tableRowsItemsList = [];

    tableRows.forEach((element, id) => {
      // const child = element.children;

      if (id > 0) {
        tableRowsItemsList.push(element)
      }
    })

    for (let i = 1; i < tableRows.length; i++) {
      tableRows[i].remove();
    }

    tableRowsItemsList.sort((a, b) => {
      return tableToggle ?
        (+(b.children[b.children.length - 1].textContent) - +(a.children[a.children.length - 1].textContent)) :
        (+(a.children[a.children.length - 1].textContent) - +(b.children[b.children.length - 1].textContent));
    })


    for (let i = 0; i < tableRowsItemsList.length; i++) {
      table.appendChild(tableRowsItemsList[i]);
    }

    tableToggle = !tableToggle;
  }
}

const frontEnd = document.getElementById('front-end-pop-up');
const backEnd = document.getElementById('back-end-pop-up');
const cloud = document.getElementById('cloud-pop-up');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

document.getElementById('frontBtn').addEventListener('click', () => {
  document.getElementById('modalH').innerHTML = 'Frontend-Engineering';
  document.getElementById('modalP').innerHTML = frontEnd.innerHTML;
  modal_container.classList.add('show');
});
document.getElementById('backBtn').addEventListener('click', () => {
  document.getElementById('modalH').innerHTML = 'Backend-Engineering';
  document.getElementById('modalP').innerHTML = backEnd.innerHTML;
  modal_container.classList.add('show');
});
document.getElementById('cloudBtn').addEventListener('click', () => {
  document.getElementById('modalH').innerHTML = 'Cloud-Engineering';
  document.getElementById('modalP').innerHTML = cloud.innerHTML;
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});





// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //