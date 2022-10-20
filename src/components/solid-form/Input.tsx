type Props = {
  value: string | undefined;
  hint: string;
  name: "name" | "when" | "where" | "image" | "form";
  optional?: boolean;
};

const Input = (props: Props) => {
  return (
    <>
      {props.name === "image" ? (
        <div class="bg-gradient-to-tr from-uni-blue via-uni-green to-uni-yellow group transition-colors ease-linear duration-150 rounded w-max p-1 my-4 hover:cursor-pointer">
          <label class="bg-transparent group-hover:bg-slate-600 transition-colors ease-linear duration-200 rounded block p-4 group-hover:cursor-pointer">
            <input
              name={props.name}
              type="file"
              accept="image/webp"
              class="hidden"
            />
            <span class="bg-slate-100 bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-uni-blue group-hover:via-uni-green group-hover:to-uni-yellow group-hover:text-transparent transition-colors ease-linear duration-150">
              Upload image
            </span>
          </label>
        </div>
      ) : (
        <div class="relative p-1 rounded bg-gradient-to-tr from-uni-blue via-uni-green to-uni-yellow my-4 w-full mx-auto">
          <input
            type={props.name === "form" ? "url" : "text"}
            name={props.name}
            class="bg-slate-600 outline-none rounded p-4 w-full peer"
            value={props.value}
            required={!props.optional}
          />
          <div class="absolute -top-3 left-4 bg-slate-600 px-2 peer-focus:-translate-y-3 peer-focus:-translate-x-4 transition-transform ease-in-out duration-150">
            <label class="bg-gradient-to-tr from-uni-blue via-uni-green to-uni-yellow bg-clip-text text-transparent">
              {props.hint}
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export { Input };
