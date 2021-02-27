function revealOne(id, href) {
    document.querySelector("a#"+id).setAttribute("href", href);
    console.log(href);
}
function reveal(site) {
    if (site=="yt") {
        revealOne("yt", "https://www.youtube.com/channel/UClvw_JZpf8KSN-8AMnuKJgQ");
    }
    else if (site=="twt") {
        revealOne("twt", "https://twitter.com/hoomancompooper");
    }
    else if (site=="all") {
        reveal("yt");
        reveal("twt");
    }
    else {
        console.log("Something went wrong...")
    }
}