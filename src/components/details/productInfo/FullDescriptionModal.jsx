import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleFullDescriptionModal } from "../../../redux/features/fullDescriptionModalSlice";
import { toggleIsModalOpen } from "../../../redux/features/statesSlice";

const ComputerInfo = ({ info }) => {
  return (
    <div className="description">
      <h5 className="desc">
        Brand: <span>{info.brand}</span>
      </h5>
      <h5 className="desc">
        Type: <span>{info.type}</span>
      </h5>
      <h5 className="desc">
        OS: <span>{info.os}</span>
      </h5>
      <hr />
      <h5 className="desc">
        Graphics: <span>{info.graphics}</span>
      </h5>
      <h5 className="desc">
        Processor: <span>{info.processor}</span>
      </h5>
      <h5 className="desc">
        Screen: <span>{info.screen}</span>
      </h5>
      <hr />
      <h5 className="desc">
        Storage Interface: <span>{info.storage?.interface}</span>
      </h5>
      <h5 className="desc">
        Storage Size: <span>{info.storage?.size} GB</span>
      </h5>
      <h5 className="desc">
        Storage Type: <span>{info.storage?.type}</span>
      </h5>
      <h5 className="desc">
        RAM: <span>{info.ram}</span>
      </h5>
      <hr />
      <h5 className="desc">
        Camera: <span>{info.camera}</span>
      </h5>
      <h5 className="desc">
        Weight: <span>{info.weight}</span>
      </h5>
    </div>
  );
};

const CellphoneInfo = ({ info }) => {
  return (
    <div className="description">
      <h5 className="desc">
        Brand: <span>{info.brand}</span>
      </h5>
      <h5 className="desc">
        Year: <span>{info.year}</span>
      </h5>
      <h5 className="desc">
        Network: <span>{info.network}</span>
      </h5>
      <h5 className="desc">
        Battery: <span>{info.battery}</span>
      </h5>
      <hr />
      <h5 className="desc">
        Dimensions: <span>{info.body?.dimensions}</span>
      </h5>
      <h5 className="desc">
        Weight: <span>{info.body?.weight}</span>
      </h5>
      <h5 className="desc">
        Sim: <span>{info.body?.sim}</span>
      </h5>
      <hr />
      <h5 className="desc">
        Display Type: <span>{info.display?.type}</span>
      </h5>
      <h5 className="desc">
        Display Sise: <span>{info.display?.size}"</span>
      </h5>
      <h5 className="desc">
        Resolution: <span>{info.display?.resolution}</span>
      </h5>
      <h5 className="desc">
        Protection: <span>{info.display?.protection}</span>
      </h5>
      <hr />
      <h5 className="desc">
        OS: <span>{info.platform?.os}</span>
      </h5>
      <h5 className="desc">
        Chipset: <span>{info.platform?.chipset}</span>
      </h5>
      <h5 className="desc">
        CPU: <span>{info.platform?.cpu}</span>
      </h5>
      <h5 className="desc">
        GPU: <span>{info.platform?.gpu}</span>
      </h5>
      <hr />
      <h5 className="desc">
        Card Slot: <span>{info.memory?.cardSlot}</span>
      </h5>
      <h5 className="desc">
        Internal Storage: <span>{info.memory?.internal}</span>
      </h5>
      <h5 className="desc">
        RAM: <span>{info.memory?.ram}</span>
      </h5>
      <hr />
      <h3 id="cam-title">Main Camera</h3>
      <h5 className="desc">
        Camera Type: <span>{info.mainCamera?.picture?.type}</span>
      </h5>
      <div className="pic-details">
        <h5 className="desc">Details:</h5>
        <div className="detail-arr">
          {info.mainCamera?.picture?.details?.map((detail) => (
            <span key={detail}>{detail}</span>
          ))}
        </div>
      </div>
      <h5 className="desc">
        Canera Features: <span>{info.mainCamera?.features}</span>
      </h5>
      <h5 className="desc">
        Video: <span>{info.mainCamera?.video}</span>
      </h5>
      <hr />
      <h3 id="cam-title">Front Camera</h3>
      <h5 className="desc">
        Camera Type: <span>{info.selfieCamera?.picture?.type}</span>
      </h5>
      <div className="pic-details">
        <h5 className="desc">Details:</h5>
        <div className="detail-arr">
          {info.selfieCamera?.picture?.details?.map((detail) => (
            <span key={detail}>{detail}</span>
          ))}
        </div>
      </div>
      <h5 className="desc">
        Canera Features: <span>{info.selfieCamera?.features}</span>
      </h5>
      <h5 className="desc">
        Video: <span>{info.selfieCamera?.video}</span>
      </h5>
    </div>
  );
};

const AccessoryInfo = ({ info }) => {
  return (
    <div className="description">
      <h5 className="desc">
        Brand: <span>{info.brand}</span>
      </h5>
      <h5 className="desc">
        Category: <span>{info.category}</span>
      </h5>
      <hr />
      <p id="desc-text">{info.description}</p>
    </div>
  );
};

const FullDescriptionModal = ({ info, contentType }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(toggleFullDescriptionModal(false));
    dispatch(toggleIsModalOpen(false));
  };

  return (
    <div className="full-description-modal-bg" onClick={handleCloseModal}>
      <div
        className="full-description-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineCloseCircle id="close-icon" onClick={handleCloseModal} />
        <h2 id="product-name">{info.name}</h2>
        {contentType === "computers" && <ComputerInfo info={info} />}
        {contentType === "cellphones" && <CellphoneInfo info={info} />}
        {contentType === "accessories" && <AccessoryInfo info={info} />}
      </div>
    </div>
  );
};

export default FullDescriptionModal;
