const buildEvent = (name, date, location) => {
    const newEvent = {
        "user_id": null,
        "name": name,
        "date": date,
        "location": location
    }
    return newEvent
}

export default buildEvent