import { Accessor, createSignal, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { AiOutlineDelete, AiOutlineEdit } from "solid-icons/ai";
import { Input } from "./solid-form/Input";
import { TextArea } from "./solid-form/TextArea";
import { getDatabase, ref, update } from "firebase/database";
import { firebaseClient } from "../firebase";
import {
  getDownloadURL,
  getStorage,
  ref as sRef,
  uploadBytes,
} from "firebase/storage";

interface Props {
  id: string;
  name: string;
  description: string;
  when: string;
  where: string;
  image: string | undefined;
  auth: Accessor<boolean>;
}

type UserInputType = {
  name: string;
  description: string;
  when: string;
  where: string;
  image: File;
};

const Event = (props: Props) => {
  const [edit, setEdit] = createSignal<boolean>(false);

  const updateDatabase = (
    userInput: UserInputType,
    imagePath: string | undefined
  ) => {
    const db = getDatabase(firebaseClient);
    update(ref(db, "events/"), {
      [props.id]: { ...userInput, image: imagePath },
    })
      .then(() => {
        alert("Event updated successfully");
        setEdit(false);
      })
      .catch((err) => alert(`FIREBASE ERROR: ${err}`));
  };
  const onSubmit = (ev: SubmitEvent) => {
    ev.preventDefault();
    const formData = new FormData(ev.target as HTMLFormElement);
    const userInput = Object.fromEntries(formData) as UserInputType;

    if (userInput.image.name.length > 0) {
      const storage = getStorage(firebaseClient);
      const imagePath = `events/${userInput.name.toLowerCase()}.png`;
      const imageRef = sRef(storage, imagePath);
      uploadBytes(imageRef, userInput.image)
        .then((_) => {
          getDownloadURL(sRef(storage, imagePath))
            .then((url) => updateDatabase(userInput, url))
            .catch((err) => alert(`FIREBASE ERROR: ${err}`));
        })
        .catch((err) => alert(`FIREBASE ERROR: ${err}`));
    } else {
      updateDatabase(userInput, undefined);
    }
  };

  return (
    <>
      <div class="w-2/3 rounded self-center shadow-lg border-2 border-slate-900 bg-slate-300 dark:bg-slate-600 flex flex-col relative my-4">
        <Show when={props.auth()}>
          <div class="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-slate-400 p-2 rounded-full shadow-lg flex flex-row">
            <button class="ml-4 mr-2" onClick={() => setEdit(true)}>
              <AiOutlineEdit size={25} class="fill-black" />
            </button>
            <button class="ml-2 mr-4">
              <AiOutlineDelete size={25} class="fill-black" />
            </button>
          </div>
        </Show>
        <div class="w-full bg-gradient-to-r from-uni-green to-uni-blue rounded-t">
          <p class="text-center p-4 text-slate-100">
            {props.when} @ {props.where}
          </p>
        </div>
        <h2 class="self-center text-2xl sm:text-3xl italic my-4">
          {props.name}
        </h2>
        <Show when={props.image}>
          <img
            src={props.image}
            alt={`${props.name} poster`}
            class="rounded w-2/3 mx-auto"
          />
        </Show>
        <div class="p-4 text-lg text-justify">
          <p>{props.description}</p>
        </div>
      </div>
      <Show when={edit() && props.auth()}>
        <Portal>
          <div
            class="absolute top-0 left-0 w-full h-full bg-slate-100/60 dark:bg-slate-900/60"
            onFocus={() => setEdit(false)}
          >
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-slate-900 bg-slate-600 p-4 flex flex-col w-2/3 h-2/3 shadow-xl">
              <form
                onSubmit={onSubmit}
                class="flex flex-col overflow-scroll p-4 border-2 border-slate-900 rounded shadow text-slate-100"
              >
                <Input value={props.name} hint="Event name" name="name" />
                <Input value={props.when} hint="When" name="when" />
                <Input value={props.where} hint="Where" name="where" />
                <TextArea
                  value={props.description}
                  hint="Description"
                  name="description"
                />
                <Input value={""} hint="Upload image" name="image" />
                <div class="flex flex-row self-end ">
                  <input
                    type="submit"
                    class="border-2 border-green-500 bg-green-500 text-slate-100 hover:bg-transparent hover:text-green-500 transition-colors ease-linear duration-150 rounded p-4 w-min mr-4 hover:cursor-pointer"
                  />
                  <input
                    type="button"
                    value="Cancel"
                    class="border-2 border-red-500 bg-red-500 text-slate-100 hover:bg-transparent hover:text-red-500 transition-colors ease-linear duration-150 rounded p-4 w-min hover:cursor-pointer"
                    onClick={() => setEdit(false)}
                  />
                </div>
              </form>
            </div>
          </div>
        </Portal>
      </Show>
    </>
  );
};

export default Event;
