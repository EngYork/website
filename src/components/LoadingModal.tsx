import { AiOutlineLoading } from "solid-icons/ai";
import { Modal } from "./Modal";

interface Props {
  loading: boolean;
}

const LoadingModal = (props: Props) => {
  return (
    <Modal
      close={() => undefined}
      isOpen={props.loading}
      dimensions="w-20 h-20"
    >
      <AiOutlineLoading class="animate-spin fill-uni-green m-auto" size={25} />
    </Modal>
  );
};

export { LoadingModal };
