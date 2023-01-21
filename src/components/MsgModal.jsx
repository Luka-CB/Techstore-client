const MsgModal = ({ text, classname }) => {
  return (
    <div className={`msg-modal-container ${classname}`}>
      <span id={`${classname}-text`}>{text}</span>
    </div>
  );
};

export default MsgModal;
