var checkBox = document.getElementsByClassName("fa-check-square");
var returnArrow = document.getElementsByClassName("fa-arrow-left");
var trash = document.getElementsByClassName("fa-trash");

Array.from(checkBox).forEach(function(element) {
  element.addEventListener('click', function(){

    const title = this.parentNode.parentNode.childNodes[3].innerText
    const author = this.parentNode.parentNode.childNodes[5].innerText
    // const checkOut = this.parentNode.parentNode.childNodes[7].innerText

    const titleSpan = this.parentNode.parentNode.childNodes[3]
    const authorSpan = this.parentNode.parentNode.childNodes[5]

    console.log(element)
    console.log(title)

    // titleSpan.classList.add('strikethrough')
    // authorSpan.classList.add('strikethrough')

    fetch('checkOut', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'title': title,
        'author': author
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});

Array.from(returnArrow).forEach(function(element) {
  element.addEventListener('click', function(){

    const title = this.parentNode.parentNode.childNodes[3].innerText
    const author = this.parentNode.parentNode.childNodes[5].innerText
    

    const titleSpan = this.parentNode.parentNode.childNodes[3]
    const authorSpan = this.parentNode.parentNode.childNodes[5]

    console.log(element)
    console.log(title)

    // titleSpan.classList.add('strikethrough')
    // authorSpan.classList.add('strikethrough')

    fetch('checkIn', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'title': title,
        'author': author
        
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const title = this.parentNode.parentNode.childNodes[3].innerText
        const author = this.parentNode.parentNode.childNodes[5].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'title': title,
            'author': author
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
