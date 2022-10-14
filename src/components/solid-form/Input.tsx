type Props = {
  value: string;
  hint: string;
  name: "name" | "when" | "where";
};

const Input = (props: Props) => {
  return (
    <div class="relative p-1 rounded bg-gradient-to-tr from-uni-blue via-uni-green to-uni-yellow my-4 w-full mx-auto">
      <input
        type="text"
        name={props.name}
        class="bg-slate-600 outline-none rounded p-4 w-full peer"
        value={props.value}
        required={true}
      />
      <div class="absolute -top-3 left-4 bg-slate-600 px-2 peer-focus:-translate-y-3 peer-focus:-translate-x-4 transition-transform ease-in-out duration-150">
        <label class="bg-gradient-to-tr from-uni-blue via-uni-green to-uni-yellow bg-clip-text text-transparent">
          {props.hint}
        </label>
      </div>
    </div>
  );
};

export { Input };
