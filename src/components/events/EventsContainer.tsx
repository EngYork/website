import { getDatabase, push, ref } from "firebase/database";
import { createSignal, For, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { authObserver, firebaseClient } from "../../firebase";
import { Form } from "../solid-form/Form";
import { Input } from "../solid-form/Input";
import { TextArea } from "../solid-form/TextArea";
import Event from "./Event";

type EventType = {
  name: string;
  description: string;
  when: string;
  where: string;
  image: string | undefined;
};

type Props = {
  events: {
    [key: string]: EventType;
  };
};

type UserInputType = {
  name: string;
  description: string;
  when: string;
  where: string;
  image: File;
};

const EventsContainer = (props: Props) => {
  const [auth, setAuth] = createSignal<boolean>(false);
  const [create, setCreate] = createSignal<boolean>(false);

  authObserver(
    () => setAuth(true),
    () => setAuth(false)
  );

  const addToDatabase = (
    userInput: UserInputType,
    imagePath: string | null
  ) => {
    const db = getDatabase(firebaseClient);
    push(ref(db, "events/"), {
      ...userInput,
      image: imagePath,
    })
      .then(() => {
        alert("Event created successfully");
        setCreate(false);
      })
      .catch((err) => alert(`FIREBASE ERROR: ${err}`));
  };

  return (
    <div class="w-full flex flex-col p-4">
      <For each={Object.keys(props.events)}>
        {(item) => (
          <Event
            auth={auth}
            id={item}
            name={props.events[item].name}
            description={props.events[item].description}
            when={props.events[item].when}
            where={props.events[item].where}
            image={props.events[item].image}
          />
        )}
      </For>
      <Show when={auth()}>
        <button
          class="bg-gradient-to-tr from-uni-blue via-uni-green to-uni-yellow p-1 mx-auto group rounded"
          onClick={() => setCreate(true)}
        >
          <div class="w-full p-4 group-hover:bg-slate-400 dark:group-hover:bg-slate-700 bg-transparent transition-colors ease-linear duration-150 rounded">
            <span class="w-full text-center bg-slate-400 dark:bg-slate-700 group-hover:bg-gradient-to-tr group-hover:from-uni-blue group-hover:via-uni-green group-hover:to-uni-yellow bg-clip-text text-transparent transition-colors ease-linear duration-150">
              Create new
            </span>
          </div>
        </button>
        <Portal>
          <Show when={create()}>
            <div class="fixed top-0 left-0 bottom-0 right-0 bg-slate-100/60 dark:bg-slate-900/60">
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-slate-900 bg-slate-600 p-4 flex flex-col w-2/3 h-2/3 shadow-xl">
                <Form databaseFunc={addToDatabase}>
                  <Input value={""} hint="Event name" name="name" />
                  <Input value={""} hint="When" name="when" />
                  <Input value={""} hint="Where" name="where" />
                  <TextArea value={""} hint="Description" name="description" />
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
                      onClick={() => setCreate(false)}
                    />
                  </div>
                </Form>
              </div>
            </div>
          </Show>
        </Portal>
      </Show>
    </div>
  );
};

export default EventsContainer;
