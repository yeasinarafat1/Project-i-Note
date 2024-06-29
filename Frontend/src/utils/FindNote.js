

const FindNote = async (baseUrl,_id) => {
    let a = await fetch(`${baseUrl}/note/find/${_id}`)

    let note = await a.json()
    return note.notes;
}

export default FindNote;
