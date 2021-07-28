import { DOM } from "../../constants";

class OWLightbox {
    constructor() {
        this.start();
    }

    start = () => {
        if (DOM.body.classList.contains("no-lightbox")) {
            return;
        }

        this.#addLightboxClass();
        this.#addPhotoSwipeToDOM();
        this.#init();
    };

    #init = () => {
        // Post gallery
        if (document.querySelector(".gallery-format")) {
            this.initPhotoSwipeFromDOM(".gallery-format");
        }

        // Image lightbox
        document.querySelectorAll("a.oceanwp-lightbox")?.forEach((link) => {
            if (
                !link.getAttribute("data-elementor-open-lightbox") &&
                !link.classList.contains("yith_magnifier_thumbnail") &&
                !link.classList.contains("gg-link")
            ) {
                link.querySelector("img").addEventListener("click", this.openLightbox);
            }
        });
    };

    openLightbox = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const pswpElement = document.querySelectorAll(".pswp")[0];
        const link = event.target.parentNode;
        const src = link.getAttribute("href");
        const width = !!link.dataset.width ? Number.parseInt(link.dataset.width) : 1024;
        const height = !!link.dataset.height ? Number.parseInt(link.dataset.height) : 768;

        const imageLightbox = new PhotoSwipe(
            pswpElement,
            PhotoSwipeUI_Default,
            [
                {
                    src: src,
                    w: width,
                    h: height,
                },
            ],
            {
                bgOpacity: 0.85,
                showHideOpacity: true,
            }
        );

        imageLightbox.init();
    };

    #addLightboxClass = () => {
        document.querySelectorAll("body .entry-content a, body .entry a")?.forEach((link) => {
            if (!!link.querySelector("img")) {
                const imageFormats = this.#imageFormats();
                let imageFormatsMask = 0;

                imageFormats.forEach((imageFormat) => {
                    imageFormatsMask += String(link.getAttribute("href")).indexOf("." + imageFormat);
                });

                if (imageFormatsMask === -13) {
                    link.classList.add("no-lightbox");
                }

                if (
                    !(
                        link.classList.contains("no-lightbox") ||
                        link.classList.contains("gallery-lightbox") ||
                        link.parentNode.classList.contains("gallery-icon") ||
                        link.classList.contains("woo-lightbox") ||
                        link.classList.contains("woo-thumbnail") ||
                        link.parentNode.classList.contains("woocommerce-product-gallery__image")
                    )
                ) {
                    link.classList.add("oceanwp-lightbox");
                }

                if (!link.classList.contains("no-lightbox") && link.parentNode.classList.contains("gallery-icon")) {
                    link.classList.add("gallery-lightbox");
                }
            }
        });
    };

    #imageFormats = () => {
        return ["bmp", "gif", "jpeg", "jpg", "png", "tiff", "tif", "jfif", "jpe", "svg", "mp4", "ogg", "webm"];
    };

    #addPhotoSwipeToDOM = () => {
        if (!!document.querySelector(".pswp")) {
            return;
        }

        DOM.body.insertAdjacentHTML(
            "beforeend",
            `<!-- Root element of PhotoSwipe. Must have class pswp. -->
            <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
                <!-- Background of PhotoSwipe. 
                    It's a separate element as animating opacity is faster than rgba(). -->
                <div class="pswp__bg"></div>

                <!-- Slides wrapper with overflow:hidden. -->
                <div class="pswp__scroll-wrap">
                    <!-- Container that holds slides. 
                        PhotoSwipe keeps only 3 of them in the DOM to save memory.
                        Don't modify these 3 pswp__item elements, data is added later on. -->
                    <div class="pswp__container">
                        <div class="pswp__item"></div>
                        <div class="pswp__item"></div>
                        <div class="pswp__item"></div>
                    </div>

                    <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
                    <div class="pswp__ui pswp__ui--hidden">
                        <div class="pswp__top-bar">
                            <!--  Controls are self-explanatory. Order can be changed. -->
                            <div class="pswp__counter"></div>

                            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                            <button class="pswp__button pswp__button--share" title="Share"></button>
                            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                            <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
                            <!-- element will get class pswp__preloader--active when preloader is running -->
                            <div class="pswp__preloader">
                                <div class="pswp__preloader__icn">
                                <div class="pswp__preloader__cut">
                                    <div class="pswp__preloader__donut"></div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                            <div class="pswp__share-tooltip"></div> 
                        </div>

                        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                        </button>

                        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                        </button>

                        <div class="pswp__caption">
                            <div class="pswp__caption__center"></div>
                        </div>
                    </div>
                </div>
            </div>`
        );
    };

    initPhotoSwipeFromDOM = (gallerySelector) => {
        // parse slide data (url, title, size ...) from DOM elements
        // (children of gallerySelector)
        var parseThumbnailElements = function (el) {
            var thumbElements = el.childNodes,
                numNodes = thumbElements.length,
                items = [],
                linkEl,
                size,
                item;

            for (var i = 0; i < numNodes; i++) {
                linkEl = thumbElements[i]; // <a> element

                // include only element nodes
                if (linkEl.nodeType !== 1) {
                    continue;
                }

                const src = linkEl.getAttribute("href");
                const width = !!linkEl.dataset.width ? Number.parseInt(linkEl.dataset.width) : 1024;
                const height = !!linkEl.dataset.height ? Number.parseInt(linkEl.dataset.height) : 768;

                size = [width, height];

                // create slide object
                item = {
                    src: src,
                    w: width,
                    h: height,
                };

                if (linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute("src");
                }

                item.el = linkEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }

            return items;
        };

        // find nearest parent element
        var closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };

        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function (e) {
            e = e || window.event;
            var eTarget = e.target || e.srcElement;

            // find root element of slide
            var clickedListItem = closest(eTarget, function (el) {
                return el.tagName && el.tagName.toUpperCase() === "A" && el.classList.contains("gallery-lightbox");
            });

            if (!clickedListItem) {
                return;
            }

            e.preventDefault ? e.preventDefault() : (e.returnValue = false);
            e.stopPropagation();

            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            var clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;

            for (var i = 0; i < numChildNodes; i++) {
                if (childNodes[i].nodeType !== 1) {
                    continue;
                }

                if (childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }

            if (index >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe(index, clickedGallery, false);
            }
            return false;
        };

        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function () {
            var hash = window.location.hash.substring(1),
                params = {};

            if (hash.length < 5) {
                return params;
            }

            var vars = hash.split("&");
            for (var i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                    continue;
                }
                var pair = vars[i].split("=");
                if (pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }

            if (params.gid) {
                params.gid = parseInt(params.gid, 10);
            }

            return params;
        };

        var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll(".pswp")[0],
                gallery,
                options,
                items;

            items = parseThumbnailElements(galleryElement);

            // define options (if needed)
            options = {
                // define gallery index (for URL)
                galleryUID: galleryElement.getAttribute("data-pswp-uid"),

                getThumbBoundsFn: function (index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect();

                    return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                },
            };

            // PhotoSwipe opened from URL
            if (fromURL) {
                if (options.galleryPIDs) {
                    // parse real index when custom PIDs are used
                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }

            // exit if index not found
            if (isNaN(options.index)) {
                return;
            }

            if (disableAnimation) {
                options.showAnimationDuration = 0;
                options.hideAnimationDuration = 0;
            }

            options.bgOpacity = 0.85;
            options.showHideOpacity = true;

            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };

        // loop through all gallery elements and bind events
        var galleryElements = document.querySelectorAll(gallerySelector);

        for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute("data-pswp-uid", i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
        }

        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
            openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        }
    };
}

export default OWLightbox;
