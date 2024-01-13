// const par = () => { const a= document.querySelector("button");

// console.log(a.innerText);}

const button= document.querySelector('button')


button.addEventListener("onclick", function () {
    
      let title=document.createElement('a');
      title.className='email';
      title.href='mailto:sp934223@gmail.com';
      document.body.appendChild(title);

  });


//   <a class="button-two" href="mailto:sp935423@gmail.com">Drop me a mail.</a><br></br>