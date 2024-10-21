// This file will add target='_blank' attribute to 
// sharepoint calendar link in the menu

// external links in top bar:
$('nav#nav a[href*="http"]').each(function() {
    $(this).attr('target', '_blank');
});

// external links in drop menus bar:
$('ul.dropotron a[href*="http"]').each(function() {
    $(this).attr('target', '_blank');
});

$(document).ready(function() {
    // link in side bar (when screen is narrow):
    // only works if you wait until everything has been loaded 
    // (unlike above for the top menu that works right away)
    $("<i class='fa fa-calendar menu-fa'></i>").insertAfter('div#navPanel a[href*="default.aspx"]> span');
    $("<i class='fa fa-search menu-fa'></i>").insertAfter('div#navPanel a[href*="explore/keyword"]> span');
    $('div#navPanel a[href*="http"]').each(function() {
        $(this).attr('target', '_blank');
    });
});




// add id attributes to menus
$('li > a:contains("Browse and Search")')
    .attr("id", "menu-browse")
$('li > a:contains("MARLIN")')
    .attr("id", "menu-calendar")
$('li > a:contains("NEMO")')
    .attr("id", "menu-nemo")
$('li > a:contains("SharePoint")')
    .attr("id", "menu-sharepoint")
$('li > a:contains("Tutorial")')
    .attr("id", "menu-tutorial")
$('li > a:contains("Help")')
    .attr("id", "menu-help")


// Shepherd tutorial code
function create_tour() {

    var menu_tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            when: { show() { showStepNumber() } }
        }
    });

    showStepNumber = () => {
        $("<span style='font-size: small'></span>")
            .insertAfter('.shepherd-footer .btn-default')
            .html(`${menu_tour.steps.indexOf(menu_tour.currentStep) + 1}/${menu_tour.steps.length}`);
    }

    menu_tour.addStep({
        id: 'tut-welcome',
        title: 'Welcome to NexusLIMS',
        text: 'This tutorial will introduce you to the main features of the NexusLIMS system available from the home page. For further details on other pages, make sure to click the <span style="color: #316982"><i class="fa fa-question-circle menu-fa" style=""></i> Tutorial</span> link in the top menu bar to get a customized introduction to the content of that page. Click <em>Next</em> for a brief tour of the features of this page. You can also use the keyboard arrow keys to navigate through the tutorial.',
        buttons: [{
                text: '<i class="fa fa-arrow-left menu-fa"></i> Back',
                classes: 'btn btn-default',
                disabled: true,
                action: menu_tour.back,
                label: 'Back'
            },
            {
                text: 'Next <i class="fa fa-arrow-right menu-fa"></i>',
                classes: 'btn btn-primary',
                action: menu_tour.next,
                label: 'Next'
            }
        ],
    });

    menu_tour.addStep({
        id: 'tut-browse-records',
        title: 'Browse records',
        text: 'Click here to browse and query the experimental records in the NexusLIMS database',
        attachTo: {
            element: '#menu-browse',
            on: 'bottom'
        },
        buttons: [{
                text: '<i class="fa fa-arrow-left menu-fa"></i> Back',
                classes: 'btn btn-default',
                disabled: false,
                action: menu_tour.back,
                label: 'Back'
            },
            {
                text: 'Next <i class="fa fa-arrow-right menu-fa"></i>',
                classes: 'btn btn-primary',
                action: menu_tour.next,
                label: 'Next'
            }
        ],
    });

    menu_tour.addStep({
        id: 'tut-browse-records-tile',
        title: 'Browse records',
        text: 'You can also access the record browser through the link below',
        attachTo: {
            element: '#app_search',
            on: 'top'
        },
        buttons: [{
                text: '<i class="fa fa-arrow-left menu-fa"></i> Back',
                classes: 'btn btn-default',
                disabled: false,
                action: menu_tour.back,
                label: 'Back'
            },
            {
                text: 'Next <i class="fa fa-arrow-right menu-fa"></i>',
                classes: 'btn btn-primary',
                action: menu_tour.next,
                label: 'Next'
            }
        ],
    });

    menu_tour.addStep({
        id: 'tut-calendar',
        title: 'Go to reservation system',
        text: 'Click here to be brought to the MARLIN reservation calendar system for Nexus instruments',
        attachTo: {
            element: '#menu-calendar',
            on: 'bottom'
        },
        buttons: [{
                text: '<i class="fa fa-arrow-left menu-fa"></i> Back',
                classes: 'btn btn-default',
                action: menu_tour.back,
                label: 'Back'
            },
            {
                text: 'Next <i class="fa fa-arrow-right menu-fa"></i>',
                classes: 'btn btn-primary',
                action: menu_tour.next,
                label: 'Next'
            }
        ],
    });

    menu_tour.addStep({
        id: 'tut-nemo',
        title: 'Go to NEMO reservation system',
        text: 'Click here to be brought to the NEMO reservation system for CNST instruments',
        attachTo: {
            element: '#menu-nemo',
            on: 'bottom'
        },
        buttons: [{
                text: '<i class="fa fa-arrow-left menu-fa"></i> Back',
                classes: 'btn btn-default',
                action: menu_tour.back,
                label: 'Back'
            },
            {
                text: 'Next <i class="fa fa-arrow-right menu-fa"></i>',
                classes: 'btn btn-primary',
                action: menu_tour.next,
                label: 'Next'
            }
        ],
    });

    menu_tour.addStep({
        id: 'tut-sharepoint',
        title: 'Go to the EM community SharePoint site',
        text: 'Click here to be brought to the Nexus Electron Microscopy Community SharePoint site (for documents, announcements, etc.)',
        attachTo: {
            element: '#menu-sharepoint',
            on: 'bottom'
        },
        buttons: [{
                text: '<i class="fa fa-arrow-left menu-fa"></i> Back',
                classes: 'btn btn-default',
                action: menu_tour.back,
                label: 'Back'
            },
            {
                text: 'Next <i class="fa fa-arrow-right menu-fa"></i>',
                classes: 'btn btn-primary',
                action: menu_tour.next,
                label: 'Next'
            }
        ],
    });

    // menu_tour.addStep({
    //     id: 'tut-tutorial',
    //     title: 'Explanations of each page',
    //     text: 'This link runs <em>this</em> tutorial, but will load a customized introduction on the other pages within the application. If you are uncertain about a certain page\'s content, click this link to take a guided tour.',
    //     attachTo: {
    //         element: '#menu-tutorial',
    //         on: 'bottom'
    //     },
    //     buttons: [{
    //             text: '<i class="fa fa-arrow-left menu-fa"></i> Back',
    //             classes: 'btn btn-default',
    //             action: menu_tour.back,
    //             label: 'Back'
    //         },
    //         {
    //             text: 'Next <i class="fa fa-arrow-right menu-fa"></i>',
    //             classes: 'btn btn-primary',
    //             action: menu_tour.next,
    //             label: 'Next'
    //         }
    //     ],
    // });

    menu_tour.addStep({
        id: 'tut-help',
        title: 'Help menu',
        text: 'Click here to open the help menu, which contains additional resources',
        attachTo: {
            element: '#menu-help',
            on: 'bottom'
        },
        buttons: [{
                text: '<i class="fa fa-arrow-left menu-fa"></i> Back',
                classes: 'btn btn-default',
                action: menu_tour.back,
                label: 'Back'
            },
            {
                text: 'Next <i class="fa fa-arrow-right menu-fa"></i>',
                classes: 'btn btn-primary',
                action: menu_tour.next,
                label: 'Next'
            }
        ],
    });

    menu_tour.addStep({
        id: 'tut-nx-doc',
        title: 'Detailed documentation',
        text: 'Click here to be brought to the NexusLIMS documentation page, which contains detailed information about how experiment information is collected, how records are created, etc.',
        beforeShowPromise: () => {
            if ($('ul.dropotron.level-0.left').is(':visible')) {
                $('#menu-help').click();
                $('#menu-help').click();
            } else {
                $('#menu-help').click();
            }
            return Promise.resolve($('ul.dropotron.level-0.left').show())
        },
        attachTo: {
            element: $('ul.dropotron > li > a:contains("NexusLIMS Documentation")')[0],
            on: 'left'
        },
        canClickTarget: false,
        buttons: [{
                text: '<i class="fa fa-arrow-left menu-fa"></i> Back',
                classes: 'btn btn-default',
                action: menu_tour.back,
                label: 'Back'
            },
            {
                text: 'Next <i class="fa fa-arrow-right menu-fa"></i>',
                classes: 'btn btn-primary',
                action: menu_tour.next,
                label: 'Next'
            }
        ],
    });

    menu_tour.addStep({
        id: 'tut-api-doc',
        title: 'API documentation',
        text: 'Click here to be brought to the NexusLIMS CDCS API documentation page, which describes how to programmatically access the information in the NexusLIMS database',
        beforeShowPromise: () => {
            if ($('ul.dropotron.level-0.left').is(':visible')) {
                $('#menu-help').click();
                $('#menu-help').click();
            } else {
                $('#menu-help').click();
            }
            return Promise.resolve($('ul.dropotron.level-0.left').show())
        },
        attachTo: {
            element: $('ul.dropotron > li > a:contains("API Documentation")')[0],
            on: 'left'
        },
        canClickTarget: false,
        buttons: [{
                text: '<i class="fa fa-arrow-left menu-fa"></i> Back',
                classes: 'btn btn-default',
                action: menu_tour.back,
                label: 'Back'
            },
            {
                text: 'End',
                classes: 'btn btn-danger',
                action: menu_tour.next,
                label: 'End'
            }
        ],
    });

    function clean_up_on_exit() {
        // if help menu is still open, close it
        if ($('ul.dropotron.level-0.left').is(':visible')) {
            $('#menu-help').click();
        }
    }
    
    // set clean up function to trigger when tutorial is closed
    menu_tour.on('complete', clean_up_on_exit);
    menu_tour.on('cancel', clean_up_on_exit);
    menu_tour.on('hide', clean_up_on_exit);

    $('.shepherd-modal-overlay-container').on('click', () => menu_tour.cancel());
    menu_tour.start()
}


$(document).ready(function() {
    // if there is more than one click handler on the tutorial menu link, 
    // we've already added one from the XSLT, so don't rebind it
    if ( $._data($('a#menu-tutorial')[0], 'events')['click'].length > 1 ){
       // do nothing
    } else {
        // otherwise there's only one handler (the default), so bind this tutorial
        $('a#menu-tutorial').on('click', () => create_tour());
    }
    $('a#menu-tutorial').on('click', () => create_tour());
    $('#homepage-tutorial').on('click', () => create_tour());
});
