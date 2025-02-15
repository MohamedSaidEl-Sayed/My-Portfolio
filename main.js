document.getElementById('info').addEventListener('change', function() {
    if(this.checked) {
        document.body.style.removeProperty('height');
        setTimeout(function(){
            document.body.style.height = 'auto';
            // if the window.innerHeight is taller than the height of the body
            //console.log(window.innerHeight);
            var bodyHeight = document.getElementById('check-height').getBoundingClientRect().top;
            //console.log(bodyHeight);
            if(window.innerHeight >= bodyHeight){
                document.body.style.height = (window.innerHeight+50) + 'px';
                //console.log(document.body.style.height);
            }
        }, 1700);
    }else{
        document.body.style.height = '100vh';
    }
});
document.getElementById('info').addEventListener('change', function() {
    if(this.checked) {
        document.querySelector('.info').style.display = 'none';
        setTimeout(function(){
            document.querySelector('.info').style.display = 'block';
        }, 700);
    }else{
        setTimeout(function(){
            document.querySelector('.info').style.display = 'none';
        }, 200);
        
    }
});

var moreIcon = document.querySelector('.more-icon');
document.getElementById('info').addEventListener('change', function() {
    if(this.checked) {
        setTimeout(function(){
            moreIcon.classList.remove('fa-angle-down');
            moreIcon.classList.add('fa-angle-up');
        }, 600);
    }else{
        setTimeout(function(){
            moreIcon.classList.remove('fa-angle-up');
            moreIcon.classList.add('fa-angle-down');
        }, 600);
    }
});

//element.getBoundingClientRect().top
//Retrieves the vertical position (distance in pixels) from the top edge of the viewport to the top edge of the specified element.

//window.innerHeight
//It returns the height of the viewport (the visible area of the web page) in pixels.
document.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.move');
    elements.forEach(function(el) {
        if(el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('scroll');
        }else{
            el.classList.remove('scroll');
        }
    });
});

document.addEventListener('click', function(event) {
    if(event.target.classList.contains('awesome-button')) {
        var elements = document.querySelectorAll('.awesome-button');
        elements.forEach(function(el) {
            el.classList.remove('active');
        });
        event.target.classList.add('active');
    }
});

    var job = document.querySelector('.job');
    var text = job.innerHTML;
    var counter = 0;
    setInterval(function(){
        job.innerHTML = "<span style='color:#04ff00'>" + text.slice(0, counter) +  text[counter] + "</span>" + text.slice(counter+1);
        counter++;
        if(counter >= text.length){
            counter = 0;
        }
    }, 200);


    // var realProjectsBtn = document.getElementById('real-projects-btn');
    // realProjectsBtn.addEventListener('click', function(){
    //     var realProjects = document.querySelectorAll('.real-project');
    //     realProjects.forEach(function(el){
    //         el.classList.toggle('animate');
    //     });
    // });



window.addEventListener('load', function(){
    var avatar = document.querySelector('.avatar');
    var title = document.querySelector('.title');
    avatar.classList.add('move-onload');
    title.classList.add('move-onload');
});


