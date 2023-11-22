function Rules({ onCloseModal }) {
  return (
    <div className="rules">
      <h1>Rules</h1>
      <img src="./assets/images/image-rules-bonus.svg" />
      <img src="./assets/images/icon-close.svg" onClick={onCloseModal} />
    </div>
  );
}

export default Rules;
