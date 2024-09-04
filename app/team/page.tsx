import ExecutiveBoard from "./components/ExecutiveBoard";
import Volunteers from "./components/Volunteers";

const Team = () => {
  return (
    <section className="max-w-max mx-auto px-4 py-8
    flex flex-col justify-start items-start gap-y-4">
      <ExecutiveBoard />
      <Volunteers />
    </section>
  )
}

export default Team