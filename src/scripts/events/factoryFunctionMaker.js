

// the factory function should be attached to the add new event button. it will take the info added into the add new event form and POST it to the JSON file 
// does this need 

const buildEvent = (name, date, location) => {
    const newEvent = {
        "name": name,
        "date": date,
        "location": location
    }
    return newEvent
}





// const buildEntry = (date, concept, entry, mood) => {
//     const newJournalEntry = {
//         "date": date,
//         "concept": concept,
//         "entry": entry,
//         "mood": mood
//     }
//     return newJournalEntry
// }

// export default buildEntry

