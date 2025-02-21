import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IshtgroupPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Ishtgroup</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Ishtgroup</h2>
        <p className="mb-4">
          Ishtgroup is a leading business solutions provider, dedicated to empowering organizations with innovative
          strategies and cutting-edge technologies. We partner with businesses of all sizes to drive growth, optimize
          operations, and achieve sustainable success in today's dynamic market landscape.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Corporate Solutions",
              description: "Tailored strategies to enhance your corporate structure and decision-making processes.",
            },
            {
              title: "Business Operations",
              description: "Streamline your operations for maximum efficiency and productivity.",
            },
            {
              title: "Growth Strategies",
              description: "Develop and implement effective strategies to drive sustainable business growth.",
            },
            {
              title: "Team Management",
              description: "Optimize your human resources and foster a high-performance team culture.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Ishtgroup?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Experienced team of business consultants and industry experts</li>
          <li>Customized solutions tailored to your specific business needs</li>
          <li>Proven track record of driving growth and improving operational efficiency</li>
          <li>Cutting-edge technologies and methodologies</li>
          <li>Commitment to long-term partnerships and client success</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h2>
        <p className="mb-4">
          Take the first step towards optimizing your business operations and achieving sustainable growth. Contact
          Ishtgroup today for a consultation.
        </p>
        <Button asChild>
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </section>
    </div>
  )
}

