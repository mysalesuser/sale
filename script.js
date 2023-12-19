function Index(){
    var preloader=document.getElementById("preloader");
  var index=document.getElementById("index")
index.style.display="none"
    setTimeout(()=>{
preloader.style.display="none";
index.style.display="block"
    },3000);




      var latestproduct = JSON.parse(shop);
               

                var section = document.getElementById('latest');



                for(var i = 0;i < 8; i++)
                {

                    var product=latestproduct[i].product;
                    var amount=latestproduct[i].amount;
                    var image=latestproduct[i].img;
                    section.innerHTML +=`  

                   <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals animate__animated animate__fadeInUp">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" style="background:url(${image});background-size:cover;object-fit:contain;">
                            <span class="label">New</span>
                            <ul class="product__hover">
                                <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                <li><a href="#"><i class="fa fa-reorder"></i> <span>Compare</span></a></li>
                                <li><a href="#"><i class="fa fa-search"></i></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>${product}</h6>
                            <a href="./cart.html" class="add-cart">+ Place Order</a>
                            <div class="rating">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <h5>GHC ${amount}</h5>
                            <div class="product__color__select">
                                <label for="pc-1">
                                    <input type="radio" id="pc-1">
                                </label>
                                <label class="active black" for="pc-2">
                                    <input type="radio" id="pc-2">
                                </label>
                                <label class="grey" for="pc-3">
                                    <input type="radio" id="pc-3">
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                    `;
                }


}

function prod(){

var productname=document.getElementById("product").value;

document.getElementById("view").innerHTML=productname;
}

function Left(){
    window.history.back();
}