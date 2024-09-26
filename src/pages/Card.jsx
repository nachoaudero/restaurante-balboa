export const Card = ({ title, value }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
};