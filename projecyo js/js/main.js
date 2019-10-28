$('document').ready(function(){
        //slider
    $('.bxSlider').bxSlider({
        mode:'fade',
        caption: true,
        slideWidth: 1200,
        responsive: true,
        slideMargin: 800,
        pager: false
    });
    //post
    var post= [
        {
            title: 'prueba de titulo 1',
            date: 'Publicado el dia '+moment().format("DD")+' del mes de '+moment().format("MMMM")+' del año '+moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit Duis porta lectus enim,eu vestibulum nulla posuere vitae.Integer quis lacus et felis tempor hendrerit.Sed feugiat lectus id nibh fermentum lobortis.`
        },
        {
            title: 'prueba de titulo 2',
            date: 'Publicado el dia '+moment().format("DD")+' del mes de '+moment().format("MMMM")+' del año '+moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Duis porta lectus enim,eu vestibulum nulla posuere vitae.Integer quis lacus et felis tempor hendrerit.Sed feugiat lectus id nibh fermentum lobortis."
        },
        {
            title: 'prueba de titulo 3',
            date: 'Publicado el dia '+moment().format("DD")+' del mes de '+moment().format("MMMM")+' del año '+moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Duis porta lectus enim,eu vestibulum nulla posuere vitae.Integer quis lacus et felis tempor hendrerit.Sed feugiat lectus id nibh fermentum lobortis."
        },
        {
            title: 'prueba de titulo 4',
            date: 'Publicado el dia '+moment().format("DD")+' del mes de '+moment().format("MMMM")+' del año '+moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Duis porta lectus enim,eu vestibulum nulla posuere vitae.Integer quis lacus et felis tempor hendrerit.Sed feugiat lectus id nibh fermentum lobortis."
        },
        {
            title: 'prueba de titulo 4',
            date: 'Publicado el dia '+moment().format("DD")+' del mes de '+moment().format("MMMM")+' del año '+moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Duis porta lectus enim,eu vestibulum nulla posuere vitae.Integer quis lacus et felis tempor hendrerit.Sed feugiat lectus id nibh fermentum lobortis."
        },
    ]
    post.forEach((item, index) =>{
        var post= `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
            ${item.content}
        </p>
         <a href="#" class="button-more">Leer mas.</a>

    </article>
        `;
        $('#posts').append(post);
     });

     //selector de tema
     var theme = $('#theme');
     $("#toGreen").click(function(){
        theme.attr("href", 'css/green.css');
     });
     $("#toRed").click(function(){
        theme.attr("href", 'css/red.css');
     });
     $("#toBlue").click(function(){
        theme.attr("href", 'css/blue.css');
     });

});