// fungsi search movie
function searchMovie(){
    // ketika selesai pencarian maka kosongkan movie-list nya
    $('#movie-list').html('');

    // ambil data api yg berbentuk json
    // bisa dgn fungsi $.getJSON() bisa dgn fungsi $.ajax()
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType : 'json',
        data: {
            'apikey': '29684c34',
            's': $('#search-input').val() // val() mengambil semua value di form search
        },
        // jika sukses ajaxnya dikirim, maka jalankan fungsi hasil
        success: function(result){
            // jika data berhasil diambil
            if(result.Response == "True") {
                // jika movie/data nya ada/true
                // keluarkan object search nya
                let movies = result.Search;
                console.log(movies);

                $.each(movies, function(i, data){
                    $('#movie-list').append(`
                        <div class="col-md-3 mt-4">
                            <div class="card">
                            <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">`+ data.Title +`</h5>
                              <h6 class="card-subtitle mb-2 text-muted">`+ data.Year +`</h6>
                              <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+ data.imdbID +`">See Detail</a>
                            </div>
                          </div>
                        </div>
                    `)
                });
                // mengosongkan text di form input
                $('#search-input').val('');
            } else {
                $('#movie-list').html(`
                    <div class="col">
                        <div class="alert alert-primary" role="alert">
                            ` + result.Error + `
                        </div>
                    </div>
                `)
            }
        }
    });
}

// click perintah ketika tombol button di klik
$('#search-btn').on('click', function(){
    searchMovie();
});


// keyup perintah ketika tombol enter dilepas
$('#search-input').on('keyup', function(e){ 
    // keyCode 13 merupakan code Enter, dapat dicari https://keycode.info
    if(e.keyCode === 13) { 
        searchMovie();
    }
});


// modal untuk see detail, event bubling
$('#movie-list').on('click', '.see-detail', function(){
    // console.log($(this).data('id'));

    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType : 'json',
        data: {
            'apikey': '29684c34',
            'i': $(this).data('id') // mengambil ID disetiap see-detail yg diklik
        },
        // jika sukses ajaxnya dikirim, maka jalankan fungsi hasil
        success: function(movie){
            // jika data berhasil diambil
            if(movie.Response == "True") {
                
                $('.modal-body').html(`
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="`+ movie.Poster +`" class="img-fluid">
                                </div>
                                <div class="col-md-8">
                                    <ul class="list-group">
                                    <li class=list-group-item"><h3>`+ movie.Title +`</h3></li>
                                    <li class=list-group-item">Year : `+ movie.Year +`</li>
                                    <li class=list-group-item">Released : `+ movie.Released +`</li>
                                    <li class=list-group-item">Duration : `+ movie.Runtime +`</li>
                                    <li class=list-group-item">Genre : `+ movie.Genre +`</li>
                                    <li class=list-group-item">Director : `+ movie.Director +`</li>
                                    <li class=list-group-item">Actors : `+ movie.Actors +`</li>
                                    <li class=list-group-item">Plot : `+ movie.Plot +`</li>
                                </ul>
                            </div>
                        </div>
                `)
                // mengosongkan text di form input
                $('#search-input').val('');
            } else {
                $('#movie-list').html(`
                    <div class="col">
                        <div class="alert alert-primary" role="alert">
                            ` + result.Error + `
                        </div>
                    </div>
                `)
            }
        }
    });
});