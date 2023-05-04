const buttonel = document.getElementById('myButton');
buttonel.onclick = onButtonClicked;

function onButtonClicked() {
    const inputEl = document.getElementById('myButton');

    const now = new Date();
    const tripDateIsoString = `${inputEl.value}T00:00:00`;
    const tripDate = new Date(tripDateIsoString)

    const msNow = now.getTime();
    const msTrip = tripDate.getTime();

    const msTIllTrip = msTrip - msNow;
    const msPerDay = 1000 * 60 * 60 * 24;
    const days = Math.round(msTillTrip / msPerDay);

    const outputEl = document.getElementById('myButton');
    outputEl.innerHTML = `${days} days until your trip`;
    
    console.log('now', now);
    console.log('trip', tripDate);
}