import { becomeAPartnerInstructions } from "@/data"
import GenericApplication from "../components/GenericApplication"

const BecomeAPartner = () => {
  return (
    <GenericApplication
    title="Become A Partner"
    buttonLabel="Apply"
    buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSdYiZOaB93p9gGFupabt8SOQkt0g9Phz2I01uTEInoxIzjkRA/viewform?usp=sf_link"
    instructions={becomeAPartnerInstructions} />
  )
}

export default BecomeAPartner