const header = document.querySelector("header");


//const footer = document.querySelector("footer");



header.innerHTML = `
	<div class="main_header header_transparent header-mobile-m">
	    <div class="header_container sticky-header">
	        <div class="container-fluid">
	            <div class="row align-items-center">
	                <div class="col-lg-2" style="display: inline-block;">
	                    <div class="logo">
	                        <a href="./"> <img src="images/logo.png" alt=""></a>
	                    </div>
	                </div>
	                <div class="col-lg-6" style="display: inline-block;">
	                    <div class="main_menu menu_two menu_position">
	                        <nav>
	                            <ul>
	                                <li><a href="./" class="">Home</a></li>
	                                <li><a href="productos.html">Productos</a></li>


	                                <!-- MENU ARRIBA PRINCIPAL -->
	                                <li><a href="nosotros.html">Nosotros</a></li>
	                                <li><a href="blog.html">Blog</a></li>
	                                <li><a href="contacto.html">Contacto</a></li>

	                            </ul>
	                        </nav>
	                    </div>
	                </div>

	                <div class="col-lg-4" style="display: inline-block;">
	                    <div class="header_top_right">
	                        <div class="header_right_info">
	                            <ul>
	                                <li class="search_box">
	                                    <a href="javascript:void(0)"><i class="fa fa-search"></i></a>
	                                    <div class="search_widget">
	                                        <form action="#">
	                                            <input type="text" placeholder="Search Your Wine...">
	                                            <button type="submit">
	                                                <i class="fa fa-search"></i>
	                                            </button>
	                                        </form>
	                                    </div>
	                                </li>
	                                <li class="header_wishlist">
	                                    <a href="#"><i class="fa fa-heart"></i><span class="item_count">4</span></a>
	                                </li>
	                                <li class="mini_cart_wrapper">
	                                    <a href="javascript:void(0)"><i class="fa fa-shopping-cart"></i><span class="item_count">2</span></a>
	                                </li>
	                            </ul>
	                        </div>
	                        <div class="header_account">
	                            <ul>
	                                <li class="top_links"><a href="#"><i class="fa fa-cog"></i></a></li>
	                            </ul>
	                        </div>

	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
`;
