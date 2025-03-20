import ZipCodeForm from "@/components/client/zip-code-form";

export default async function Home() {
  // const weather = await fetchWeatherByZip();
  return (
    <div>
      <ZipCodeForm />
    </div>
  );
}
