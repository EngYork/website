import { createSignal, For, onMount, Show } from "solid-js";
import { authObserver, firebaseClient } from "../firebase";
import { get, getDatabase, ref } from "firebase/database";
import { getDownloadURL, getStorage, ref as sRef } from "firebase/storage";
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

const EventsContainer = (props: Props) => {
  const [auth, setAuth] = createSignal<boolean>(false);

  authObserver(
    () => setAuth(true),
    () => setAuth(false)
  );

  return (
    <div class="w-full flex flex-col p-4 bg-slate-400 dark:bg-slate-700">
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
    </div>
  );
};

export default EventsContainer;
