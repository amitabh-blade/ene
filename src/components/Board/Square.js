const Square = ({ id, reservedBy, onClick }) => {
  const handleOnClick = () => {
    if (reservedBy) return;
    onClick?.({ id });
  };

  return (
    <div className="square" onClick={handleOnClick}>
      {reservedBy?.character}
    </div>
  );
};

export default Square;
