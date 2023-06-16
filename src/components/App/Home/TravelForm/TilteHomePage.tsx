interface TitleTravelHomePageProps {
  text: string;
}

function TitleTravelHomePage({ text }: TitleTravelHomePageProps) {
  return (
    <legend className="flex flex-col justify-center items-center pt-10 bg-medium p-2 text-2xl">
      {text}
    </legend>
  );
}
export default TitleTravelHomePage;
