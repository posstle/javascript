document.querySelector('.list').addEventListener('click', (e) => {
  changeTab(e.target.dataset.id)
})

function changeTab(num) {
  const content = document.querySelectorAll('.tab-content')
  const tabs = document.querySelectorAll('.tab-button')

  for (let i = 0; i < content.length; i++) {
    content[i].classList.remove('show')
    tabs[i].classList.remove('orange')
  }

  content[num].classList.add('show')
  tabs[num].classList.add('orange')
}
