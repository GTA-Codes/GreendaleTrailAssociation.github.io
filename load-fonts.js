


// we want to use the CSS Font Loading API to load the font. Here, we can use Promise.all to load all fonts simultaneously. When we do this, we’re grouping repaints.




// function loadFonts() {
//     if (sessionStorage.fontsLoaded) {
//         document.documentElement.classList.add('fonts-loaded')
//         return
//     }

//     if ('fonts' in document) {
//         Promise.all([
//             document.fonts.load('700 1em Lato'),
//         ]).then(_ => () {
//             document.documentElement.classList.add('fonts-loaded')
//         })
//     }
// }

// loadFonts();