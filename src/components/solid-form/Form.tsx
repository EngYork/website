import { getDownloadURL, getStorage, uploadBytes, ref } from "firebase/storage";
import type { JSXElement } from "solid-js";
import { firebaseClient } from "../../firebase";

type UserInputType = {
  name: string;
  description: string;
  when: string;
  where: string;
  image: File;
};

interface Props {
  databaseFunc: (userInput: UserInputType, url: string | null) => void;
  children: JSXElement;
}

const Form = (props: Props) => {
  const onSubmit = (ev: SubmitEvent) => {
    ev.preventDefault();
    const formData = new FormData(ev.target as HTMLFormElement);
    const userInput = Object.fromEntries(formData) as UserInputType;

    if (userInput.image.name.length > 0) {
      const storage = getStorage(firebaseClient);
      const imagePath = `events/${userInput.name.toLowerCase()}.png`;
      const imageRef = ref(storage, imagePath);
      uploadBytes(imageRef, userInput.image)
        .then((_) => {
          getDownloadURL(ref(storage, imagePath))
            .then((url) => props.databaseFunc(userInput, url))
            .catch((err) => alert(`FIREBASE ERROR: ${err}`));
        })
        .catch((err) => alert(`FIREBASE ERROR: ${err}`));
    } else {
      props.databaseFunc(userInput, null);
    }
  };
  return (
    <form
      onSubmit={onSubmit}
      class="flex flex-col overflow-scroll p-4 border-2 border-slate-900 rounded shadow text-slate-100"
    >
      {props.children}
    </form>
  );
};

export { Form };
