interface TaglineProps {
  text: string;
}

function Tagline({ text }: TaglineProps) {
  return (
    <legend className="flex flex-col justify-center items-center pt-10 bg-medium p-2 text-darkest font-bold text-2xl">
      {text}
    </legend>
  );
}
export default Tagline;
