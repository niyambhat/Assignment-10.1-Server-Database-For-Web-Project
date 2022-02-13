let allPosts= document.querySelector('.allPosts');

init();

// load all events

function init(){
    document.addEventListener('DOMContentLoaded', loadingEvent);
}

function loadingEvent()
{
  fetch('/posts')
  .then(response=>response.json())
  .then(
      response => {
          let data = response;
          response.forEach(myFunction);

          function myFunction(value){
            let wrapper = document.createElement('div');
            wrapper.className = 'post';
            wrapper.innerHTML =
            `
            <div class="post__header">
                  <i class="material-icons sidebar__topAvatar"> account_circle </i>
                  <div class="post__info">
                    <h2>Niyam Bhat</h2>
                    <p>Job Description</p>
                  </div>
                </div>
      
                <div class="post__body">
                  <p>${value.post}</p>
                </div>
      
                <div class="feed__inputOptions">
                  <div class="inputOption">
                    <i style="color: gray" class="material-icons"> thumb_up </i>
                    <h4>Like</h4>
                  </div>
                  <div class="inputOption">
                    <i style="color: gray" class="material-icons"> comment </i>
                    <h4>Comment</h4>
                  </div>
                  <div class="inputOption">
                    <i style="color: gray" class="material-icons"> share </i>
                    <h4>Share</h4>
                  </div>
                  <div class="inputOption">
                    <i style="color: gray" class="material-icons"> send </i>
                    <h4>Send</h4>
                  </div>
                </div>
                
            `
            allPosts.appendChild(wrapper);
          }      

      }
  ).catch(error => console.log(error));
}