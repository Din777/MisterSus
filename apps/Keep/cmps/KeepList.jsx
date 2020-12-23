import { KeepPreview } from "./KeepPreview.jsx"

export function KeepList({ notes, onRemove }){

    return(
        <section className="notes-list">
            {console.log('notes',notes)}
            {notes.map(note => {
                return <KeepPreview key={note.id} note ={note} onRemove={onRemove} />
            }) 
            }
        </section>
    )
}