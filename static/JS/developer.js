// jQuery( document ).ready(function($) {
//     $(".load-more").find( '.icon' ).css('display', 'none');
//     $(".load-more").find('.text').css('display', 'none');

//     var ppp = 6; // Post per page
//     var pageNumber = 1;

//     function load_posts(){
//         pageNumber++;
//         var str = 'pageNumber=' + pageNumber + '&ppp=' + ppp + '&action=zymr_news_post_ajax';
//         $.ajax({
//             type: "POST",
//             dataType: "json",
//             url: ZYMR.ajaxurl,
//             data: str,
//             success: function(data){
//                 var $data = $(data);
//                 if($data.length){
//                     $(".load-more").find( '.icon' ).css('display', 'block');
//                     $(".load-more").find('.text').css('display', 'block');
//                     setTimeout(function(){ 
//                         $(".masorny-grid").append($data);
//                         $('.masorny-grid').isotope('reloadItems').isotope();
//                     }, 3000);
                    
//                 } else{
//                     $(".load-more").find( '.icon' ).css('display', 'none');
//                     $(".load-more").find('.text').css('display', 'none');
//                 }
//             },

//         });
//         return false;
//     }

//     var award_ppp = 6; // Post per page
//     var award_pageNumber = 1;

//     function award_load_posts(){
//         award_pageNumber++;
//         var str = 'pageNumber=' + award_pageNumber + '&ppp=' + award_ppp + '&action=zymr_award_post_ajax';
//         $.ajax({
//             type: "POST",
//             dataType: "json",
//             url: ZYMR.ajaxurl,
//             data: str,
//             success: function(data){
//                 var $data = $(data);
//                 if($data.length){
//                     $(".load-more").find( '.icon' ).css('display', 'block');
//                     $(".load-more").find('.text').css('display', 'block');
//                     setTimeout(function(){ 
//                        $(".award-list").find('.row').append($data);
//                     }, 3000);
//                 } else{
//                     $(".load-more").find( '.icon' ).css('display', 'none');
//                     $(".load-more").find('.text').css('display', 'none');
//                 }
//             },

//         });
//         return false;
//     }

//    /* $(".load-more").on("click",function(){ // When btn is pressed.
//         //$(".load-more").attr("disabled",true); // Disable the button, temp.
//         $(".load-more").find( '.icon' ).css('display', 'none');
//         $(".load-more").find('.text').css('display', 'none');
//         load_posts();
//         //award_load_posts();
//         $(this).insertAfter('.grid'); // Move the 'Load More' button to the end of the the newly added posts.
//     });
// */
//     $(document).on('scroll', function(){
//         if($('body').scrollTop()+$(document).height() > $('footer').offset().top){
//             var newsCheckClass  = jQuery('body').hasClass('page-template-news-and-events');
//             var newsTotalpost  = jQuery( '.news-event-list' ).find('.masorny-grid').attr('data-total-post');
//             var newsCountdiv = jQuery( '.news-event-list' ).find( '.grid-item' ).length;
//             if( newsCheckClass == true && newsCountdiv < newsTotalpost ){
//                load_posts();
//             }
//             var awardCheckClass  = jQuery('body').hasClass('page-template-award-recognition');
//             var awardTotalpost  = jQuery( '.award-list' ).find('.row').attr('data-total-post');
//             var awardCountdiv = jQuery( '.award-list' ).find( '.items' ).length;
//             if( awardCheckClass == true && awardCountdiv < awardTotalpost ){
//                 award_load_posts();
//             }

//             // Change Post Order
//             $('.masorny-grid').isotope({ sortBy: 'date' });
//         }
//     });

//     jQuery( '#case_study_filter' ).on( "change", function(){
//         var filter_value = jQuery(this).val();
//         jQuery('#case_study_filter').find('option').each(function() {
//             var getOptionTaglink = jQuery(this).attr('data-taglink');
//             var getOptionVal = jQuery(this).val();
//             if( filter_value == getOptionVal ){
//                 window.location.href = getOptionTaglink;    
//             }
//         });
//     });

//     /*function CheckTagPage(){
//         var pageURL = $(location).attr("href");
//         var CheckTagLink = ( pageURL.indexOf('/tag/') != -1 );
//         if( CheckTagLink == true ){
//             jQuery('#case_study_filter').find('option').each(function() {
//                 var getOptiontaglink = jQuery(this).attr('data-taglink');
//                 var getOptionVal= jQuery(this).val();
//                 if( pageURL == getOptiontaglink ){
//                     jQuery(this).attr("selected","selected");
//                     zymr_case_study_filter(getOptionVal);
//                 }
//             });
//         }
//     }*/
//     /*jQuery( '.all-filter' ).click( function(){
//         var filter_value = 'all';
//         jQuery('#case_study_filter').find('option').each(function() {
//             var getOptionVal = jQuery(this).val();
//             if( filter_value == getOptionVal ){
//                 window.location.href = ZYMR.casestudy_url;    
//             }
//         });
//         zymr_case_study_filter(filter_value);
//     });*/

//     /*function zymr_case_study_filter( filter_value ){
//         var data = {
//                     term_id: filter_value,
//                     action: 'zymr_case_study_filter',
//         }
//         $.post( ZYMR.ajaxurl, data, function( response ) {
//            jQuery( '.case-study-list' ).find( '.row div' ).remove();
//            jQuery( '.case-study-list' ).find( '.row' ).html( response );
//         }, 'json' )
//         .fail( function() {
//           alert('something went wrong please try again');
//         } );
//     }*/

//     //CF7 form redirect thank you page
//     // document.addEventListener( 'wpcf7mailsent', function( event ) {
//     //     window.location = ZYMR.thank_url;
//     // }, false );

//     // White Paper Modal Form Data Pass Into CF7.
//     $(document).on('click', '.white-paper-modal', function(){
//         var dataPostId      = $(this).data( 'post-id' );
//         var dataPostTitle   = $(this).data( 'post-title' );
//         var dataDocumentUrl = $(this).data( 'document-url' );
//         var curentPostType  = $(this).data( 'post_type' );
        
//         $( '.data_post_id' ).val( dataPostId );
//         $( '.data_post_title' ).val( dataPostTitle );
//         $( '.data_document_url' ).val( dataDocumentUrl );
//         $( '.current_post_type' ).val( curentPostType );
//     });

//     // Guide Modal Form Data Pass Into CF7.
//     $(document).on('click', '.guide-modal', function(){
//         var dataPostId      = $(this).data( 'post-id' );
//         var dataPostTitle   = $(this).data( 'post-title' );
//         var dataDocumentUrl = $(this).data( 'document-url' );
//         var curentPostType  = $(this).data( 'post_type' );
        
//         $( '.data_post_id' ).val( dataPostId );
//         $( '.data_post_title' ).val( dataPostTitle );
//         $( '.data_document_url' ).val( dataDocumentUrl );
//         $( '.current_post_type' ).val( curentPostType );
//     });

//     // E-Book Modal Form Data Pass Into CF7.
//     $(document).on('click', '.ebook-modal', function(){
//         var dataPostId      = $(this).data( 'post-id' );
//         var dataPostTitle   = $(this).data( 'post-title' );
//         var dataDocumentUrl = $(this).data( 'document-url' );
//         var curentPostType  = $(this).data( 'post_type' );
        
//         $( '.data_post_id' ).val( dataPostId );
//         $( '.data_post_title' ).val( dataPostTitle );
//         $( '.data_document_url' ).val( dataDocumentUrl );
//         $( '.current_post_type' ).val( curentPostType );
//     });

//     // Horizontal Tab Slick JS
//     // $('.horizontal-tab-module .nav-tabs').slick({
//     //  infinite: false,
//     //  slidesToShow: 2,
//     //  variableWidth: true,
//     // });
//    /* CheckTagPage();*/
// });
