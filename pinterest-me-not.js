var NAGS_SELECTOR = ".Nags";

function rm_nags() {
    console.log("Removing pinterest nags");

    var nags = $(NAGS_SELECTOR);

    var shower_html = '<div id="id_pinterest-me-not-shower" ' +
        'style="cursor:pointer; color:#c0c0c0; text-align:center;">' +
        'Toggle Pinterest Nags</div>';
    var shower = $(shower_html)
        .on("click", function () {
            nags.toggle();
        });

    shower.insertBefore(nags);
    nags.hide();
}

// since we're running with "run_at" == "document_end" we don't have
// to put our stuff in a window.onload handler. just go for it.
rm_nags();
