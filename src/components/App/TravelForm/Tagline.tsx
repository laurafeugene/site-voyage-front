interface TaglineProps {
  text: string;
}

function Tagline({ text }: TaglineProps) {
  return (
    <legend className="flex flex-col justify-center items-center pt-2 bg-gradient-to-r from-blue-zodiac-950 to-blue-zodiac-300 p-2 text-darkest font-bold text-2xl">
      {text}
    </legend>
  );
}
export default Tagline;
