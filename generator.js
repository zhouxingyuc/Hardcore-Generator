//Final JavaScript
const generateQuote = function() {
    const quotes = [
    {
        quote: "1st fret",
        
    },
    {
        quote: "2nd fret",
        
    },
    {
        quote: "3rd fret",
        
    },
    {
        quote: "4th fret",
        
    },
    {
        quote: "5th fret",
        
    },
    {
        quote: "6th fret",
        
    },
    {
        quote: "7th fret",
        
    },
    {
        quote: "8th fret",
        
    },
    {
        quote: "9th fret",
        
    },
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}

