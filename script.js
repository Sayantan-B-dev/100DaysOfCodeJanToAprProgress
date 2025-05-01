import progressLinks from './data.js';


const Days = document.querySelector('.Days')
for (let i = 0; i < progressLinks.length; i++) {
    const day = document.createElement('div')
    day.classList.add('eachDay')
    day.innerHTML = `
        <h2 class="text-xl font-semibold ">Day ${i + 1}</h2>
        <pre>${progressLinks[i].progress}</pre>
        <button class="btn">
            <a href="${progressLinks[i].link}" target="_blank">View Progress</a>
        </button>
    `
    Days.appendChild(day)
}