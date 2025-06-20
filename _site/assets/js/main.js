function loadYoutube(event) {
  const container = event.currentTarget.closest(".video-wrapper");
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/8JSfjuAfxE0?autoplay=1&vq=hd1080";
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
