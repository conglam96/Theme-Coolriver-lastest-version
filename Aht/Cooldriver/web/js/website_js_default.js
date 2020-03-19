require([
	'jquery',
	'owlCarousel'
	],function($){
			$(document).ready(function(){
				
			changeValInput_minusVsPlus();
			removeClassHasInput();
			/* COMMON FUNCTION ALIGN HEIGHT */
			var width=$( window ).width(); 
			function alignHeight(selector) {
				$(selector).css('height', '');
				var minHeight = 0;
				$(selector).each(function() {
					if (minHeight < $(this).outerHeight()) {
						minHeight = $(this).outerHeight()
					}
				});
				if (minHeight > 0) {
					$(selector).css('height', minHeight);
				} 
			} 
			/* ALIGN HEIGHT ITEM */
			setTimeout(function(){
				alignHeight('.list-categories .img-item');		
				alignHeight('.list-better-way .title-better');		
				alignHeight('.list-featured-brands .list-item .item');	
				alignHeight('.catalog-category-view.page-layout-1column .column.main .product-item-info .product-item-name');
				alignHeight('.catalog-category-view.page-layout-1column .category_deals .product-item-info .product-item-name');
				alignHeight('.catalog-product-view .block.related .products-grid .product-items .product-item .product-item-details .product-item-name');
				alignHeight('.catalog-category-view.page-layout-1column .most-viewed .most-viewed-container .widget.block.block-static-block .block-content .products-grid .product-items .product-item .product-item-info .product-item-details .product-item-name');
				alignHeight('.catalog-product-view .block.related .products-grid .product-items .product-item .product-item-details .price-box');
				alignHeight('.catalog-product-view .block.block-viewed-products-grid .product-item-details .product-item-name');
				alignHeight('.catalog-product-view .block.block-viewed-products-grid .product-item-details .price-box');
				alignHeight('.aw_sbb-brand-view .bestseller_title + .products-grid .product-item-details .product-item-name');
				alignHeight('.aw_sbb-brand-view .bestseller_title + .products-grid .product-item-details .price-box');
				alignHeight('.home-top-sellers .products-grid .product-items .product-item .product-item-details .product-item-name');
				alignHeight('.home-exclusive-deals .products-grid .product-items .product-item .product-item-details .product-item-name');

				alignHeight('.page-products .deals .products-grid .product-items .product-item .product-item-details .product-item-name');
				alignHeight('.page-products .deals .products-grid .product-items .product-item .product-item-details .price-box');

				alignHeight('.catalog-product-view .block.block-viewed-products-grid .block-content .products-grid .product-items .product-item .product-item-info .product-item-details .product-item-name');

				alignHeight('.brand-landing .deals .products-grid .product-items .product-item .product-item-details .product-item-name');
				alignHeight('.brand-landing .top-seller .products-grid .product-items .product-item .product-item-details .product-item-name');

				alignHeight('.catalog-product-view .mageplaza-autorelated-block .products-grid .product-items .product-item .product-item-details .product-item-name');
				
				alignHeight('.catalog-product-view .products-grid .product-items .product-item .product-item-details .product-item-name');
				alignHeight('.catalog-product-view .products-grid .product-items .product-item .product-item-details .price-box');
			}, 500);
			$(window).resize(function() {
				setTimeout(function(){
					alignHeight('.list-categories .img-item');	
					alignHeight('.list-better-way .title-better');		
					alignHeight('.list-featured-brands .list-item .item');	
					alignHeight('.catalog-category-view.page-layout-1column .column.main .product-item-info .product-item-name');
					alignHeight('.catalog-category-view.page-layout-1column .category_deals .product-item-info .product-item-name');	
					alignHeight('.catalog-product-view .block.related .products-grid .product-items .product-item .product-item-details .product-item-name');
					alignHeight('.catalog-category-view.page-layout-1column .most-viewed .most-viewed-container .widget.block.block-static-block .block-content .products-grid .product-items .product-item .product-item-info .product-item-details .product-item-name');
					alignHeight('.catalog-product-view .block.related .products-grid .product-items .product-item .product-item-details .price-box');
					alignHeight('.aw_sbb-brand-view .bestseller_title + .products-grid .product-item-details .product-item-name');
					alignHeight('.aw_sbb-brand-view .bestseller_title + .products-grid .product-item-details .price-box');	
					alignHeight('.home-top-sellers .products-grid .product-items .product-item .product-item-details .product-item-name');
					alignHeight('.home-exclusive-deals .products-grid .product-items .product-item .product-item-details .product-item-name');

					alignHeight('.page-products .deals .products-grid .product-items .product-item .product-item-details .product-item-name');
					alignHeight('.page-products .deals .products-grid .product-items .product-item .product-item-details .price-box');

					alignHeight('.catalog-product-view .block.block-viewed-products-grid .block-content .products-grid .product-items .product-item .product-item-info .product-item-details .product-item-name');
					
					alignHeight('.brand-landing .deals .products-grid .product-items .product-item .product-item-details .product-item-name');
					alignHeight('.brand-landing .top-seller .products-grid .product-items .product-item .product-item-details .product-item-name');
					
					alignHeight('.catalog-product-view .products-grid .product-items .product-item .product-item-details .product-item-name');
					alignHeight('.catalog-product-view .products-grid .product-items .product-item .product-item-details .price-box');
				}, 500);
			});	
	
			if(width <= 767){
				if($('.sidebar-main .block-collapsible-nav').length) 
						{
							var text = $('.sidebar-main .block-collapsible-nav .block-collapsible-nav-content .nav.item.current strong').text();
							$('.sidebar-main .block-collapsible-nav .block-collapsible-nav-title strong').text(text);
						}
				$(".account .page-title-wrapper").insertBefore($(".account .sidebar.sidebar-main"));
				$(".cms-page-view .sidebar").insertBefore($(".cms-page-view .page-title-wrapper"));
				$('.cms-content-left .current_page').click(function(event) {
						$(".cms-content-left ul").slideToggle();
						$(".cms-content-left span").toggleClass('active');
						});
						var str = "/";
					var current_url = $(location).attr("href");
					var connect=current_url.concat(str);
					if($('.cms-content-left').length){
							$('.cms-content-left ul li').each(function(){
								var href = $(this).find('a').attr('href');
								if(href == connect || href== current_url ){
								var text = $(this).find('a').text();
								$('.cms-content-left .current_page').text(text);
								}
							});
					}
			}
			
			/* Click layerNavigation */
			$('.catalog-category-view .sidebar-main .filter-content .filter-options .filter-options-title').click(function(){
					$(this).toggleClass('active');
					$(this).next().slideToggle();
				});
			$('.catalogsearch-result-index .sidebar-main .filter-content .filter-options .filter-options-title').click(function(){
				$(this).toggleClass('active');
				$(this).next().slideToggle();
			});

			$('.aw_sbb-brand-view .sidebar-main .filter-content .filter-options .filter-options-title').click(function(){
				$(this).toggleClass('active');
				$(this).next().slideToggle();
			});

			$('.page-footer .ft-menu h3').click(function(){
					$(this).toggleClass('open');
					$(this).next().slideToggle();
				});

			if (width < 768)
			 {
				/* Move content header phone in mobile */
				
				$('.page-header .header.content .header-phone-mobile').insertBefore('.page-header .header.content .logo');
				$('.header-bottom-wrapper .header-bottom .minicart-wrapper').insertBefore('.page-header .header.content .block-search');
				
				/* Click Toggle Content Footer */
				$('.page-footer .ft-menu h3').click(function(){
					$(this).toggleClass('open');
					$(this).next().slideToggle();
				});
				
				/* Click Search Mobile */
				$('.page-header .header.content .block-search .block-title').click(function(){
					$(this).toggleClass('click');
					$(this).next().slideToggle();
				});
			 }

			 /* make slider for brands mobile */
			var awSbbListCategories = $('.brand-landing .list-categories ul');
			var awSbbProductsGrid = $('.brand-landing .products-grid .product-items');
			if (width < 768)
			{
				if(awSbbListCategories.length > 0){

					awSbbListCategories.addClass('owl-carousel');
					awSbbListCategories.owlCarousel({
						margin:0,
						items:1,
						loop:false,
						nav:true,
						dots: false,
						autoplay:false
					});
				}

				if(awSbbProductsGrid.length > 0){
					awSbbProductsGrid.addClass('owl-carousel');
					awSbbProductsGrid.owlCarousel({
					stagePadding: 50,
					margin:5,
					items:1,
					loop:false,
					nav:true,
					dots: false,
					autoplay:false
					});
				}
			}
			else
			{
				if(awSbbListCategories.length > 0){
					awSbbListCategories.removeClass('owl-carousel');
				}
				if(awSbbProductsGrid.length > 0){
					awSbbProductsGrid.removeClass('owl-carousel');
				}
			}
			
			/* make slider for home mobile */
			var CmsSliderHeaderTop = $('.header-top .header-top-container');
			var CmsSliderCategory = $('.cms-index-index .page-main .list-categories ul');
			var CmsSliderFeaturedBrands = $('.cms-index-index .page-main .list-featured-brands .list-item');
			var CmsSliderHomePro = $('.cms-index-index .block-content .products-grid .product-items');
			if (width < 768)
			 {
				 if(CmsSliderHeaderTop.length > 0){
					 
					 CmsSliderHeaderTop.addClass('owl-carousel');
					 CmsSliderHeaderTop.owlCarousel({
						 margin:0,
						 items:1,
						 loop:true,
						 nav:true,
						 navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
						 dots: false,
						 autoplay:false
						});
					}
					if(CmsSliderCategory.length > 0){
						
						CmsSliderCategory.addClass('owl-carousel');
						CmsSliderCategory.owlCarousel({
							stagePadding: 50,
							margin:0,
							loop:false,
							nav:true,
							dots: false,
							autoplay:false,
							responsive: {
					          0: {
					            items: 1
					          },
					          480: {
					            items: 2
					          }
					        }
						});
					}
					if(CmsSliderHomePro.length > 0){

						CmsSliderHomePro.addClass('owl-carousel');
						CmsSliderHomePro.owlCarousel({
							stagePadding: 50,
							margin:5,
							loop:true,
							nav:true,
							dots: false,
							autoplay:false,
							responsive: {
					          0: {
					            items: 1
					          },
					          576: {
					            items: 2
					          }
					        }
						});
					}
					if(CmsSliderFeaturedBrands.length > 0){

						CmsSliderFeaturedBrands.addClass('owl-carousel');
						CmsSliderFeaturedBrands.owlCarousel({
							stagePadding: 50,
							margin:0,
							loop:false,
							nav:true,
							dots: false,
							autoplay:false,
							responsive: {
					          0: {
					            items: 2
					          },
					          576: {
					            items: 3
					          }
					        }
						});
					}
			 }
			 else
			 {
				if(CmsSliderHeaderTop.length > 0){
					CmsSliderHeaderTop.removeClass('owl-carousel');
				}
				if(CmsSliderCategory.length > 0){
					CmsSliderCategory.removeClass('owl-carousel');
				}
				if(CmsSliderFeaturedBrands.length > 0){
					CmsSliderFeaturedBrands.removeClass('owl-carousel');
				}
				if(CmsSliderHomePro.length > 0){
					CmsSliderHomePro.removeClass('owl-carousel');
				}
			 }

			 /* made slider for most viewed product */
			var mostViewedProduct = $('.most-viewed .most-viewed-container .products-grid .product-items');
			if (width < 768)
			{

				if(mostViewedProduct.length > 0)
				{
					mostViewedProduct.addClass('owl-carousel');
					mostViewedProduct.owlCarousel({
						stagePadding: 50,
						margin:5,
						items:1,
						loop:false,
						nav:true,
						dots: false,
						autoplay:false
					});
				}
			}else{
				if(mostViewedProduct.length > 0){
					mostViewedProduct.removeClass('owl-carousel');
				}
			}
			
			});

			/* Click filter in cate mobile */
			$('.catalog-category-view .sidebar-main .filter-title strong').click(function(){
				$(this).toggleClass('click');
				$(this).parent().next().addClass('active');
			});
			
			// Close filter mobile
			$('.catalog-category-view .sidebar-main .close-filter').click(function(){
				$(this).closest('.filter-content').removeClass('active');
			});

			/* Click filter in cate mobile */
			$('.aw_sbb-brand-view .sidebar-main .filter-title strong').click(function(){
				$(this).toggleClass('click');
				$(this).parent().next().addClass('active');
			});
			
			// Close filter mobile
			$('.aw_sbb-brand-view .sidebar-main .close-filter').click(function(){
				$(this).closest('.filter-content').removeClass('active');
			});
			
			/* Align Height Mega Menu */
			function alignHeightMegamenu(){
				var ulMenuItems = $(".menu-container.horizontal-menu .megamenu-main-content>.section-item-content>.menu-container>.menu.vertical-left>ul>li>ul.column1");
				var maxUlHeight = 0;
				$.each( ulMenuItems, function( i, val ) {
					$(".nav-sections>.nav-sections-items>.section-item-content>.menu-container>.menu>ul>li>ul").show();
					$(this).show();
					if(maxUlHeight < val.offsetHeight){
						maxUlHeight = val.offsetHeight;
					}
					$(".nav-sections>.nav-sections-items>.section-item-content>.menu-container>.menu>ul>li>ul").css('display', '');
					$(this).css('display', '');
				});

				$(".nav-sections .menu.vertical-left").height(maxUlHeight);
			}

			alignHeightMegamenu();

			$(window).resize(function() {
					alignHeightMegamenu();		
			});

			function dropdownQtyCart(){
				let input = $('.catalog-product-view .product-info-main .box-tocart .fieldset .field.qty #qty');
				if(input.length > 0){
					$('.js-example-basic-multiple').select2();
				}
			}
			function changeValInput_minusVsPlus(){
				var boxCart = $('.catalog-product-view .product-info-main .box-tocart');
				changeValInput(boxCart);
				
				var boxMiniCart = $('.page-wrapper .header-bottom-wrapper .minicart-wrapper .block-minicart');
				changeValInput(boxMiniCart);
			}
			function changeValInput($box){
				if($box.length > 0){
					$box.on('click','.minus',function(){
						let $input = $(this).parent().find('input');
						let count = parseInt($input.val()) - 1;
						count = count < 1 ? 1 : count;
						$input.val(count);
						$input.change();
						return false;
					});
					$box.on('click','.plus',function(){
						let $input = $(this).parent().find('input');
						$input.val(parseInt($input.val()) + 1);
						$input.change();
						return false;
					});
				}
			}
			function removeClassHasInput() {
				let box = $('#algolia-searchbox');
				if(box.length > 0){
					$(document).click(function(e) { 
						if(box.hasClass('has-input')){
							let list = $('.page-main #algolia-autocomplete-container .aa-dropdown-menu');
							$target = $(e.target);
							if(!list.has(e.target).length && !list.is(e.target)){
								box.removeClass('has-input');
							}
						}
					});
				}
			}
	}); 