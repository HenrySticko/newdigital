window.addEventListener('DOMContentLoaded', function() {
    window.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function() {
        var interstitialSlot = googletag.defineOutOfPageSlot('/147246189,21989920309/ourcodeworld.com_interstitial', googletag.enums.OutOfPageFormat.INTERSTITIAL);
        if (interstitialSlot) interstitialSlot.addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
        googletag.display(interstitialSlot);
    });
});