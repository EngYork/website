import React, { useState } from "react";
import { IconContext } from "react-icons";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form";

type EventCardProps = {
  id: string;
  name: string;
  description: string;
  when: string;
  where: string;
  image?: string;
  admin: boolean;
};

interface IFormData {
  when: string;
  where: string;
  name: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  name,
  description,
  when,
  where,
  image,
  admin,
}) => {
  const [editing, setEditing] = useState(false);
  const [responseError, setResponseError] = useState(undefined);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = (data, event) => {
    const nv = event?.nativeEvent as SubmitEvent;
    const submitter = nv.submitter as HTMLButtonElement;

    if (submitter.name === "deploy") {
      fetch("/api/events/edit", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, id }),
      }).then(async (res) => {
        if (res.status === 200) {
          reset();
          setEditing(false);
        } else {
          setResponseError((await res.json()).message);
        }
      });
    } else {
      reset();
      setEditing(false);
    }
  };

  return (
    <div className="w-2/3 rounded shadow-lg border-2 border-slate-900 bg-slate-300 dark:bg-slate-600 flex flex-col relative">
      {admin && (
        <div className="absolute right-0 -translate-y-1/2 translate-x-1/2 flex flex-row rounded-lg bg-slate-300 p-2 shadow-xl">
          <IconContext.Provider
            value={{
              className: "fill-slate-300 dark:fill-slate-600",
              size: "20",
            }}
          >
            <button
              title="Edit"
              className="mr-2"
              onClick={() => setEditing(true)}
            >
              <MdEdit />
            </button>
            <button title="Remove and Deploy" className="ml-2">
              <MdDeleteForever />
            </button>
          </IconContext.Provider>
        </div>
      )}
      {!editing && (
        <>
          <div className="w-full bg-gradient-to-r from-[#65b32e] to-[#0095d6]">
            <p className="text-center p-4 text-slate-100">
              {when} @ {where}
            </p>
          </div>
          <h2 className="self-center text-2xl sm:text-3xl italic my-4">
            {name}
          </h2>
          <div className="p-4 text-lg">
            <p>{description}</p>
          </div>
        </>
      )}
      {editing && admin && (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="w-full bg-gradient-to-r from-[#65b32e] to-[#0095d6]">
            <p className="text-center p-4 text-slate-100">
              <span>
                <textarea
                  defaultValue={when}
                  {...register("when")}
                  className="bg-transparent outline-none w-1/3 text-center"
                  rows={1}
                />
              </span>
              @
              <span>
                <textarea
                  defaultValue={where}
                  {...register("where")}
                  className="bg-transparent outline-none w-1/3 text-center"
                  rows={1}
                />
              </span>
            </p>
          </div>
          <h2 className="self-center text-2xl sm:text-3xl italic my-4">
            <textarea
              defaultValue={name}
              {...register("name")}
              className="bg-transparent outline-none italic text-center"
              rows={1}
            />
          </h2>
          <div className="p-4 text-lg">
            <textarea
              defaultValue={description}
              {...register("description")}
              className="w-full bg-transparent outline-none"
            />
          </div>
          {responseError && (
            <p className="self-center text-red-500 italic">{responseError}</p>
          )}
          <div className="flex flex-row self-end m-4">
            <button
              className="p-4 border-2 rounded border-red-500 bg-red-500 hover:bg-transparent hover:text-red-500 text-slate-100 transition-colors ease-in-out duration-300"
              name="cancel"
            >
              Cancel
            </button>
            <button
              className="p-4 border-2 ml-4 rounded border-[#65b32e] bg-[#65b32e] hover:bg-transparent hover:text-[#65b32e] text-slate-100 transition-colors ease-in-out duration-300"
              name="deploy"
            >
              Apply and Deploy
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export { EventCard };
