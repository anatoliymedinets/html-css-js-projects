const panels = document.querySelectorAll('.panel')
const container = document.querySelector('.container')

let activePanel = panels[0]

container.addEventListener('click', (e) => {
  if(e.target.classList.contains('panel')) {
    activePanel.classList.remove('active')
    activePanel = e.target
    activePanel.classList.add('active')
  }
})
