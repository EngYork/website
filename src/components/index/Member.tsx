import { createSignal } from "solid-js";
import { Modal } from "../Modal";

const Member = () => {
  const [showModal, setShoModal] = createSignal<boolean>(false);
  return (
    <>
      <button
        onClick={() => setShoModal(true)}
        class="transition-colors ease-linear duration-200 self-center xl:self-start mt-4 p-4 text-gray-700 rounded bg-slate-100 border-2 border-transparent hover:bg-transparent hover:text-slate-100 hover:border-slate-100"
      >
        Become a member
      </button>
      <Modal
        isOpen={showModal()}
        dimensions="w-max h-max"
        close={() => setShoModal(false)}
      >
        <h4 class="italix text-2xl xl:text-3xl w-full text-slate-100">
          Are you an engineering student?
        </h4>
        <p class="text-slate-100 text-justify my-4 w-80 lg:w-full">
          If you're not, don't worry. You can still join. Onboarding engineering
          students is a different process on our end. Hence why we are asking.
        </p>
        <div class="self-end mt-10 mb-4">
          <a
            href="https://forms.gle/xRJpyYDij7gUSxzf8"
            class="rounded p-4 mr-4 border-2 border-uni-green bg-uni-green text-slate-600 font-bold hover:bg-transparent hover:text-uni-green transition-colors ease-linear duration-200 hover:cursor-pointer"
          >
            Yes
          </a>
          <a
            href="https://yusu.org/shop?activity_id=28"
            class="rounded p-4 border-2 border-uni-yellow bg-uni-yellow text-slate-600 font-bold hover:bg-transparent hover:text-uni-yellow transition-colors ease-linear duration-200 hover:cursor-pointer"
          >
            No
          </a>
        </div>
      </Modal>
    </>
  );
};

export { Member };
