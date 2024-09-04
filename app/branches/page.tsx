import BranchList from "./components/BranchList"
import BranchMap from "./components/BranchMap"

const Branches = () => {
  return (
    <section className="max-w-max mx-auto px-4 py-8
    flex flex-col justify-start items-start gap-y-4">
        <div className="">
            <h3 className="dynamic-subheading uppercase font-bold">
                What are Branches
            </h3>
            <p className="mt-4 text-lg">
            Branches are smaller versions of the main Restoring Rainbows based in all different areas of the world! They contribute so much to the mission, and are great volunteer and leadership opportunities for fans of our work! If you are interested in starting a branch in your city or country.
            </p>
        </div>
        <BranchList />
        <BranchMap />
    </section>
  )
}

export default Branches