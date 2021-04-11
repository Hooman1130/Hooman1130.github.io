if (document.location.href.includes('?')) {
    document.location.href = document.location.href.slice(document.location.href.indexOf('?')+1);
}