import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-gray-600 mb-4">
          International House of Sciences is a premier educational support center in Lac 1, Tunis. We provide
          personalized learning solutions for schools, teachers, and students to help them excel academically and
          professionally.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          Empowering students and educators through tailored learning solutions, professional training, and advanced
          teaching methods.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <p className="text-gray-600 mb-4">We are located in Berges du Lac, Tunis.</p>
        <Button asChild>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
            View Location on Google Maps
          </a>
        </Button>
      </section>
    </div>
  )
}

