function loadYoutube(event) {
  // ensure the click doesn't cause navigation or other handlers to interrupt
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault();
    event.stopPropagation();
  }

  // get the element that has the .video-wrapper ancestor (support clicks on child elements)
  const trigger = event.currentTarget || event.target;
  const container = trigger.closest(".video-wrapper");
  if (!container) return;

  // avoid creating a second iframe if already loaded
  if (container.querySelector('iframe')) return;
  const iframe = document.createElement("iframe");
  // include autoplay so the video starts immediately after the user click
  iframe.src = "https://www.youtube.com/embed/qz8eBPoGbUU?rel=0&modestbranding=1&autoplay=1";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.frameBorder = 0;
  iframe.style.position = "absolute";
  iframe.style.top = "0";
  iframe.style.left = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.borderRadius = "0.5rem";

  container.innerHTML = "";
  container.appendChild(iframe);
}
