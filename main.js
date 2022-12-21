/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = [
    {
    id: 1,
    text: "make notes",
    author: "pritesh zaver",
    date: "11/7/22",
    topics: ["beginner", "comments", "first day", "algorithm", "ask"]
    }
]; 
/*
Fill the array with several starter objects that have
the following properties.
* id (number)
* text (string)
* author (string)
* date (string)
* topics (array of strings)

Either define the objects within the initial array or
use the .push() method to add them after initialization.
*/

const obj2 = {
    id: 2,
    text: "ask for help",
    author: "pritesh zaver",
    date: "11/8/22",
    topics: ["ask", "assistance", "help", "I don't know", "beginner"]
};

const obj3 = {
    id: 3,
    text: "get into a routine",
    author: "pritesh zaver",
    date: "11/8/22",
    topics: ["routine", "aclimation", "repetition"]
};

const obj4 = {
    id: 4,
    text: "absorb as much information as possible",
    author: "pritesh zaver",
    date: "11/8/22",
    topics: ["questions", "information", "learn", "repetition", "help"]
};

notes.push(obj2);
notes.push(obj3);
notes.push(obj4);

/*
for (const note of notes) {
    console.log(note.text)
};
*/

/*
console.log("*** All Topic Notes ***");
for (const note of notes) {
    for (const topic of note.topics) {
        console.log(topic)
    }
};
*/

/*
let totalTopics = 0;

for (const note of notes) {
    totalTopics = totalTopics + note.topics.length
}
const averageTopics = totalTopics / notes.length;

console.log("*** Average Topics per Note ***");
console.log(averageTopics);
*/

/*
const filteredNotes = [];
const criteria = "ask";



console.log("*** Notes with the github topic ***");
for (const note of notes) {
    if (note.topics.includes(criteria)) {
        filteredNotes.push(note)
        console.log(filteredNotes)
    }
}
*/

let notesTopics = ""

for (const note of notes) {
    notesTopics += `
    <article>
    ${note.text}`
        for (topic of note.topics) {
            const eachTopic = `
    <section>${topic}</section>`
                notesTopics += eachTopic
            }
            notesTopics += `
    </article>`
}
console.log("***  Note Articles  ***")
console.log(notesTopics)
        