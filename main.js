const btnOpen = document.querySelector(".btn-open");
const btnOpen2 = document.querySelector(".btn-open2");
const myModal = new bootstrap.Modal('#exampleModal');
const myModal2 = new bootstrap.Modal('#exampleModal2');
const myModal3 = new bootstrap.Modal('#exampleModal3');
const myModal3Body = document.querySelector('#exampleModal3 .modal-body');
const myModalDiv = document.querySelector("#exampleModal");
const myModalDiv3 = document.querySelector("#exampleModal3");

myModalDiv.addEventListener('hidden.bs.modal', event => {
  myModal2.show();
})

btnOpen.addEventListener("click", () =>{
  myModal.show();
});

btnOpen2.addEventListener("click", () =>{
  showModal(1)
});


function showModal(type) {
  const btns = myModalDiv3.querySelectorAll("button");
  btns.forEach(btn => {
    let classList = btn.classList;
    btn.classList.remove(classList[2]);
    btn.innerHTML = btn.getAttribute("text");
  });
  let content = "";
  switch(type){
    case 1:
      content = `<div>這是第一個 Modal</div>`;
      btns[0].classList.add("d-none");
      btns[2].classList.add("d-none");
      btns[1].classList.add("btn-success");
      btns[1].innerHTML = "我知道了";
      myModalDiv3.addEventListener('hidden.bs.modal', _fun = (event) => {
        showModal(2);
        myModalDiv3.removeEventListener('hidden.bs.modal', _fun);
      })
      break;
    case 2:
      content = `<div>成功關掉第一個然後開第二個</div>`;
      btns[0].classList.add("d-none");
      btns[2].classList.add("d-none");
      btns[1].classList.add("btn-danger");
      btns[1].innerHTML = "關掉";
      break;
  }
  myModal3Body.innerHTML = content;
  myModal3.show();
}