window.onload = function(){

    	var name = [
    	"Emma Hannisa",
    	"Oktavianti Siahaan",
    	"Daniel Panggabean",
    	"Dian Sianturi",
    	"Hendro Prabowo T",
    	"Adrian Sirait",
        ];
    	var book = [
    	"Wonder : You can't blend in where you were born to stand out",
    	"HTML : What is HTML? ",
    	"Do You Love HTML? Yes, I Think",
    	];
    	var penulis = [
    	"Emma",
    	"Hannisa",
    	"Nainggolan",
    	];
        var category = [
            "Comic",
            "Novel",
            "Edu",
            "magazine",
        ];
    	
    	var i; var j; var k;

        var authors =document.getElementById("author1");
    	for(i=0;i< name.length;i++)
    	{
        	authors.innerHTML +='<li><span><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_xtVfb9oZ3ct7oq1KpRf7Nr3Fg85R8b79MtzqWxDkEVLEfqGPA" class="auth" alt=""></span><span>'+(name[i])+'</span></li>';

    	}

    	var highlight =document.getElementById("boty");
    	for(j=0;j< book.length;j++){
    		highlight.innerHTML += '<li><div class="row"><div class="col-md-3"><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTJfITk50F1tHkQMisrf8eAOfwXhRVpcFsOFr8dmYXy4DWeOSwQ" class="book" alt="Some picture"></div><div class="col-md-9"><b>'+(book[j])+'</b><p>by '+penulis[j]+'</p></div></div></li>'
    	}

        var kategori =document.getElementById("category");
        for(k=0;k< category.length;k++){
            kategori.innerHTML += '<a class="dropdown-item" href=\"#">'+(category[k])+'</a>'
        }
    };

    function click(){
            location.href = '';
    };