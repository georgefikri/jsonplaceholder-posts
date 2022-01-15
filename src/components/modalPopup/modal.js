import { Modal, Button } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  modalPopupToggle,
  deletePost,
} from "../../redux/postsReducer/actionCreator";

function ModalPopup({ show, postsId, posts }) {
  const dispatch = useDispatch();

  const handleClose = (boolean) => {
    dispatch(modalPopupToggle(boolean));
  };
  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(null)}>
            No
          </Button>
          <Button variant="primary" onClick={() => handleClose(false)}>
            yesss
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

// export default ModalPopup;

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      modalPopupToggle,
      deletePost,
    },
    dispatch
  );
};

export const ModalPopupComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalPopup);
