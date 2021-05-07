/**
 * Get the URL to go to the edit page
 */
openEditRecord = function() {
    var editRecordUrl = "/dashboard/edit-record";
    let searchParams = new URLSearchParams(window.location.search)
    var objectID = searchParams.get('id')

    $.ajax({
        url : editRecordUrl,
        type : "POST",
        dataType: "json",
        data : {
            "id": objectID
        },
        success: function(data){
            // window.location = data.url;
            window.open(data.url, '_blank')
        },
        error:function(data){
            var myArr = JSON.parse(data.responseText);
            $.notify(myArr.message, {style: myArr.tags });
        }
    });
};

// Set sidebar to open and set top programatically to fill underneath top nav
openSidebar = function() {
    var sidebar = $('.sidebar').addClass('side-expanded');
    window.sidebar_top = sidebar.css('top');  // save original sidebar top and height
    window.sidebar_height = sidebar.css('height'); 
    sidebar.css('top', $('#titleBar').height()); // set sidebar top and height to fill screen
    sidebar.css('height', '100vh'); 
    sidebar.addClass('side-expanded');
}

setSidebarTooltipTop = function() {
    var tip = $('.btn-sidebar-tooltip');
    var btn = $('#btn-sidebar');

    tip.css('top', parseInt(btn.css('top'), 10) + btn.height()/2 - tip.height()/2);
}

$( document ).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
    }); // toggle all tooltips with defaults, except make trigger just hover instead of
        // hover+focus, so they don't stay up after click
    
    // add listener to edit record button after the document is ready
    $("#btn-edit-record").on('click', openEditRecord);
    $("#btn-edit-record[data-toggle=tooltip]").tooltip();

    // add expanded class to sidebar when expand button is clicked
    $("#btn-sidebar").on('click', openSidebar);
    $('#btn-sidebar[data-toggle="tooltip"]').tooltip({
        template: '<div class="tooltip btn-sidebar-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    }
    );
    $("#btn-sidebar").on('hover', setSidebarTooltipTop);

    // add listener to everywhere but sidebar to remove side-expanded class when clicking outside
    $(document).on("click", function(e) {
        var target = $(e.target);
        if (target.is(".sidebar, #btn-sidebar i")) {
            null; // we clicked either the sidebar button, or the sidebar itself, so do nothing
        } else if (target.parents('ul.pagination').length) {
            null; // we clicked in the pagination box, which changes it so it no longer is inside the .sidebar class, so do nothing
        } else if ((!($('.sidebar').has(target).length))) { // if target is not inside the sidebar, close the sidebar
          var sidebar = $(".sidebar");
          sidebar.removeClass("side-expanded");
          sidebar.css('top', window.sidebar_top);
          sidebar.css('height', window.sidebar_height);
        }
      });
});
