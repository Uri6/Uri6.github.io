// load while document is ready
document.addEventListener('DOMContentLoaded', function(){
    document.body.innerHTML = `<nav role="navigation" class="nav">
                                    <ul class="nav-items">
                                        <li class="nav-item">
                                            <a href="/" class="nav-link">
                                                <span>
                                                    About
                                                </span>
                                            </a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a href="/genius-bot/" class="nav-link">
                                                <span>
                                                    Genius Bot
                                                </span>
                                            </a>
                                            <nav class="submenu">
                                                <ul class="submenu-items">
                                                    <li class="submenu-item">
                                                        <a href="/genius-bot/about/" class="submenu-link" id="about-item">
                                                            <span id="about-item-">
                                                                About
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li class="submenu-item">
                                                        <a href="/genius-bot/versions/" class="submenu-link" id="versions-item">
                                                            <span id="versions-item-">
                                                                Versions
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li class="submenu-item">
                                                        <a href="/genius-bot/report-a-bug/" class="submenu-link" id="report-item">
                                                            <span id="report-item-">
                                                                Report
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </li>
                                    </ul>
                                </nav>` + document.body.innerHTML;

    [].slice.call(document.querySelectorAll('.nav-item.dropdown')).forEach(function(el){
        el.addEventListener('click', onClick, false);
    });
});

function onClick(e){
    e.preventDefault();
    var el = this.parentNode;
    if (el.classList.contains('show-submenu')) {
        hideSubMenu(el);
        window.location.href = e.srcElement.parentNode.classList.contains("submenu-link") ? e.srcElement.parentNode.href : e.srcElement.href;
    }
    else {
        showSubMenu(el);
    }
}

function showSubMenu(el){
    el.classList.add('show-submenu');
    document.addEventListener('click', function onDocClick(e){
        e.preventDefault();
        if(el.contains(e.target)){
            return;
        }
        document.removeEventListener('click', onDocClick);
        hideSubMenu(el);
    });
}

function hideSubMenu(el){
    el.classList.remove('show-submenu');
}