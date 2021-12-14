navbar.onload = function () {
  // https://web.dev/resize-observer/
  const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
      if (entry.target.constructor.name === 'HTMLBodyElement') {
        navbar.style.height = navbar.contentWindow.document.body.scrollHeight + 'px';
      }
    }
  })

  observer.observe(navbar.contentWindow.document.body)
}
