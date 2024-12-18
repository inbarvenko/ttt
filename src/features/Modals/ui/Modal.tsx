import { useState } from "react";
import { BiX } from "react-icons/bi";

import { ButtonLoadingType, ButtonType, ModalProps } from "../types/types";
import ModalWrapper from "./ModalWrapper";
import { Button } from "../../../shared/ui/Button/Button";

const Modal: React.FC<ModalProps> = ({
  editable,
  showEditButton = true,
  header,
  deleteTitle,
  children,
  onClose,
  onSave,
  onDelete,
  onEdit,
}: ModalProps) => {
  const [isLoading, setLoading] = useState<ButtonLoadingType>({
    loading: false,
    type: "",
  });

  const chooseFunc = (type: ButtonType) => {
    switch (type) {
      case "delete":
        return onDelete;
      case "save":
        return onSave;
      case "close":
        return onClose;
      case "edit":
        return onEdit;
      default:
        return;
    }
  };

  const handleClick = (type: ButtonType) => {
    if (isLoading.loading) {
      return;
    }

    const func = chooseFunc(type);
    if (!func) {
      return;
    }

    setLoading({ loading: true, type });

    func();

    setTimeout(() => {
      setLoading({ loading: false, type: "" });
    }, 1000);
  };

  return (
    <ModalWrapper>
      <div className="modal-header">
        <p>{header}</p>
        <BiX
          size={25}
          className="modal-close"
          onClick={() => handleClick("close")}
        />
      </div>

      <div className="body">
        {children}

        <div className="body-buttons">
          {onDelete && (
            <Button
              danger
              loading={isLoading.loading && isLoading.type === "delete"}
              title={deleteTitle || "Удалить"}
              onClick={() => handleClick("delete")}
            >
              {deleteTitle || "Удалить"}
            </Button>
          )}
          {showEditButton && editable && onEdit && (
            <Button
              loading={isLoading.loading && isLoading.type === "edit"}
              title="Изменить"
              type="primary"
              onClick={() => handleClick("edit")}
            >
              Изменить
            </Button>
          )}
          {onSave && (
            <Button
              loading={isLoading.loading && isLoading.type === "save"}
              title="Сохранить"
              type="primary"
              onClick={() => handleClick("save")}
            >
              Сохранить
            </Button>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
