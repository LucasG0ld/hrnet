import "./titleH2.css"

function TitleH2({ title, className }) {
    const titleClass = `hnt-title-h2 ${className || ""}`

    return (
        <h2 className={titleClass}>{title}</h2>
    )
}

export default TitleH2;