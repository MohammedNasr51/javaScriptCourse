/*
 * BOM [Browser Object Model]
 * - stop() - stop loading the page
 * - print() - print the current page
 * - focus() - focus the current window
 * - scroll(x, y || options) - scroll the page to the specified coordinates
 * - scrollTo(x, y || options) - scroll the page to the specified coordinates.
 * - scrollBy(x, y || options) - scroll the page by the specified amount
 * options: { top: number, left: number, behavior: 'smooth' | 'auto' }
 * 
 * scrollX - get the horizontal scroll position [alias pageXOffset]
 * scrollY - get the vertical scroll position [alias pageYOffset]
 */

let newWindow = window.open('https://google.com', '', 'width=400,height=400');
// newWindow.focus();

// window.scrollTo({
//     top:2000,
//     left:1000,
//     behavior: 'smooth'
// })
