export const Button = ({ content, onClick}) => {
    return (
        <button className="custom-button" onClick={onClick}>{content}</button>
    )
}