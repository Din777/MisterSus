
export function ChangeNoteColor({ onChangeColor }) {
    console.log('entered changeNoteColor');

    return (
        <div className="color-palette">
            <span className="input-color" onClick={(ev) => onChangeColor('#ef476f', ev)} style={{ backgroundColor: '#ef476f'}}> </span>
            <span className="input-color" onClick={(ev) => onChangeColor('#ffd166', ev)} style={{ backgroundColor: '#ffd166'}}> </span>
            <span className="input-color" onClick={(ev) => onChangeColor('#06d6a0', ev)} style={{ backgroundColor: '#06d6a0'}}> </span>
            <span className="input-color" onClick={(ev) => onChangeColor('#118ab2', ev)} style={{ backgroundColor: '#118ab2'}}> </span>
            <span className="input-color" onClick={(ev) => onChangeColor('#45a29e', ev)} style={{ backgroundColor: '#45a29e'}}> </span>
        </div>
    )


}