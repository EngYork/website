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
  image?: string;
};

type Props = {
  events: {
    [key: string]: EventType;
  };
};

const EventsContainer = (props: Props) => {
  // const [events, setEvents] = createSignal<EventType[]>([]);
  const [auth, setAuth] = createSignal<boolean>(false);
  // onMount(async () => {
  //   const db = getDatabase(firebaseClient);
  //   const storage = getStorage(firebaseClient);

  //   const eventsRef = ref(db, "events");

  //   let events: EventType[] = [];

  //   const snapshot = (await get(eventsRef)).val() as Props;

  //   if (snapshot) {
  //     for (var event in snapshot) {
  //       let image = undefined;
  //       try {
  //         const imageURL = await getDownloadURL(
  //           sRef(storage, `events/${snapshot[event].name.toLowerCase()}.jpg`)
  //         );
  //         image = imageURL;
  //       } catch (error) {
  //         console.error("FIREBASE ERROR: ", error);
  //       }
  //       events.push({ ...snapshot[event], image });
  //     }
  //     setEvents(events);
  //   } else console.error("FIREBASE ERROR: Could not retrieve committee");
  // });

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
