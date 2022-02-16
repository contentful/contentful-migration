interface Section {
  heading: string
  details: string[]
}

interface PlanMessage {
  heading: string
  details: string[]
  sections: Section[]
}

export { PlanMessage, Section }
