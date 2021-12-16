footer.onload = function () {
  // https://web.dev/resize-observer/
  const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
      if (entry.target.constructor.name === 'HTMLBodyElement') {
        footer.style.height = footer.contentWindow.document.body.scrollHeight + 'px';
      }
    }
  })

  observer.observe(footer.contentWindow.document.body)
}
