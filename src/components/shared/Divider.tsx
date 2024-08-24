type DividerProps = { text?: string };

export default ({ text }: DividerProps) => {
  return (
    <div className="my-6 flex items-center">
      <hr className="flex-grow border-t border-gray-200" />
      <span className="mx-5 text-gray-500">{text}</span>
      <hr className="flex-grow border-t border-gray-200" />
    </div>
  );
};
