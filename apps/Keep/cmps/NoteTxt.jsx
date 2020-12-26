export function NoteTxt({note}) {
   
        return(<section className="note-txt no-txt-decoration">
           <h2>{note.info.title}</h2>
            <h3>{note.info.txt}</h3>
        </section>
        )
    
}