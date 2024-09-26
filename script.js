function showPrice(){
    document.getElementById("sliderVal").innerHTML =  document.getElementById("Price").value
}

function showShoe(){
  
    document.getElementById("feedback").innerHTML =  findShoe(document.getElementById('Brand').value, document.getElementById('Type').value, document.getElementById('Price').value)
    console.log("test")
}


function findShoe(brand,type,price){
    var feedback= "";
    if (price<=120&&brand=="Nike"&&type=="Basketball"){
        document.getElementById("image").src="Ja 1s.jpg";
        feedback="JA 1";
    }
    else if (price>=120&&brand=="Nike"&&type=="Basketball"){
        document.getElementById("image").src="Pg 6s.jpeg"
        feedback="PG 6";
    }
    else if (price<=120&&brand=="Nike"&&type=="Cleats"){
        document.getElementById("image").src="Nike Mercurial Superfly 9s.png"
        feedback="Mercuiral Superfly 9 Academy";
    }
    else if (price>=120&&brand=="Nike"&&type=="Cleats"){
        document.getElementById("image").src="Mercurial Superfly 10 Elites.jpeg"
        feedback="Mercuiral Superfly 10 Elite";
    }
    else if (price<=120&&brand=="Nike"&&type=="Running"){
        document.getElementById("image").src="Juniper Trail 3s.jpeg"
        feedback="Juniper Trail 3";
    }
    else if (price>=120&&brand=="Nike"&&type=="Running"){
        document.getElementById("image").src="Vaporfly 3s.jpeg"
        feedback="Vaporfly 3";
    }
    else if (price<=120&&brand=="Nike"&&type=="Style"){
        document.getElementById("image").src="Nike College Off Courts.jpeg"
        feedback="College Off Court";
    }
    else if (price>=120&&brand=="Nike"&&type=="Style"){
        document.getElementById("image").src="Vomero 5s.jpeg"
        feedback="Vomero 5";
    }
    else if (price<=120&&brand=="Nike"&&type=="Comfort"){
        document.getElementById("image").src="Pandas(Low Dunks).jpeg"
        feedback="Dunk Low";
    }
    else if (price>=120&&brand=="Nike"&&type=="Comfort"){
        document.getElementById("image").src="wetcement.jpg"
        feedback="Wet Cement 4";
    } 
    else if (price<=120&&brand=="Adidas"&&type=="Basketball"){
        document.getElementById("image").src="Harden 8s.jpeg"
        feedback="Harden 8";
    }
    else if (price>=120&&brand=="Adidas"&&type=="Basketball"){
        document.getElementById("image").src="don6.avif"
        feedback="Don 6";
    }
    else if (price<=120&&brand=="Adidas"&&type=="Cleats"){
        document.getElementById("image").src="adizero eletric.1s.jpeg"
        feedback="Adizero Eletric 1";
    }
    else if (price>=120&&brand=="Adidas"&&type=="Cleats"){
        document.getElementById("image").src="adiizero eletric+s.jpeg"
        feedback="Adizero Eletric +";
    }
    else if (price<=120&&brand=="Adidas"&&type=="Running"){
        document.getElementById("image").src="supernova strides.jpeg"
        feedback="Supernova Stride";
    }
    else if (price>=120&&brand=="Adidas"&&type=="Running"){
        document.getElementById("image").src="ultraboost 1.0s.jpeg"
        feedback="Ultra Boost 1.0";
    }
    else if (price<=120&&brand=="Adidas"&&type=="Style"){
        document.getElementById("image").src="superstar shoes.jpeg"
        feedback="Superstar Shoes";
    }
    else if (price>=120&&brand=="Adidas"&&type=="Style"){
        document.getElementById("image").src="ultraboost 1.0s.jpeg"
        feedback="Ultra Boost 1.0";
    }
    else if (price<=120&&brand=="Adidas"&&type=="Comfort"){
        document.getElementById("image").src="adilette slides.jpeg"
        feedback="Adillete Slides";
    }
    else if (price>=120&&brand=="Adidas"&&type=="Comfort"){
        document.getElementById("image").src="ultraboost 1.0s.jpeg"
        feedback="Ultra Boost 1.0"
    }
    else if (price>=120&&brand=="Under Armour"&&type=="Basketball"){
        document.getElementById("image").src="Curry Flow 10s.jpeg"
        feedback="Curry Flow 10";
    }
    else if (price<=120&&brand=="Under Armour"&&type=="Basketball"){
        document.getElementById("image").src="Curry Splash 24s.jpeg"
        feedback="Curry Splash 24";
    }
    else if (price>=120&&brand=="Under Armour"&&type=="Cleats"){
        document.getElementById("image").src="ua blurs.jpeg"
        feedback="Blur 2";
    }
    else if (price<=120&&brand=="Under Armour"&&type=="Cleats"){
        document.getElementById("image").src="ua hihglight 2s.jpeg"
        feedback="Highlight 2";
    }
    else if (price<=120&&brand=="Under Armour"&&type=="Running"){
        document.getElementById("image").src="surge 4s.jpeg"
        feedback="Surge 4";
    }
    else if (price>=120&&brand=="Under Armour"&&type=="Running"){
        document.getElementById("image").src="ua velociti elite 2s.jpeg"
        feedback="Velociti Elite 2";
    }
    else if (price<=120&&brand=="Under Armour"&&type=="Style"){
        document.getElementById("image").src="curry foamtro slides.jpeg"
        feedback="Curry Foamtro Slides";
    }
    else if (price>=120&&brand=="Under Armour"&&type=="Style"){
        document.getElementById("image").src="ua slipspeed mega shoes.jpeg"
        feedback="Slipspeed Mega";
    }
    else if (brand=="Under Armour"&&type=="Comfort"){
        document.getElementById("image").src="surge 4s.jpeg"
        feedback="Surge 4";
    } 
    return feedback
    }
    


   