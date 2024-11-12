import { startABranchInstructions } from "@/data"
import GenericApplication from "../components/GenericApplication"

const StartABranch = () => {
  return (
    <GenericApplication
    title="Start A Branch"
    buttonLabel="Register"
    buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSc_DgtEZTHJwGfz41yaol17Y0xA6wItYk_VTh5RXp-xL8PSoQ/viewform?usp=sf_link"
    instructions={startABranchInstructions} />
  )
}

export default StartABranch