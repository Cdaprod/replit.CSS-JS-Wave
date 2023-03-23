const animateBubble = x => {
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.style.left = `${x}px`;
  const wrapper = document.getElementById("bubble-wrapper");
  wrapper.appendChild(bubble);
  setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX);
