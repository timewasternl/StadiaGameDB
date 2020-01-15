$(function() {

  init();


  function init(){
    $("#poster").prop( "checked", false );
    $("#players").prop( "checked", false );

    hideAtIndex(1);
    hideAtIndex(6);
  }

  $("input:checkbox").click( function() {
    var index = $("input:checkbox").index( $(this) ) + 1;

    if( $(this).is(':checked') ){
      showAtIndex(index);
    }else{
      hideAtIndex(index);
    }
  });

  function showAtIndex(index) {
    $("#data-table thead tr th:nth-child(" + index + ")").show();
    $("#data-table tbody tr td:nth-child(" + index + ")").show();
    $("#data-table tfoot tr th:nth-child(" + index + ")").show();
  }

  function hideAtIndex(index) {
    $("#data-table thead tr th:nth-child(" + index + ")").hide();
    $("#data-table tbody tr td:nth-child(" + index + ")").hide();
    $("#data-table tfoot tr th:nth-child(" + index + ")").hide();
  }

});
